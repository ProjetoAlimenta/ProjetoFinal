import { UsuarioLogin } from './../entities/usuariologin.entity';
import { Bcrypt } from 'src/auth/bcrypt/bcrypt';
import { UsuarioService } from './../../usuario/service/usuario.service';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usuarioService: UsuarioService,
        private jwtService: JwtService,
        private bcrypt: Bcrypt
    ) {}


        async validarUsuario(username: string, password: string): Promise<any> {
            const buscarUsuario = await this.usuarioService.findByUsuario(username)

            if(!buscarUsuario)
                throw new HttpException('Usuario não econtrado', HttpStatus.NOT_FOUND)

                const match = await this.bcrypt.compararSenha(buscarUsuario.senha, password)

                if(buscarUsuario && match ) {
                    const {senha, ...result} = buscarUsuario
                    return result;
                }
                return null;
        }


        async login(usuarioLogin: any) {
            const payload = {userName: usuarioLogin.usuario, sub: "db_alimentacao"}

            return{
                usuario: usuarioLogin.usuario,
                token: `Bearer ${this.jwtService.sign(payload)}`
            }
        }
}
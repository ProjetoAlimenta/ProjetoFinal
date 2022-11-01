import { JwtStrategy } from './strategy/jwt.strategy';
import { LocalStrategy } from './strategy/local.strategy';
import { AuthService } from './service/auth.service';
import { jwtConstants } from './constants/constants';
import { UsuarioModule } from './../usuario/usuario.module';
import { Module } from "@nestjs/common";
import { Bcrypt } from "./bcrypt/bcrypt";
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './controllers/auth.controller';

@Module({
    imports: [
        UsuarioModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '24H' },
        })
    ],
    providers: [Bcrypt, AuthService, LocalStrategy, JwtStrategy],
    controllers: [AuthController],
    exports: [Bcrypt]
})
export class AuthModule { }
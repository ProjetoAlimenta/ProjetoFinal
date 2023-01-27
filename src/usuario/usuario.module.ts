import { UsuarioController } from './controller/usuario.controller';
import { Bcrypt } from './../auth/bcrypt/bcrypt';
import { UsuarioService } from './service/usuario.service';
import { Usuario } from './entities/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    providers: [UsuarioService, Bcrypt],
    controllers: [UsuarioController],
    exports: [UsuarioService]
})
export class UsuarioModule{} 
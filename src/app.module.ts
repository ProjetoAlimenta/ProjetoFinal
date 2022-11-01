import { UsuarioModule } from './usuario/usuario.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';  
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.module';
import { Tema } from './tema/entities/tema.entity';
import { TemaModule } from './tema/tema.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    // type: 'mysql',
    // host: 'localhost',
    // port: 3306,
    // username: 'root',
    // password: 'root',
    // database: 'db_alimentacao',
    // entities: [Postagem, Tema, Usuario],
    // synchronize: true
    // }),
    TypeOrmModule.forRoot({
      type:'postgres',
      url: process.env.DATABASE_URL,
      logging: false,
      dropSchema: false,
      ssl: {
        rejectUnauthorized: false
      },
      synchronize: true,
      autoLoadEntities: true,
    }),  
      PostagemModule,
      TemaModule,
      AuthModule,
      UsuarioModule
  ],

  controllers: [AppController],
  providers: [],
})
export class AppModule {}

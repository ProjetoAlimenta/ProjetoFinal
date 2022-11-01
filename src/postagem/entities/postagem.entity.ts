import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Tema } from "src/tema/entities/tema.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import{Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, ManyToOne, JoinColumn} from "typeorm";

@Entity({name: "tb_postagens"})
    export class Postagem{

        
        @PrimaryGeneratedColumn()
        @ApiProperty()
        id: number

        @IsNotEmpty()
        @MaxLength(100)
        @Column({length: 100, nullable: false})
        @ApiProperty()
        titulo: string

        @IsNotEmpty()
        @Column({length: 1000, nullable: false})
        @ApiProperty()
        texto: string

        @IsNotEmpty()
        @UpdateDateColumn() 
        @ApiProperty()
        data: Date

        @ApiProperty({ type: () => Tema})
        @ManyToOne(() => Tema, (tema) => tema.postagem, {
            onDelete: "CASCADE"
        })
        @JoinColumn({})
        tema: Tema


        @ApiProperty({ type: () => Usuario})
        @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
            onDelete: "CASCADE"
        })
        usuario: Usuario
    }

    
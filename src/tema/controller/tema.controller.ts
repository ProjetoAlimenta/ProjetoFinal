import { JwtAuthGuard } from './../../auth/guard/jwt-auth.guard';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { Tema } from "../entities/tema.entity";
import { TemaService } from "../service/tema.service";
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Tema')
@UseGuards(JwtAuthGuard)
@Controller("/tema")
@ApiBearerAuth()
export class TemaController {
    constructor(private readonly TemaService: TemaService) { }
    
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Tema[]> {
        return this.TemaService.findAll();
    }

    @Get("/:id")
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Tema> {
        return this.TemaService.findById(id)
    }

    @Get('/descricao/:descricao')
    @HttpCode(HttpStatus.OK)
    findByDescricao(@Param('descricao') descricao: string): Promise<Tema[]> {
        return this.TemaService.findByDescricao(descricao)
    }

    @Get('/tema/:temaPrincipal')
    @HttpCode(HttpStatus.OK)
    findByTemaPrincipal(@Param('temaPrincipal') temaPrincipal: string): Promise<Tema[]> {
        return this.TemaService.findByTema(temaPrincipal)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() Tema: Tema): Promise<Tema> {
        return this.TemaService.create(Tema)
    }


    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() Tema: Tema): Promise<Tema> {
        return this.TemaService.update(Tema)
    }


    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.TemaService.delete(id)
    }
}


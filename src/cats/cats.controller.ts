import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';
import { createCatDto } from './dto/cats.dto';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Get()
    findALL(): createCatDto[] {
    return this.catsService.findAll();
   }

   @Get(':id')
   getOne(@Param() params): string { 
       return `encontrei o bichano com id ${params.id}`;
   }


   @Get('find/:id')
   findOneMore(@Param('id') id:number): string{
       return `encontrei um outro cat com id ${id}`; 
   }


   @Post()
   async create(@Body() createCatDto: createCatDto): {
       //return `estou criando um cat... ${createCatDto.age} anos chamados ${createCatDto.name}`;
        await this.catsService.create(createCatDto);
    }

   @Put(':id')
   update(@Param('id') id: number, @Body() updateCat: createCatDto): string{
       return 'update cats';
   }

   @Delete(':id')
   delete(@Param('id') id:number): string{
    return 'delete cat';
   }

}
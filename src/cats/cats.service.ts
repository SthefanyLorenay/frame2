import { Controller, Injectable } from '@nestjs/common';
import { CastService } from 'src/cast/cast.service';
import { createCatDto } from './dto/cats.dto';



@Injectable()
export class CatsService {
    private cats: createCatDto[] = [];

    create(cat: createCatDto) {
        // inserir no banco de dados usando repository
        this.cats.push(cat);
    }

    findAll(): createCatDto[] {
        //buscara todos os elementos do banco de dados
        return this.cats;
    }

    findOne(id: number) {
        const cat = this.cats.filter ((value) => value.id === id);
        return this.cats.
    }
    remove(id: number) {
        const cats_remove = this.cats.filter((value) => value.id != id);//etira da lista e pronto
    }

    update(createCatDto: createCatDto, id: number) {
        const cat = this.findOne(createCatDto.id);
    } //atualizar ele na lista

  
    

 }

    
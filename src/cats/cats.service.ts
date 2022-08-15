import { Controller, Injectable } from '@nestjs/common';
import { CastService } from 'src/cast/cast.service';
import { createCatDto } from './dto/cats.dto';



@Injectable()
export class CatsService {
    private readonly cats: createCatDto[] = [];

    create(cat: createCatDto) {
        // inserir no banco de dados usando repository
        this.cats.push(cat);
    }

    findAll(): createCatDto[] {
        //buscara todos os elementos do banco de dados
        return this.cats;
    }

    findOne(id: number) {
        return 'one cat'; //filter
    }
    remove(id: number) {
        return (this.cats.delete(id)'Cat deleted'; //retira da lista e pronto
    }
    update(cat: createCatDto) {
        const cat = this.findOne(createCatDto.id);
    } //atualizar ele na lista

            
 }

    
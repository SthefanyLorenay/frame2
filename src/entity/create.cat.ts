import { Entity } from "@nestjs/common";
@Entity()
export class CreateCat{
    @PrimaryGeneratedColumn()
    id:string;
    name: string;
    age: number;
}
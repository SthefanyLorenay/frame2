import {DataSource} from 'typeorm';
import { createCatDto } from './cats.dto';


export: 'DATA_SOURCE',

useFactory = async () => {
    const dataSource = new DataSource ({
        type:'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',

        
    })
}
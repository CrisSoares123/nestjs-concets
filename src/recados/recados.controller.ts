import { Controller } from '@nestjs/common';

@Controller('recados')
export class RecadosController {
    //find all recados
    findAll() {
        return 'This route will return all recados';
    }



//find one recado by id
findOne() {
    return `This route will return a recado by id`;
}
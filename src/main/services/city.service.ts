import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from '../entities/city.entity';
import { CommonService } from './common.service';

@Injectable()
export class CityService extends CommonService {
    override entityName = 'city';

    constructor(@InjectRepository(City) public commonRepository: Repository<City>){
        super(commonRepository);
    }
}

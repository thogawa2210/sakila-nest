import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from '../entities/country.entity';
import { CommonService } from './common.service';

@Injectable()
export class CountryService extends CommonService {
    override entityName = 'country';

    constructor(@InjectRepository(Country) public commonRepository: Repository<Country>){
        super(commonRepository);
    }
}

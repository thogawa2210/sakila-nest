import { Injectable } from '@nestjs/common';
import { Address } from '../entities/address.entity';
import { CommonService } from './common.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AddressService extends CommonService {
    constructor(@InjectRepository(Address) public commonRepository: Repository<Address>){
        super(commonRepository);
    }
}

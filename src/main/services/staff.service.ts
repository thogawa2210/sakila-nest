import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Staff } from '../entities/staff.entity';
import { CommonService } from './common.service';

@Injectable()
export class StaffService extends CommonService {
    override entityName = 'staff';

    constructor(@InjectRepository(Staff) public commonRepository: Repository<Staff>){
        super(commonRepository);
    }
}

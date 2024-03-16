import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Store } from '../entities/store.entity';
import { CommonService } from './common.service';

@Injectable()
export class StoreService extends CommonService {
    override entityName = 'store';

    constructor(@InjectRepository(Store) public commonRepository: Repository<Store>){
        super(commonRepository);
    }

    override getAll(): Promise<any[]> {
        return this.commonRepository.find({relations: ['manager_staff_id']})
    }
    
    override get(id: any): Promise<any> {
        return this.commonRepository.findOne({ where: { [`${this.entityName}_id`]: id }, relations: ['manager_staff_id'] })
    }
}

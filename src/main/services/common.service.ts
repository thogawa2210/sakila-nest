import { Injectable } from "@nestjs/common";
import { FindOptionsRelations, Repository } from "typeorm";

@Injectable()
export class CommonService {
    entityName = '';
    
    constructor(
        public commonRepository: Repository<any>
    ){}

    getAll(relations?: FindOptionsRelations<any>): Promise<any[]> {
        return this.commonRepository.find({ relations: relations });
    }

    get(id: any, options: { relations?: FindOptionsRelations<any> } = {}): Promise<any> {
        return this.commonRepository.findOne({ where: { [`${this.entityName}_id`]: id }, relations: options.relations })
    }
}
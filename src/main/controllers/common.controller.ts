import { Get, Param } from "@nestjs/common";
import { FindOptionsRelations } from "typeorm";
import { CommonService } from "../services/common.service";

export abstract class CommonController {
    constructor(public commonService: CommonService) { }

    @Get()
    getAll(relations?: FindOptionsRelations<any>){
        return this.commonService.getAll(relations);
    }

    @Get('/:id(\\d+)')
    get(@Param('id') id: number){
        return this.commonService.get(id);
    }
}
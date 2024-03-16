import { Controller } from '@nestjs/common';
import { StoreService } from '../services/store.service';
import { CommonController } from './common.controller';

@Controller('store')
export class StoreController extends CommonController {
    constructor(public commonService: StoreService){
        super(commonService);
    }
}

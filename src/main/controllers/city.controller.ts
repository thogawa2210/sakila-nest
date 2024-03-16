import { Controller } from '@nestjs/common';
import { CityService } from '../services/city.service';
import { CommonController } from './common.controller';

@Controller('city')
export class CityController extends CommonController {
    constructor(public commonService: CityService){
        super(commonService);
    }
}

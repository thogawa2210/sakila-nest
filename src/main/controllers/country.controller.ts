import { Controller } from '@nestjs/common';
import { CountryService } from '../services/country.service';
import { CommonController } from './common.controller';

@Controller('country')
export class CountryController extends CommonController {
    constructor(public commonService: CountryService){
        super(commonService);
    }
}

import { Controller } from '@nestjs/common';
import { AddressService } from '../services/address.service';
import { CommonController } from './common.controller';

@Controller('address')
export class AddressController extends CommonController {
    constructor(public commonService: AddressService){
        super(commonService);
    }
}

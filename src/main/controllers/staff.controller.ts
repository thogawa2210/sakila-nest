import { Controller } from '@nestjs/common';
import { StaffService } from '../services/staff.service';
import { CommonController } from './common.controller';

@Controller('staff')
export class StaffController extends CommonController {
    constructor(public commonService: StaffService){
        super(commonService);
    }
}

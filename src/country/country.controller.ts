import { Controller, Get } from '@nestjs/common';
import { CountryService } from './country.service';

@Controller('country')
export class CountryController {
    constructor(private readonly countryService: CountryService){}

    @Get()
    findAll(){
        return this.countryService.findAll();
    }
    
}

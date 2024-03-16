import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressController } from './controllers/address.controller';
import { CityController } from './controllers/city.controller';
import { CountryController } from './controllers/country.controller';
import { StaffController } from './controllers/staff.controller';
import { Address } from './entities/address.entity';
import { City } from './entities/city.entity';
import { Country } from './entities/country.entity';
import { Staff } from './entities/staff.entity';
import { Store } from './entities/store.entity';
import { AddressService } from './services/address.service';
import { CityService } from './services/city.service';
import { CountryService } from './services/country.service';
import { StaffService } from './services/staff.service';
import { StoreService } from './services/store.service';
import { StoreController } from './controllers/store.controller';

@Module({
    imports:[
        TypeOrmModule.forFeature([Address, City, Country, Staff, Store])
    ],
    controllers: [ CityController, StaffController, CountryController, AddressController, StoreController],
    providers: [ AddressService, CityService, CountryService, StaffService, StoreService],
    exports: [TypeOrmModule]
})
export class MainModuleModule {}

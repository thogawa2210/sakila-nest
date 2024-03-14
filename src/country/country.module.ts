import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryController } from './country.controller';
import { Country } from './country.entity';
import { CountryService } from './country.service';

@Module({
  imports: [TypeOrmModule.forFeature([Country])],
  exports: [TypeOrmModule],
  providers: [CountryService],
  controllers: [CountryController]
})
export class CountryModule {}

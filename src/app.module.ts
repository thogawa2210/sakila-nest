import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { City } from './city/city.entity';
import { CityModule } from './city/city.module';
import { Country } from './country/country.entity';
import { CountryModule } from './country/country.module';
import { StaffModule } from './staff/staff.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'thogia123',
      database: 'sakila',
      entities: [Country, City],
      synchronize: false,
    }),
    StaffModule,
    CountryModule,
    CityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

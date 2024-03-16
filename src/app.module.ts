import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MainModuleModule } from './main/main.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'thogia123',
      database: 'sakila',
      synchronize: false,
      autoLoadEntities: true,
    }),
    MainModuleModule,
  ],
})
export class AppModule {}

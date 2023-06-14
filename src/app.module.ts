import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { RealEstateEntity } from './modules/realEstates/realEstate';
import { RealEstateModel } from './modules/realEstates/realEstate.module';
import { Module } from '@nestjs/common';
dotenv.config();

const host = process.env.HOSTDB;
const username = process.env.USERNAMEDB;
const password = process.env.PASSWORDDB;
const database = process.env.DATABASE;
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: host,
      port: 3306,
      username: username,
      password: password,
      database: database,
      entities: [RealEstateEntity],
      synchronize: true,
    }),
    RealEstateModel,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

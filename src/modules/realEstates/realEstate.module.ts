import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RealEstateEntity } from './realEstate';
import { RealEstateController } from './realEstate.controller';
import { RealEstateService } from './realEstate.service';

@Module({
  imports: [TypeOrmModule.forFeature([RealEstateEntity])],
  controllers: [RealEstateController],
  providers: [RealEstateService],
})
export class RealEstateModel {}

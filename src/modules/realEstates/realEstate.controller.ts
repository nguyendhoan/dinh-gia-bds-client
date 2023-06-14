import { RealEstateService } from './realEstate.service';
import { RealEstateEntity } from './realEstate';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage } from 'src/global/globalEnum';
import { HttpStatus } from 'src/global/globalEnum';

@UsePipes(new ValidationPipe({ transform: true }))
@Controller('real_estate')
export class RealEstateController {
  constructor(private realEstateService: RealEstateService) {}

  // Tìm kiếm tất cả BDS
  @Get()
  async findAll(): Promise<ResponseData<RealEstateEntity[]>> {
    try {
      return new ResponseData<RealEstateEntity[]>(
        await this.realEstateService.findAll(),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<RealEstateEntity[]>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  // Tìm kiếm 1 BDS dựa trên id
  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ResponseData<RealEstateEntity>> {
    try {
      return new ResponseData<RealEstateEntity>(
        await this.realEstateService.findOne(id),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<RealEstateEntity>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  // Tạo BDS
  @Post()
  async create(
    @Body() createRealEstateDto: RealEstateEntity,
  ): Promise<ResponseData<RealEstateEntity>> {
    try {
      return new ResponseData<RealEstateEntity>(
        await this.realEstateService.create(createRealEstateDto),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<RealEstateEntity>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  // Chỉnh sửa BDS
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() createRealEstateDto: RealEstateEntity,
  ): Promise<ResponseData<RealEstateEntity>> {
    try {
      return new ResponseData<RealEstateEntity>(
        await this.realEstateService.update(id, createRealEstateDto),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<RealEstateEntity>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  // Disable BDS
  @Delete(':id')
  async disable(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ResponseData<Partial<RealEstateEntity>>> {
    try {
      return new ResponseData<Partial<RealEstateEntity>>(
        await this.realEstateService.disable(id),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<Partial<RealEstateEntity>>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
}

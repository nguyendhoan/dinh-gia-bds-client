import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RealEstateEntity } from './realEstate';

@Injectable()
export class RealEstateService {
  constructor(
    @InjectRepository(RealEstateEntity)
    private realEstateRepository: Repository<RealEstateEntity>,
  ) {}

  findAll(): Promise<RealEstateEntity[]> {
    return this.realEstateRepository.find();
  }

  findOne(id: number): Promise<RealEstateEntity> {
    return this.realEstateRepository.findOne({ where: { id } });
  }

  create(realEstate: RealEstateEntity): Promise<RealEstateEntity> {
    realEstate.ghim_tren_map =
      realEstate.so_nha +
      ',' +
      ' ' +
      realEstate.duong +
      ',' +
      ' ' +
      realEstate.phuong +
      ',' +
      ' ' +
      realEstate.quan +
      ',' +
      ' ' +
      realEstate.tinh;
    return this.realEstateRepository.save(realEstate);
  }

  async update(
    id: number,
    realEstateDto: RealEstateEntity,
  ): Promise<RealEstateEntity> {
    const updatedRealEstate = await this.realEstateRepository.findOne({
      where: { id },
    });
    if (!updatedRealEstate) {
      throw new NotFoundException('Real estate not found');
    }
    const updated = {
      ...updatedRealEstate,
      ...realEstateDto,
    };
    const savedRealEstate = await this.realEstateRepository.save(updated);
    return savedRealEstate;
  }

  async disable(id: number): Promise<Partial<RealEstateEntity>> {
    const updatedRealEstate = await this.realEstateRepository.findOne({
      where: { id },
    });
    if (!updatedRealEstate) {
      throw new NotFoundException('Real estate not found');
    }
    updatedRealEstate.trang_thai = false;
    await this.realEstateRepository.update(id, updatedRealEstate);
    const disabledRealEstate: Partial<RealEstateEntity> = {
      trang_thai: updatedRealEstate.trang_thai,
    };
    return disabledRealEstate;
  }
}

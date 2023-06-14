import { Optional } from '@nestjs/common';
import { IsEnum, IsIn, IsNumber, IsOptional, MaxLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'real_estate' })
export class RealEstateEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  //Mục đích sử dụng đất
  @Column({
    name: 'muc_dich_su_dung_dat',
    type: 'enum',
    enum: ['0', '1'],
  })
  @IsEnum(['0', '1'], {
    message: 'muc_dich_su_dung_dat: Vui lòng chọn đúng trường',
  })
  muc_dich_su_dung_dat: '0' | '1'; // 0: Đất ở    1: Thương mại dịch vụ

  // Tổng diện tích
  @Column({
    name: 'tong_dien_tich_dat',
    type: 'double',
  })
  @IsNumber({}, { message: 'tong_dien_tich_dat: Vui lòng nhập số' })
  tong_dien_tich_dat: number;

  // Chiều rộng đất
  @Column({
    name: 'chieu_rong_dat',
    type: 'double',
  })
  @IsNumber({}, { message: 'chieu_rong_dat: Vui lòng nhập số' })
  @IsOptional()
  chieu_rong_dat: number;

  //Chiều dài đất
  @Column({
    name: 'chieu_dai_dat',
    type: 'double',
  })
  @IsNumber({}, { message: 'chieu_dai_dat: Vui lòng nhập số' })
  @IsOptional()
  chieu_dai_dat: number;

  // Hình dáng
  @Column({
    name: 'hinh_dang',
    type: 'enum',
    enum: ['0', '1'],
  })
  @IsEnum(['0', '1'], {
    message: 'hinh_dang: Vui lòng chọn đúng trường',
  })
  @IsOptional()
  hinh_dang: '0' | '1'; // 0: Vuông góc   1: Hình dáng không cân đối

  // Vị trí
  @Column({ name: 'vi_tri', type: 'enum', enum: ['0', '1'] })
  @IsEnum(['0', '1'], {
    message: 'vi_tri: Vui lòng chọn đúng trường',
  })
  vi_tri: '0' | '1'; // 0: Mặt tiền đường  1:hẻm(nếu là hẻm thêm trường hem_met)

  // Hẻm met
  @Column({
    name: 'hem_met',
    type: 'double',

    nullable: true,
  })
  @IsNumber({}, { message: 'hem_met: Vui lòng nhập số' })
  @IsOptional()
  hem_met: number;

  // Mô tả tổng thể đất
  @Column({ name: 'mo_ta_dat', type: 'varchar', length: 255, nullable: true })
  mo_ta_dat: string;

  // Loại tài sản
  @Column({ name: 'loai_tai_san', type: 'enum', enum: ['0', '1', '2'] })
  @IsEnum(['0', '1', '2'], {
    message: 'vi_tri: Vui lòng chọn đúng trường',
  })
  loai_tai_san: '0' | '1' | '2'; // 0: Tòa nhà  1: Văn phòng 2: Trung tâm thương mại

  // Chiều rộng nhà
  @Column({
    name: 'chieu_rong_nha',
    type: 'double',
  })
  @IsNumber({}, { message: 'chieu_rong_nha: Vui lòng nhập số' })
  chieu_rong_nha: number;

  // Chiều dài nhà
  @Column({
    name: 'chieu_dai_nha',
    type: 'double',
  })
  @IsNumber({}, { message: 'chieu_dai_nha: Vui lòng nhập số' })
  chieu_dai_nha: number;

  // Tổng số sân
  @Column({
    name: 'tong_so_san',
    type: 'int',
  })
  tong_so_san: number;

  // Tổng diện tích xây dựng
  @Column({
    name: 'tong_dien_tich_nha',
    type: 'double',
  })
  @IsNumber({}, { message: 'tong_dien_tich_nha: Vui lòng nhập số' })
  tong_dien_tich_nha: number;

  // Mô tả tổng thể nhà
  @Column({ name: 'mo_ta_nha', type: 'varchar', length: 255, nullable: true })
  @MaxLength(255, { message: 'mo_ta_nha: Nhập tối đa 255 ký tự' })
  mo_ta_nha: string;

  // Giá giao dịch thành công
  @Column({
    name: 'gia_giao_dich_tc',
    type: 'int',
    nullable: true,
  })
  gia_giao_dich_tc: number;

  // Giá rao bán
  @Column({
    name: 'gia_rao_ban',
    type: 'int',
    nullable: true,
  })
  gia_rao_ban: number;

  //Giá tài sản gắn liền với đất ?/m2
  @Column({
    name: 'gia_tai_san_dat',
    type: 'int',
    nullable: true,
  })
  gia_tai_san_dat: number;

  //Giá QSD đất ?/m2
  @Column({
    name: 'gia_qsd_dat',
    type: 'int',
    nullable: true,
  })
  gia_qsd_dat: number;

  //Tổng giá trị
  @Column({
    name: 'tong_gia_tri',
    type: 'int',
    nullable: true,
  })
  tong_gia_tri: number;

  //Số nhà
  @Column({
    name: 'so_nha',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  @MaxLength(255, { message: 'so_nha: Tối đa 255 ký tự' })
  so_nha: string;

  // Đường ...
  @Column({
    name: 'duong',
    type: 'enum',
    enum: ['Đường 1', 'Đường 2', 'Đường 3'],
  })
  @IsEnum(['Đường 1', 'Đường 2', 'Đường 3'], {
    message: 'duong: Vui lòng chọn đúng trường',
  })
  duong: 'Đường 1' | 'Đường 2' | 'Đường 3'; // 0: Đường 1    1: Đường 2   2: Đường 3

  //Phường (xã thị trấn)
  @Column({
    name: 'phuong',
    type: 'enum',
    enum: ['Phúc Xá', 'Trảng Dài', 'Tân Định'],
  })
  @IsEnum(['Phúc Xá', 'Trảng Dài', 'Tân Định'], {
    message: 'phuong: Vui lòng chọn đúng trường',
  })
  phuong: 'Phúc Xá' | 'Trảng Dài' | 'Tân Định'; // 0: Phúc Xá    1: Trảng Dài    2: Tân Định

  //Quận (huyện, thị xã, TP thuộc tỉnh)
  @Column({
    name: 'quan',
    type: 'enum',
    enum: ['Ba Đình', 'Biên Hòa', 'Quận 1'],
  })
  @IsEnum(['Ba Đình', 'Biên Hòa', 'Quận 1'], {
    message: 'quan: Vui lòng chọn đúng trường',
  })
  quan: 'Ba Đình' | 'Biên Hòa' | 'Quận 1'; // 0: Ba Đình    1: Biên Hòa   2: Quận 1

  // Tỉnh
  @Column({
    name: 'tinh',
    type: 'enum',
    enum: ['Hà Nội', 'Đồng Nai', 'Hồ Chí Minh'],
  })
  @IsEnum(['Hà Nội', 'Đồng Nai', 'Hồ Chí Minh'], {
    message: 'tinh: Vui lòng chọn đúng trường',
  })
  tinh: 'Hà Nội' | 'Đồng Nai' | 'Hồ Chí Minh'; // 0: Hà Nội    1: Đồng Nai    2: Hồ Chí Minh

  // Ghim trên map
  @Column({
    name: 'ghim_tren_map',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  ghim_tren_map: string;

  //Phương pháp thu thập
  @Column({
    name: 'phuong_phap_thu_thap',
    type: 'enum',
    enum: ['0', '1', '2', '3'], //0: Trực tiếp khảo sát   1:Thu thập trên web   2:Nguồn khác    3:số điện thoại
  })
  @IsEnum(['0', '1', '2', '3'], {
    message: 'phuong_phap_thu_thap: Vui lòng chọn đúng trường',
  })
  phuong_phap_thu_thap: '0' | '1' | '2' | '3';

  // Mô tả phương pháp
  @Column({
    name: 'mo_ta_phuong_phap',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  @MaxLength(255, { message: 'mo_ta_phuong_phap: Nhập tối đa 255 ký tự' })
  mo_ta_phuong_phap: string;

  // Nhận định của thẩm định viên
  @Column({
    name: 'nhan_dinh',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  @MaxLength(255, { message: 'nhan_dinh: Nhập tối đa 255 ký tự' })
  nhan_dinh: string;

  // Trạng thái
  @Column({
    name: 'trang_thai',
    type: 'int',
    nullable:true,

    transformer: {
      to: (value: boolean) => (value ? 1 : 0),
      from: (value: number) => value === 1,
    },
  })
  @Optional()
  // @IsIn([0, 1], { message: 'trang_thai: Giá trị phải là 0 hoặc 1' })
  trang_thai: boolean;

  @Column({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}

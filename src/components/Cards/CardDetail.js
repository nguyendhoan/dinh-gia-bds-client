import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useFetch } from 'hooks/useFetch'
import moment from 'moment'

const CardDetail = ({ record }) => {
  const [recordItem, setRecordItem] = useState()
  const [proName, setProName] = useState('')
  const [disName, setDisName] = useState('')
  const [wardName, setWardName] = useState('')

  const [getProvinece] = useFetch('http://localhost:3002/provinces')
  const [getDis] = useFetch(
    `${
      recordItem
        ? `http://localhost:3002/districts/${recordItem.tinh}`
        : `http://localhost:3002/districts/01`
    }`
  )
  const [getWard] = useFetch(
    `${
      recordItem
        ? `http://localhost:3002/wards/${recordItem.quan}`
        : `http://localhost:3002/wards/001`
    }`
  )

  useEffect(() => {
    if (getDis && recordItem) {
      const disName = getDis.data.find((dis) => dis.code === recordItem.quan)
      disName && setDisName(disName.name)
    }
    if (getWard && recordItem) {
      const wardName = getWard.data.find(
        (ward) => ward.code === recordItem.phuong
      )
      wardName && setWardName(wardName.name)
    }
  }, [getDis, recordItem, getWard])

  console.log('#DIS :', disName)
  console.log('#WARD :', wardName)

  const { id } = useParams()

  useEffect(() => {
    if (record) {
      const product = record.find((record) => record.id === parseInt(id))
      setRecordItem(product)

      if (getProvinece) {
        const proName = getProvinece.data.find(
          (pro) => pro.code == product.tinh
        )
        setProName(proName.name)
      }
    }
  }, [record])

  return (
    <>
      <div className='relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-100'>
        <div className='px-6 py-6 mb-0 bg-white rounded-t'>
          <div className='flex justify-between text-center'>
            <h6 className='text-xl font-bold text-blueGray-700'>
              Chi tiết định giá
            </h6>
            <Link to={`/admin/tables/detail/update/${id}`}>
              {' '}
              <button
                className='px-4 py-2 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-lightBlue-500 active:bg-lightBlue-600 hover:shadow-md focus:outline-none'
                type='button'
              >
                Cập nhật
              </button>
            </Link>
          </div>
        </div>
        {recordItem ? (
          <>
            <div className='flex flex-wrap w-full mt-5'>
              <div className='w-1/4 py-10 pt-0 lg:px-10'>
                <div className='flex w-full'>
                  <p className='font-semibold '>ID :</p>
                  <p className='ml-3 font-normal '>{recordItem.id}</p>
                </div>
                <div className='flex w-full'>
                  <p className='font-semibold '>Mục đích sử dụng :</p>
                  <p className='ml-3 font-normal '>
                    {recordItem.muc_dich_su_dung_dat}
                  </p>
                </div>
                <div className='flex w-full'>
                  <p className='font-semibold '>Chiều dài đất :</p>
                  <p className='ml-3 font-normal'>{recordItem.chieu_dai_dat}</p>
                </div>
                <div className='flex w-full'>
                  <p className='font-semibold '>Chiều rộng đất :</p>
                  <p className='ml-3 font-normal '>
                    {recordItem.chieu_rong_dat}
                  </p>
                </div>
                <div className='flex w-full'>
                  <p className='font-semibold '>Tổng diện tích đất :</p>
                  <p className='ml-3 font-normal'>
                    {recordItem.tong_dien_tich_dat}
                  </p>
                </div>
                <div className='flex w-full'>
                  <p className='font-semibold '>Hình dáng :</p>
                  <p className='ml-3 font-normal'>{recordItem.hinh_dang}</p>
                </div>
                <div className='flex w-full'>
                  <p className='font-semibold '>Vị trí:</p>
                  <p className='ml-3 font-normal'>{recordItem.vi_tri}</p>
                </div>
                {recordItem.hem_met && (
                  <div className='flex w-full'>
                    <p className='font-semibold '>Chiều dài hẻm :</p>
                    <p className='ml-3 font-normal'>{recordItem.hem_met}</p>
                  </div>
                )}
                <div className='flex w-full'>
                  <p className='font-semibold '>Mô tả tổng thể :</p>
                  <p className='ml-3 font-normal '>{recordItem.mo_ta_dat}</p>
                </div>
              </div>
              <div className='w-1/4 py-10 pt-0 lg:px-10'>
                <div className='flex w-full'>
                  <p className='font-semibold '>Loại tài sản :</p>
                  <p className='ml-3 font-normal '>{recordItem.loai_tai_san}</p>
                </div>
                <div className='flex w-full'>
                  <p className='font-semibold '>Tổng diện tích xây dựng :</p>
                  <p className='ml-3 font-normal '>
                    {recordItem.tong_dien_tich_nha}
                  </p>
                </div>
                <div className='flex w-full'>
                  <p className='font-semibold '>Chiều dài nhà :</p>
                  <p className='ml-3 font-normal'>{recordItem.chieu_dai_nha}</p>
                </div>
                <div className='flex w-full'>
                  <p className='font-semibold '>Chiều rộng nhà :</p>
                  <p className='ml-3 font-normal '>
                    {recordItem.chieu_rong_nha}
                  </p>
                </div>
                <div className='flex w-full'>
                  <p className='font-semibold '>Tổng diện tích đất :</p>
                  <p className='ml-3 font-normal'>
                    {recordItem.tong_dien_tich_dat}
                  </p>
                </div>
                <div className='flex w-full'>
                  <p className='font-semibold '>Tổng số sàn :</p>
                  <p className='ml-3 font-normal'>{recordItem.tong_so_san}</p>
                </div>
                <div className='flex w-full'>
                  <p className='font-semibold '>Mô tả nhà :</p>
                  <p className='w-1/3 ml-3 font-normal '>
                    {recordItem.mo_ta_nha}
                  </p>
                </div>

                {/* <span>{recordItem ? recordItem.id : <span> Record không có trong danh sách</span>}</span> */}
              </div>
              <div className='w-1/4 py-10 pt-0 lg:px-10'>
                <div className='flex w-full'>
                  <p className='font-semibold '>Giá giao dịch thành công :</p>
                  <p className='ml-3 font-normal '>
                    {recordItem.gia_giao_dich_tc} VNĐ
                  </p>
                </div>
                <div className='flex w-full'>
                  <p className='font-semibold '>Giá rao bán :</p>
                  <p className='ml-3 font-normal '>
                    {recordItem.gia_rao_ban} VNĐ
                  </p>
                </div>
                <div className='flex w-full'>
                  <p className='font-semibold '>
                    Giá tài sản gắn liền với đất :
                  </p>
                  <p className='ml-3 font-normal'>
                    {recordItem.gia_tai_san_dat} VNĐ
                  </p>
                </div>
                <div className='flex w-full'>
                  <p className='font-semibold '>Giá QSD đất :</p>
                  <p className='ml-3 font-normal '>
                    {recordItem.gia_qsd_dat} VNĐ
                  </p>
                </div>
                <div className='flex w-full'>
                  <p className='font-semibold '>Tổng giá trị :</p>
                  <p className='ml-3 font-normal'>
                    {recordItem.tong_gia_tri} VNĐ
                  </p>
                </div>

                {/* <span>{recordItem ? recordItem.id : <span> Record không có trong danh sách</span>}</span> */}
              </div>
              <div className='w-1/4 py-10 pt-0 lg:px-10'>
                <div className='flex w-full'>
                  <p className='font-semibold '>Tỉnh/Thành phố:</p>
                  <p className='ml-3 font-normal '>{proName}</p>
                </div>
                <div className='flex w-full'>
                  <p className='font-semibold '>Quận/Huyện :</p>
                  <p className='ml-3 font-normal '>{disName}</p>
                </div>
                <div className='flex w-full'>
                  <p className='font-semibold '>Phường/Xã :</p>
                  <p className='ml-3 font-normal'>{wardName}</p>
                </div>
                <div className='flex w-full'>
                  <p className='font-semibold '>Đường/Hẻm :</p>
                  <p className='ml-3 font-normal '>{recordItem.duong}</p>
                </div>
                <div className='flex w-full'>
                  <p className='font-semibold '>Số nhà :</p>
                  <p className='ml-3 font-normal'>{recordItem.so_nha}</p>
                </div>

                {/* <span>{recordItem ? recordItem.id : <span> Record không có trong danh sách</span>}</span> */}
              </div>
              <div className='w-1/4 py-10 pt-0 lg:px-10'>
                <div className='flex w-full'>
                  <p className='font-semibold '>Phương pháp thu thập :</p>
                  <p className='ml-3 font-normal '>
                    {recordItem.phuong_phap_thu_thap}
                  </p>
                </div>
                <div className='flex w-full'>
                  <p className='font-semibold '>Nhận định:</p>
                  <p className='ml-3 font-normal '>{recordItem.nhan_dinh}</p>
                </div>
                <div className='flex w-full'>
                  <p className='font-semibold '>Ngày tạo:</p>
                  <p className='ml-3 font-normal'>
                    {moment
                      .utc(recordItem.createdAt)
                      .utcOffset('+07:00')
                      .format('DD/MM/YYYY HH:mm:ss')}
                  </p>
                </div>
                <div className='flex w-full'>
                  <p className='font-semibold '>Ngày sửa :</p>
                  <p className='ml-3 font-normal '>
                    {moment
                      .utc(recordItem.updateAt)
                      .utcOffset('+07:00')
                      .format('DD/MM/YYYY HH:mm:ss')}
                  </p>
                </div>

                {/* <span>{recordItem ? recordItem.id : <span> Record không có trong danh sách</span>}</span> */}
              </div>
            </div>
            <hr className='mt-6 border-b-1 border-blueGray-300' />
          </>
        ) : (
          <div>Không tìm thấy bản ghi</div>
        )}
      </div>
    </>
  )
}

export default CardDetail

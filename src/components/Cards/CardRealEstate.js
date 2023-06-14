import { useFetch } from 'hooks/useFetch'
import React, { useEffect, useRef, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function CardRealEstate() {
  const [provinceCode, setProvinceCode] = useState('01')
  const [districtsCode, setDistrictsCode] = useState('001')
  const [getProvinece] = useFetch('http://localhost:3002/provinces')
  
  const [getDistricts] = useFetch(
    `http://localhost:3002/districts/${provinceCode}`
  )
  const [getWards] = useFetch(`http://localhost:3002/wards/${districtsCode}`)



  console.log(provinceCode);

  // useEffect(() => {
  //   if (getProvinece) {
  //     setProvinces(getProvinece.data)
  //   }
  // }, [provinces])

  // console.log('#Province :', provinces)

  const [alleyLength, SetAlleyLength] = useState('')

  //phuong_phap _thu_nhap
  const [enteredPPTN, setEnteredPPTN] = useState('0')

  //quyen_su_dung_dat_ref
  const muc_dich_ref = useRef()
  const tong_dien_tich_ref = useRef()
  const chieu_dai_ref = useRef()
  const chieu_rong_ref = useRef()
  const hinh_dang_ref = useRef()
  const vi_tri_ref = useRef()
  const hem_ref = useRef()
  const mo_ta_tong_the_ref = useRef()

  //quyen_su_dung_dat_input
  const muc_dich_input = muc_dich_ref.current
  const tong_dien_tich_input = tong_dien_tich_ref.current
  const chieu_dai_input = chieu_dai_ref.current
  const chieu_rong_input = chieu_rong_ref.current
  const hinh_dang_input = hinh_dang_ref.current
  const vi_tri_input = vi_tri_ref.current
  const hem_input = hem_ref.current
  const mo_ta_tong_the_input = mo_ta_tong_the_ref.current

  //loai_tai_san_ref
  const loai_tai_san_ref = useRef()
  const dien_tich_xay_dung_ref = useRef()
  const chieu_dai_tai_san_ref = useRef()
  const chieu_rong_tai_san_ref = useRef()
  const tong_so_san_ref = useRef()
  const mo_ta_tai_san_ref = useRef()

  //loai_tai_san_input
  const loai_tai_san_input = loai_tai_san_ref.current
  const dien_tich_xay_dung_input = dien_tich_xay_dung_ref.current
  const chieu_dai_tai_san_input = chieu_dai_tai_san_ref.current
  const chieu_rong_tai_san_input = chieu_rong_tai_san_ref.current
  const tong_so_san_input = tong_so_san_ref.current
  const mo_ta_tai_san_input = mo_ta_tai_san_ref.current

  //tong_gia_tri_ref

  const gia_thanh_cong_ref = useRef()
  const gia_rao_ban_ref = useRef()
  const gia_tai_san_ref = useRef()
  const gia_QSD_ref = useRef()
  const tong_gia_tri_ref = useRef()

  //tong_gia_tri input

  const gia_thanh_cong_input = gia_thanh_cong_ref.current
  const gia_rao_ban_input = gia_rao_ban_ref.current
  const gia_tai_san_input = gia_tai_san_ref.current
  const gia_QSD_input = gia_QSD_ref.current
  const tong_gia_tri_input = tong_gia_tri_ref.current

  //vi_tri_tai_san
  const tinh_ref = useRef()
  const quan_ref = useRef()
  const phuong_ref = useRef()
  const duong_ref = useRef()
  const so_nha_ref = useRef()

  //vi_tri_tai_san_input

  const tinh_input = tinh_ref.current
  const quan_input = quan_ref.current
  const phuong_input = phuong_ref.current
  const duong_input = duong_ref.current
  const so_nha_input = so_nha_ref.current

  //phuong_phap_thu_nhap ref
  const phuong_phap_thu_nhap_ref = useRef()
  const mo_ta_phuong_phap_ref = useRef()
  //phuong_phap_thu_nhap input
  const phuong_phap_thu_nhap_input = phuong_phap_thu_nhap_ref.current

  //nhan_dinh
  const nhan_dinh_ref = useRef()
  //nhan_dinh_input

  const nhan_dinh_input = nhan_dinh_ref.current

  const handleSelectChange = () => {
    console.log('#REF :', vi_tri_input.value)
    SetAlleyLength(vi_tri_input.value)
  }

  //CREATE
  const createRecord = async (allInput) => {
    console.log("#TEST :",allInput);
    try {
      if (allInput) {
        const res = await fetch('http://localhost:3002/real_estate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(allInput)
        })
        console.log(res)
        if (res.status === 201) {
          toast.success(' Thêm thành công!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light'
          })
        } else {
          toast.error(' Thêm không thành công!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light'
          })
        }
        const data = await res.json()
        console.log('#DATA UPDATE :', data)
      } else {
        return
      }
    } catch (error) {
      console.log('#ERR :', error)
    }
  }
  //Xử_lý_mở_rộng_field_phương_pháp _thu_nhập
  const handlePPTNChange = () => {
    setEnteredPPTN(phuong_phap_thu_nhap_input.value)
   
  }
  const handleSubmit = (e) => {
    const mo_ta_phuong_phap_input = mo_ta_phuong_phap_ref.current
    e.preventDefault()
    const inputData = {
      muc_dich_su_dung_dat: muc_dich_input.value,
      tong_dien_tich_dat: +tong_dien_tich_input.value,
      chieu_rong_dat: +chieu_rong_input.value,
      chieu_dai_dat: +chieu_dai_input.value,
      hinh_dang: hinh_dang_input.value,
      vi_tri: vi_tri_input.value,
      hem_met: hem_input && +hem_input.value,
      mo_ta_dat: mo_ta_tai_san_input.value,
      loai_tai_san: loai_tai_san_input.value,
      chieu_rong_nha: +chieu_rong_tai_san_input.value,
      chieu_dai_nha: +chieu_dai_tai_san_input.value,
      tong_so_san: +tong_so_san_input.value,
      tong_dien_tich_nha: +dien_tich_xay_dung_input.value,
      mo_ta_nha: mo_ta_tai_san_input.value,
      gia_giao_dich_tc: +gia_thanh_cong_input.value,
      gia_rao_ban: +gia_rao_ban_input.value,
      gia_tai_san_dat: +gia_tai_san_input.value,
      gia_qsd_dat: +gia_QSD_input.value,
      tong_gia_tri: +tong_gia_tri_input.value,
      tinh: tinh_input.value,
      quan: quan_input.value,
      phuong: phuong_input.value,
      duong: duong_input.value,
      so_nha: so_nha_input.value,
      ghim_tren_map: 'Việt Nam',
      phuong_phap_thu_thap: phuong_phap_thu_nhap_input.value,
      mo_ta_phuong_phap:
        mo_ta_phuong_phap_input && mo_ta_phuong_phap_input.value,
      nhan_dinh: nhan_dinh_input.value,
      trang_thai: true
    }

    createRecord(inputData)

    console.log('DATA :', inputData)
  }

  const handleProvincesChange = (e) => {
    setProvinceCode(e.target.value)
  }
  const handleDistricsChange = (e) => {
    setDistrictsCode(e.target.value)
  }

  return (
    <>
      <div className='relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-100'>
        <div className='px-6 py-6 mb-0 bg-white rounded-t'>
          <div className='flex justify-between text-center'>
            <h6 className='text-xl font-bold text-blueGray-700'>
              Thêm mới thông tin khảo sát
            </h6>
          </div>
        </div>
        <div className='flex-auto px-4 py-10 pt-0 lg:px-10'>
          <form>
            {/* Quyền sử dụng đất */}
            <h6 className='mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400'>
              Quyền sử dụng đất
            </h6>
            <div className='flex flex-wrap'>
              <div className='w-full px-4 lg:w-6/12'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                    htmlFor='grid-password'
                  >
                    Mục đích *
                  </label>
                  <select
                    ref={muc_dich_ref}
                    type='text'
                    className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                    placeholder='Mục đích...'
                  >
                    <option selected>Chọn mục đích</option>
                    <option value={0}>Đất ở</option>
                    <option value={1}>Thương mại dịch vụ</option>
                  </select>
                </div>
              </div>
              <div className='px-4 lg:w-6/12'>
                <div className='relative flex justify-between w-full mb-3'>
                  <div className='w-full'>
                    <label
                      className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                      htmlFor='grid-password'
                    >
                      Tổng diện tích (m²) *
                    </label>
                    <input
                      ref={tong_dien_tich_ref}
                      type='number'
                      className='px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow w--95 placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                      placeholder='0'
                    />
                  </div>
                  <div className='w-full'>
                    <label
                      className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                      htmlFor='grid-password'
                    >
                      Chiều dài (chiều ngang) (m) *
                    </label>
                    <input
                      ref={chieu_dai_ref}
                      type='number'
                      className='px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow w--95 placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                      placeholder='0'
                    />
                  </div>
                  <div className='w-full'>
                    <label
                      className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                      htmlFor='grid-password'
                    >
                      Chiều rộng (chiều sâu) (m) *
                    </label>
                    <input
                      ref={chieu_rong_ref}
                      type='number'
                      className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                      placeholder='0'
                    />
                  </div>
                </div>
              </div>
              <div className='w-full px-4 lg:w-6/12'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                    htmlFor='grid-password'
                  >
                    Hình dáng *
                  </label>
                  <select
                    ref={hinh_dang_ref}
                    type='text'
                    className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                    placeholder='Hình dáng'
                  >
                    <option selected>Chọn hình dáng </option>
                    <option value={0}>Vuông góc</option>
                    <option value={1}>Không cân đối</option>
                  </select>
                </div>
              </div>
              <div className='flex w-full px-4 lg:w-6/12'>
                <div className='w-full mb-3'>
                  <label
                    className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                    htmlFor='grid-password'
                  >
                    Vị trí *
                  </label>
                  <select
                    ref={vi_tri_ref}
                    onChange={handleSelectChange}
                    id='countries'
                    className='w-full px-3 py-3  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  >
                    <option selected>Chọn vị trí</option>
                    <option value='0'>Mặt tiền</option>
                    <option value='1'>Hẻm</option>
                  </select>
                </div>
                {alleyLength == '1' && (
                  <div className='w-full mb-3'>
                    <label
                      className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                      htmlFor='grid-password'
                    >
                      Độ dài của hẻm (m) *
                    </label>
                    <input
                      ref={hem_ref}
                      type='number'
                      className='px-3 py-3 ml-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow w--96 placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                      placeholder='0'
                    />
                  </div>
                )}
              </div>

              <div className='w-full px-4 lg:w-full'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                    htmlFor='grid-password'
                  >
                    Mô tả tổng thể
                  </label>
                  <textarea
                    ref={mo_ta_tong_the_ref}
                    type='text'
                    rows={10}
                    className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                    placeholder='Mô tả tổng thể'
                  />
                </div>
              </div>
            </div>
            <hr className='mt-6 border-b-1 border-blueGray-300' />

            {/* Tài sản gắn liền với đất */}
            <h6 className='mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400'>
              Tài sản gắn liền với đất
            </h6>
            <div className='flex flex-wrap'>
              <div className='w-full px-4 lg:w-6/12'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                    htmlFor='grid-password'
                  >
                    Loại tài sản *
                  </label>
                  <select
                    ref={loai_tai_san_ref}
                    type='text'
                    className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                    placeholder='Nhà ở'
                  >
                    <option selected>Loại tài sản </option>
                    <option value='0'>Nhà ở</option>
                    <option value='1'>Văn phòng</option>
                    <option value='2'>Trung tâm thương mại</option>
                  </select>
                </div>
              </div>
              <div className='px-4 lg:w-6/12'>
                <div className='relative flex justify-between w-full mb-3'>
                  <div className='w-full'>
                    <label
                      className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                      htmlFor='grid-password'
                    >
                      Diện tích xây dựng (m²) *
                    </label>
                    <input
                      ref={dien_tich_xay_dung_ref}
                      type='number'
                      className='px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow w--95 placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                      placeholder='0'
                    />
                  </div>
                  <div className='w-full'>
                    <label
                      className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                      htmlFor='grid-password'
                    >
                      Chiều dài (m) *
                    </label>
                    <input
                      ref={chieu_dai_tai_san_ref}
                      type='number'
                      className='px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow w--95 placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                      placeholder='0'
                    />
                  </div>
                  <div className='w-full'>
                    <label
                      className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                      htmlFor='grid-password'
                    >
                      Chiều rộng (m) *
                    </label>
                    <input
                      ref={chieu_rong_tai_san_ref}
                      type='number'
                      className='px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow w--95 placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                      placeholder='0'
                    />
                  </div>
                </div>
              </div>

              <div className='w-full px-4 lg:w-6/12'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                    htmlFor='grid-password'
                  >
                    Tổng số sàn *
                  </label>

                  <input
                    ref={tong_so_san_ref}
                    type='number'
                    className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                    placeholder='0'
                  />
                </div>
              </div>
              <div className='w-full px-4 lg:w-full'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                    htmlFor='grid-password'
                  >
                    Mô tả tổng thể
                  </label>
                  <textarea
                    ref={mo_ta_tai_san_ref}
                    type='text'
                    rows={10}
                    className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                    placeholder='Mô tả tổng thể'
                  />
                </div>
              </div>
            </div>

            <hr className='mt-6 border-b-1 border-blueGray-300' />

            {/* Tổng giá trị */}
            <h6 className='mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400'>
              Tổng giá trị *
            </h6>

            <div className='px-4 lg:w-full'>
              <div className='flex justify-between w-full mb-3'>
                <div className='w--18'>
                  <label
                    className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                    htmlFor='grid-password'
                  >
                    Giá giao dịch thành công (VNĐ) *
                  </label>
                  <input
                    ref={gia_thanh_cong_ref}
                    type='number'
                    className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                    placeholder='0'
                  />
                </div>
                <div className='w--18'>
                  <label
                    className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                    htmlFor='grid-password'
                  >
                    Giá rao bán(VNĐ) *
                  </label>
                  <input
                    ref={gia_rao_ban_ref}
                    type='number'
                    className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                    placeholder='0'
                  />
                </div>
                <div className='w--18'>
                  <label
                    className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                    htmlFor='grid-password'
                  >
                    Giá tài sản gắn liền với đất (VNĐ) *
                  </label>
                  <input
                    ref={gia_tai_san_ref}
                    type='number'
                    className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                    placeholder='0'
                  />
                </div>
                <div className='w--18'>
                  <label
                    className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                    htmlFor='grid-password'
                  >
                    Giá QSD đất (VNĐ) *
                  </label>
                  <input
                    ref={gia_QSD_ref}
                    type='number'
                    className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                    placeholder='0'
                  />
                </div>
                <div className='w--18'>
                  <label
                    className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                    htmlFor='grid-password'
                  >
                    Tổng giá trị (VNĐ) *
                  </label>
                  <input
                    ref={tong_gia_tri_ref}
                    type='number'
                    className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                    placeholder='0'
                  />
                </div>
              </div>
            </div>
            <hr className='mt-6 border-b-1 border-blueGray-300' />
            {/* Vị trí tài sản  */}
            <h6 className='mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400'>
              Vị trí tài sản *
            </h6>
            <div className='flex flex-wrap w-full'>
              <div className='px-4 w--20'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                    htmlFor='grid-password'
                  >
                    Tỉnh/Thành phố *
                  </label>

                  <select
                    ref={tinh_ref}
                    className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                    placeholder='Tỉnh'
                    onChange={handleProvincesChange}
                  >
                    <option value=''>Chọn tỉnh thành / thành phố</option>
                    {getProvinece &&
                      getProvinece.data.map((item, index) => (
                        <option key={index} value={item.code}>
                          {item.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className='px-4 w--20'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                    htmlFor='grid-password'
                  >
                    Quận *
                  </label>
                  <select
                    ref={quan_ref}
                    type='text'
                    className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                    placeholder='Quận/Huyện'
                    onChange={handleDistricsChange}
                  >
                    <option value=''>Chọn Quận/Huyện</option>
                    {getDistricts ?
                      getDistricts.data.map((item, index) => (
                        <option key={index} value={item.code}>
                          {item.name}
                        </option>
                      )):""}
                  </select>
                </div>
              </div>
              <div className='px-4 w--20'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                    htmlFor='grid-password'
                  >
                    Phường/Xã *
                  </label>
                  <select
                    ref={phuong_ref}
                    type='text'
                    className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                    placeholder='Phường'
                  >
                    <option value=''>Chọn Phường/Xã</option>
                    {getWards &&
                      getWards.data.map((item, index) => (
                        <option key={index} value={item.code}>
                          {item.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className='px-4 w--20'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                    htmlFor='grid-password'
                  >
                    Đường/Hẻm *
                  </label>
                  <input
                    ref={duong_ref}
                    className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                    placeholder='Đường'
                  />
                </div>
              </div>
              <div className='px-4 w--20'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                    htmlFor='grid-password'
                  >
                    Số nhà *
                  </label>
                  <input
                    ref={so_nha_ref}
                    className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                    placeholder='Số nhà'
                  />
                </div>
              </div>
              <div className='w-full px-4 w--20'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                    htmlFor='grid-password'
                  >
                    Ghim trên map *
                  </label>
                  <div className='w-full p-2 border-2 rounded map'>
                    <iframe
                      src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7838.684254869503!2d106.70676642475235!3d10.785086936675276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1547181657956'
                      className='w-full'
                      height='450'
                      frameborder='0'
                      style={{ border: 0 }}
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            <hr className='mt-6 border-b-1 border-blueGray-300' />

            {/* Phương pháp thu nhập */}
            <h6 className='mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400'>
              Phương pháp thu nhập *
            </h6>
            <div className='flex flex-wrap '>
              <div
                className={
                  (enteredPPTN !== '0' ? 'w-1/2 ' : 'w-full ') + 'px-4 lg:w-1/3'
                }
              >
                <div className='relative w-full mb-3'>
                  <select
                    onChange={handlePPTNChange}
                    ref={phuong_phap_thu_nhap_ref}
                    type='text'
                    className={
                      'w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                    }
                    placeholder='Trực tiếp khảo sát'
                  >
                    <option selected>
                      Chọn phương pháp thu nhập
                    </option>
                    <option value='0'>Trực tiếp khảo sát</option>
                    <option value='1'>Thu nhập trên website</option>
                    <option value='2'>Số điện thoại cung cấp</option>
                    <option value='3'>Nguồn khác..</option>
                  </select>
                </div>
              </div>
              {enteredPPTN !== '0' && (
                <div className='w-1/2 px-4 lg:w-1/3'>
                  <div className='relative w-full mb-3'>
                    <textarea
                      ref={mo_ta_phuong_phap_ref}
                      rows={10}
                      type='text'
                      className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                      placeholder='Mô tả phương pháp thu nhập...'
                    ></textarea>
                  </div>
                </div>
              )}
            </div>

            <hr className='mt-6 border-b-1 border-blueGray-300' />

            <h6 className='mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400'>
              Nhận định
            </h6>
            <div className='flex flex-wrap'>
              <div className='w-full px-4 lg:w-12/12'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                    htmlFor='grid-password'
                  >
                    Tình hình bất động sản khu vực thu thập
                  </label>
                  <textarea
                    ref={nhan_dinh_ref}
                    type='text'
                    className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                    placeholder=' Tình hình bất động sản khu vực thu thập.'
                    rows='10'
                  ></textarea>
                </div>
              </div>
            </div>
            <div className='flex justify-end w-full pr-4'>
              <button
                className='px-4 py-2 ml-3 mr-12 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-lightBlue-500 active:bg-lightBlue-600 hover:shadow-md focus:outline-none'
                type='submit'
                onClick={handleSubmit}
              >
                Lưu
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CardRealEstate

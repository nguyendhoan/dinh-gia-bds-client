import { useFetch } from "hooks/useFetch";
import React, { useEffect, useRef, useState } from "react";

function CardRealEstate() {
  const { data } = useFetch("https://vapi.vnappmob.com/api/province");

  const locationRef = useRef();
  // const locationValue = locationRef.current.value
  const handleSelectChange = () => {
    console.log("#REF :");
  };

  return (
    <>
      <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-100">
        <div className="px-6 py-6 mb-0 bg-white rounded-t">
          <div className="flex justify-between text-center">
            <h6 className="text-xl font-bold text-blueGray-700">
              Bất động sản
            </h6>
            {/* <button
              className="px-4 py-2 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-lightBlue-500 active:bg-lightBlue-600 hover:shadow-md focus:outline-none"
              type="button"
            >
              Settings
            </button> */}
          </div>
        </div>
        <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
          <form>
            {/* Quyền sử dụng đất */}
            <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400">
              Quyền sử dụng đất
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Mục đích
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    defaultValue="Mục đích..."
                  />
                </div>
              </div>
              <div className="pr-4 lg:w-6/12">
                <div className="relative flex justify-between w-full mb-3">
                  <div className="w-full px-4">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Tổng diện tích (m²)
                    </label>
                    <input
                      type="number"
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow w--95 placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      defaultValue="0"
                    />
                  </div>
                  <div className="w-full px-4">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Chiều dài (chiều ngang)
                    </label>
                    <input
                      type="number"
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow w--95 placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      defaultValue="0"
                    />
                  </div>
                  <div className="w-full pl-4">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Chiều rộng (chiều sâu)
                    </label>
                    <input
                      type="number"
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      defaultValue="0"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Hình dáng
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    defaultValue="Hình dáng"
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Vị trí
                  </label>
                  <select
                    ref={locationRef}
                    onChange={handleSelectChange}
                    id="countries"
                    class="px-3 py-3  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Chọn vị trí</option>
                    <option value="1">Mặt tiền</option>
                    <option value="2">Hẻm</option>
                  </select>
                </div>
              </div>
              <div className="w-full px-4 lg:w-full">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Mô tả tổng thể
                  </label>
                  <textarea
                    type="text"
                    rows={10}
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    defaultValue="Mô tả tổng thể"
                  />
                </div>
              </div>
            </div>
            <hr className="mt-6 border-b-1 border-blueGray-300" />

            {/* Tài sản gắn liền với đất */}
            <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400">
              Tài sản gắn liền với đất
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Loại tài sản
                  </label>
                  <select
                    type="text"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    defaultValue="Nhà ở"
                  >
                    <option selected>Loại tài sản </option>
                    <option value="1">Nhà ở</option>
                    <option value="2">Văn phòng</option>
                  </select>
                </div>
              </div>
              <div className="px-4 lg:w-6/12">
                <div className="relative flex justify-between w-full mb-3">
                  <div className="w-full pr-4">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Diện tích xây dựng
                    </label>
                    <input
                      type="number"
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow w--95 placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      defaultValue="0"
                    />
                  </div>
                  <div className="w-full px-4">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Chiều dài
                    </label>
                    <input
                      type="number"
                      className=" w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow w--95 placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      defaultValue="0"
                    />
                  </div>
                  <div className="w-full pl-4">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Chiều rộng
                    </label>
                    <input
                      type="number"
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow w--95 placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      defaultValue="0"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full px-4 lg:w-6/12">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Tổng số sân
                  </label>

                  <input
                    type="number"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    defaultValue="0"
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-full">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Mô tả tổng thể
                  </label>
                  <textarea
                    type="text"
                    rows={10}
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    defaultValue="Mô tả tổng thể"
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            {/* Tổng giá trị */}
            <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400">
              Tổng giá trị
            </h6>

            <div className="px-4 lg:w-full">
              <div className="flex justify-between w-full mb-3">
                <div className="w-full pr-4">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Giá giao dịch thành công
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    defaultValue="0"
                  />
                </div>
                <div className="w-full px-4">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Giá rao bán
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    defaultValue="0"
                  />
                </div>
                <div className="w-full px-4">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Giá tài sản gắn liền với đất
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    defaultValue="0"
                  />
                </div>
                <div className="w-full px-4">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Giá QSD đất
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    defaultValue="0"
                  />
                </div>
                <div className="w-full pl-4">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Tổng giá trị
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    defaultValue="0"
                  />
                </div>
              </div>
            </div>
            {/* <div className="w-full px-4 lg:w-6/12">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Giá QSD đất
                  </label>
                  <input
                    type="number"
                    className="px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    defaultValue="0"
                  />
                </div>
              </div>

              <div className="w-full px-4 lg:w-6/12">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Tổng giá trị
                  </label>

                  <input
                    type="number"
                    className="px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    defaultValue="0"
                  />
                </div>
              </div> */}

            <hr className="mt-6 border-b-1 border-blueGray-300" />
            {/* Vị trí tài sản  */}
            <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400">
              Vị trí tài sản
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-1/3">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Tỉnh
                  </label>
                  <select
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    defaultValue="Tỉnh"
                  >
                    <option value="0">Chọn tỉnh thành</option>
                    {data &&
                      data.results.map((item, index) => (
                        <option key={index} value={item.province_id}>
                          {item.province_name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/3">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Quận
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    defaultValue="Quận"
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/3">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Phường
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    defaultValue="Phường"
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/3">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Đường
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    defaultValue="Đường"
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/3">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Số nhà
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    defaultValue="Số nhà"
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/3">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Ghim trên map
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    defaultValue="Ghim trên map"
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            {/* Phương pháp thu nhập */}
            <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400">
              Phương pháp thu nhập
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-1/3">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Trực tiếp khảo sát
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    defaultValue="Trực tiếp khảo sát"
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/3">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Thu nhập trên website
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    defaultValue="Thu nhập trên website"
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/3">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Nguồn khác
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    defaultValue="Nguồn khác"
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/3">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Số điện thoại cung cấp thông tin
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    defaultValue="Số điện thoại cung cấp thông tin"
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400">
              Nhận định
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-12/12">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Tình hình bất động sản khu vực thu thập
                  </label>
                  <textarea
                    type="text"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    defaultValue=" Tình hình bất động sản khu vực thu thập."
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex justify-end w-full pr-4">
              <button
                className="px-4 py-2 ml-3 mr-12 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-lightBlue-500 active:bg-lightBlue-600 hover:shadow-md focus:outline-none"
                type="submit"
              >
                Lưu
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CardRealEstate;

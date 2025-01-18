  "use client";
import { useState } from "react";
import Header from "../components/Header/Header";
import productData from "../../../public/shopData.json";
import CompaniesLogo from "../components/Companies-logo/companies-logo";
import Footer from "../components/Footer/Footer";

export default function Shop() {
  const [Data, setData] = useState(productData);
  return (
    <>
      <Header bgColor="bg-[#23856D]" />
      <div className="max-w-[1440px] m-auto">
        <div className=" max-w-[1440px] m-auto flex   justify-between items-center px-4 py-[10px] ">
          <h3 className="text-[#252B42] text-[24px] font-bold">Shop</h3>
          <div className="px-2">
            <ul className="flex justify-between items-center w-[150px]  py-[20px]">
              <li className="font-bold text-[14px]  text-[#252B42]">Home</li>
              <li>
                <i className="fa-solid fa-chevron-right text-[#BDBDBD] text-[20px]"></i>
              </li>
              <li className="font-bold text-[14px]  text-[#737373]">Pricing</li>
            </ul>
          </div>
        </div>
        <div className="grid-shop max-w-[1440px] h-[auto] m-auto  px-2 py-[40px]">
          <div className="shop-items shop-i-1">
            <h5 className="text-[white] font-bold text-[16px]">CLOTHS</h5>
            <h6 className="text-[white] font-bold text-[14px]">5 Items</h6>
          </div>
          <div className="shop-items shop-i-2">
            <h5 className="text-[white] font-bold text-[16px]">CLOTHS</h5>
            <h6 className="text-[white] font-bold text-[14px]">5 Items</h6>
          </div>
          <div className="shop-items shop-i-3">
            <h5 className="text-[white] font-bold text-[16px]">CLOTHS</h5>
            <h6 className="text-[white] font-bold text-[14px]">5 Items</h6>
          </div>
          <div className="shop-items shop-i-4">
            <h5 className="text-[white] font-bold text-[16px]">CLOTHS</h5>
            <h6 className="text-[white] font-bold text-[14px]">5 Items</h6>
          </div>
        </div>
        <div className="filter-shop-div flex justify-around items-center py-[40px] ">
          <h6 className="text-[14px] font-bold text-[#737373]">
            Showing all 12 results
          </h6>
          <div className="flex justify-between gap-[15px]  w-[auto] p-[1rem]  text-[#737373] font-bold text-14px">
            Views:
            <div>
              <i className="fa-solid fa-grip"></i>
            </div>
            <div>
              <i className="fa-solid fa-list"></i>
            </div>
          </div>
          <div className="flex justify-between w-[15rem] ">
            <div className="font-bold border text-[#737373] bg-[#DDDDDD] border-[#737373] flex items-center gap-x-2   px-[20px] py-[10px] rounded-md">
              Papularity
              <i className="fa-solid fa-angle-down"></i>
            </div>
            <div className="font-bold bg-[#23A6F0] text-white px-[20px] py-[10px] rounded-md">
              Filter
            </div>
          </div>
        </div>
        <CompaniesLogo />
        <Footer />
        <div className="max-w-1040px">
          <div className="grid-shop-product py-[80px]  px-2 gap-x-8">
            {Data.map((item, index) => {
              return (
                <div key={item.id} className="g-team-inno-items g-t-inno-i-1">
                  <div
                    className="h-[70%]  g-shop-01 g-shop-01-1"
                    style={{
                      backgroundImage: `url(${item.imageSrc})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div className="h-[30%]  g-shop-02 g-shop-02-1 flex flex-col items-center justify-between py-5">
                    <h5 className="font-bold text-[16px] text-[#252B42]">
                      {item.h5}
                    </h5>

                    <a className="text-[#737373] text-[14px] font-bold">
                      {item.a}
                    </a>
                    <div className="flex gap-x-4 ">
                      <span className="text-[16px] font-bold text-[#BDBDBD]">
                        {item.span1}
                      </span>
                      <span className="text-[16px] font-bold text-[#23856D]">
                        {item.span2}
                      </span>
                    </div>
                    <div className="grid-shop-icons-div flex gap-2  ">
                      <div className="bg-[#23A6F0] w-[1rem] h-[1rem] rounded-[50%]"></div>
                      <div className="bg-[#23856D] w-[1rem] h-[1rem] rounded-[50%]"></div>
                      <div className="bg-[#E77C40] w-[1rem] h-[1rem] rounded-[50%]"></div>
                      <div className="bg-[#23856D] w-[1rem] h-[1rem] rounded-[50%]"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="max-w-[1040px] m-auto py-4 px-2">
          <div className="shop-div-navigation  font-bold flex max-w-[26rem] m-auto  items-center justify-center">
            <div className="border next-first-div border-[#737373] p-[25px] text-[#23A6F0] ">
              First
            </div>
            <div className="text-[#23A6F0]  py-[25px] px-[20px] border border-[#737373]">
              1
            </div>
            <div className="bg-[#23A6F0] text-[white] py-[25px] px-[20px] border border-[#737373]">
              2
            </div>
            <div className="text-[#23A6F0]  py-[25px] px-[20px] border border-[#737373]">
              3
            </div>
            <div className="border next-first-div border-[#737373] text-[#737373]  p-[25px]">
              Next
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";
import Nav2 from "../components/nav2/nav2";
import productData from "../../../public/innovationData.json";
import { useState } from "react";
export default function Innovation() {
  const [Data, setData] = useState(productData);
  return (
    <>
      <Nav2 />
      <div className="max-w-[1440px] m-auto h-[auto]">
        <div className="max-w-[1040px] m-auto flex flex-col justify-between items-center py-[30px] px-2 ">
          <h5 className="text-[16px] font-bold text-[#737373]">WHAT WE DO</h5>
          <h1 className="inno-h1 text-[58px] font-bold text-[#252B42]">
            Innovation tailored for you
          </h1>

          <div className="px-2">
            <div className="flex justify-between items-center w-[150px]  py-[20px]">
              <a
                className="font-bold text-[14px]  text-[#252B42]"
                href="/"
                target="_blank"
              >
                Home
              </a>

              <i className="fa-solid fa-chevron-right text-[#BDBDBD] text-[25px]"></i>

              <a
                className="font-bold text-[14px]  text-[#737373]"
                href="/pricing"
                target="_blank"
              >
                Pricing
              </a>
            </div>
          </div>
        </div>
        <div className="innovation-grid max-w-[1440px] m-auto  py-[40px] h-[auto] px-2">
          <div className="innovation-items in-i-1"></div>
          <div className="innovation-items in-i-2 flex flex-col gap-6">
            <div className="in-02-1 h-[50%]"></div>
            <div className="in-02-2 h-[50%]"></div>
          </div>
          <div className="innovation-items in-i-3  flex flex-col gap-6">
            <div className="in-03-1 h-[50%]"></div>
            <div className="in-03-2 h-[50%]"></div>
          </div>
        </div>
        <div className="max-w-[1040px] m-auto  h-auto py-[80px]">
          <div className="info mb-8  w-[50%] m-auto text-center">
            <h2 className="text-[40px] text-[#252B42] font-bold">
              Meet Our Team.{" "}
            </h2>
            <p className="text-[14px] font-[400] text-[#737373]">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>

          <div className="grid-team-inno py-[80px] px-2 gap-y-20 gap-x-8">
            {Data.map((item, index) => {
              return (
                <div key={item.id} className="g-team-inno-items g-t-inno-i-1">
                  <div
                    className="h-[60%]  t-inno-01 t-inno-01-1"
                    style={{ backgroundImage: `url(${item.imageSrc})` }}
                  ></div>
                  <div className="h-[40%]  t-inno-02 t-inno-02-1 flex flex-col items-center justify-around py-10">
                    <h5 className="font-bold text-[16px] text-[#252B42]">
                      {item.h5}
                    </h5>
                    <h6 className="text-[#737373] text-[14px] font-bold">
                      {item.h6}
                    </h6>
                    <div className="grid-team-icons-div  ">
                      <i className="fa-brands fa-brands-team fa-facebook"></i>
                      <i className="fa-brands fa-brands-team fa-instagram"></i>
                      <i className="fa-brands fa-brands-team fa-twitter"></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="inno-last-div-info max-w-[1040px] m-auto py-[40px] px-2">
            <div className="flex flex-col items-center justify-between py-[20px] h-[350px]">
              <h2 className="text-[50px] font-bold text-[#252B42]">
                Start your 14 days free trial
              </h2>
              <div className="max-w-[410px] ">
                <p className="text-[14px] text-[#737373]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent.
                </p>
              </div>
              <div className="bg-[#23A6F0] cursor-pointer text-white inline-block rounded-lg font-bold  px-[40px] py-[15px] max-[12rem]">
                Try it for free
              </div>
              <div className="pricing-icons w-[250px] text-center flex gap-10  h-[auto]">
                <i className="p-icons p-i-tiwtter fa-brands fa-twitter"></i>
                <i className="p-icons p-i-facebook fa-brands fa-facebook"></i>
                <i className="p-icons p-i-instagram fa-brands fa-instagram"></i>
                <i className="p-icons p-i-linkedin fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
export default function ResponsiveNav() {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const onHandlernav = () => {
    setNavBarOpen(!navBarOpen);

    console.log(navBarOpen);
  };
  return (
    <>
      <div className=" responsive-div-icons flex w-[auto] py-4 px-2 pr-8 justify-between  items-center text-[24px] text-[#737373]   sticky top-0 z-50 bg-white">
        <div>
          <h3 className="text-[24px] font-bold text-[#252B42]">Banadage</h3>
        </div>
        <div className="flex-icons-div flex justify-between  w-[8rem]">
          <div>
            <i className="fa-solid-responsive-icons fa-solid fa-magnifying-glass"></i>
          </div>
          <div>
            <i className="fa-solid-responsive-icons fa-solid fa-cart-shopping"></i>
          </div>
          <div>
            <i
              onClick={onHandlernav}
              className="fa-solid-responsive-icons fa-solid fa-bars cursor-pointer"
            ></i>
          </div>
        </div>
      </div>
      <div className="flex justify-center h-[auto]    bg-white items-center px-2">
        <div
          className={`special-nav-for-mobile flex flex-col items-center max-w-[20rem] h-[auto] tablet:hidden  ${
            navBarOpen ? "block" : "hidden"
          }`}
        >
          <ul className="leading-[80px]">
            <li className=" text-[#737373] text-[30px] ">
              <Link href="/"> Home</Link>
            </li>
            <li className=" text-[#737373] text-[30px] ">
              <Link href="/product1"> Product</Link>
            </li>
            <li className=" text-[#737373] text-[30px] ">
              <Link href="/pricing"> Pricing</Link>
            </li>
            <li className=" text-[#737373] text-[30px] ">
              <Link href="/contact"> Contact</Link>
            </li>
          </ul>

          <div className="px-2   w-[20rem] h-[20rem] m-auto">
            <div className=" login-nav  flex flex-col items-center gap-5   text-[#23a6f0] h-[46px] p-4">
              <div className="flex items-center  h-9">
                <div className="flex items-center text-[30px] ">
                  <i className="fa-solid fa-solid-home-nav fa-user pr-2 "></i>
                  <div className="text-[30px]">
                    <a href="#">Login</a> / <a href="#">Register</a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-8 text-[30px] items-center justify-between w-[auto] px-4 ">
                <i className="fa-solid fa-solid-home-nav fa-magnifying-glass h-[46px] "></i>
                <i className="fa-solid fa-solid-home-nav fa-cart-shopping h-[46px] ">
                  1{" "}
                </i>
                <i className="fa-regular fa-solid fa-solid-home-nav fa-heart h-[46px]">
                  1
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ResponsiveNav from "../responsive-nav/responsiveNav";
import { Cardo } from "next/font/google";
type HeaderProps = {
  bgColor?: string;
  cartdata?: any; // Replace `any` with the correct type of `cartdata`
};
export default function Header({
  bgColor = "bg-[#252B42]",
  cartdata,
}: HeaderProps) {
  const Data = [
    { title: "Home" },
    { title: "Shop" },
    { title: "About" },
    { title: "Blog" },
    { title: "Contact" },
    { title: "Products" },
  ];
  const [cartNumber, setCartNumber] = useState(0);
  const [cartItems, setCartItems]: any = useState();
  useEffect(() => {
    if (cartdata) {
      if (cartNumber) {
      } else {
        setCartNumber(1);
        setCartItems([cartItems]);
      }
      localStorage.setItem("cart", JSON.stringify([cartItems]));
    }
    //  else {
    //   alert("hel");
    // }
  }, [cartdata]);

  const pathname = usePathname();
  const toggleCart = () => {
    if (ref.current.classList.contains("hidden")) {
      ref.current.classList.remove("hidden");
      ref.current.classList.add("visible");
    } else if (!ref.current.classList.contains("hidden")) {
      ref.current.classList.remove("visible");
      ref.current.classList.add("hidden");
    }
  };
  const ref: any = useRef<HTMLElement>();
  console.log("HL3O");
  return (
    <>
      <nav className="nav-con   max-w-[100%] m-auto   sticky top-0 z-50   ">
        <div
          className={`child-nav-1    h-[3rem]  flex items-center justify-between px-4 text-white ${bgColor}`}
        >
          <div className="flex justify-between ">
            <div className=" flex items-center gap-6 h-[46px] font-bold text-[14px] px-2">
              <div className="number-nav flex gap-6 items-center">
                <i className="fa-solid fa-solid-home-nav fa-phone text-white"></i>
                <h6>(225)555-0118</h6>
              </div>
              <div className="email-nav  flex gap-6 items-center">
                <i className="fa-solid fa-solid-home-nav fa-message text-white"></i>
                <h6>hamzii2205@gmail.com</h6>
              </div>
            </div>
          </div>
          <div className="follow-us-nav  h-[46px] flex items-center ">
            <h6 className="text-[14px] font-bold ">
              Follow US and get a chance to Win 80% Off
            </h6>
          </div>
          <div className="follow-us-icons-nav w-[auto]   h-[46px] p-[10px] gap-[10px] flex ">
            <h6 className=" font-[700] text-[14px] leading-[24px] text-white">
              Follow US:
            </h6>
            <div className="w-[120px] h-[26px]">
              <a
                href="https://www.instagram.com/hamza_shabir_0786/?hl=en"
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="https://web.facebook.com/M.Hamza2205" target="_blank">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://x.com/hamzii2205/" target="_blank">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="child-nav-2 bg-white px-4 h-[4rem] flex items-center justify-between">
          <div>
            <h3 className="font-bold text-[24px]">Bandage</h3>
          </div>
          <div>
            <ul className="li-div-nav ul-nav flex list-none font-bold gap-[15px] text-[#737373] text-[13px]">
              {Data.map((item, index) => {
                //const isActive = pathname.startsWith(item.title);

                return (
                  <li key={index}>
                    {/* <Link
                      href={`/${item.title == "Home" ? "/" : item.title == "Pages" ? "/" : item.title == "Blog" ? "innovation/" : item.title.toLocaleLowerCase()}`}
                      className={isActive ? "bg-red-800" : "bg-green-600"}
                    >
                      {item.title}
                      </Link> */}
                    <Link
                      href={`/${item.title === "Home" ? "" : item.title === "Products" ? "" : item.title === "Blog" ? "innovation" : item.title.toLowerCase()}`}
                      className={
                        pathname ===
                        `/${item.title === "Home" ? "" : item.title === "Blog" ? "innovation" : item.title.toLowerCase()}`
                          ? "text-blue-800 bg-blue-100 p-2 rounded-lg"
                          : "hover:bg-blue-100 hover:p-2 hover:rounded-md"
                      }
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className=" login-nav  flex items-center gap-5 text-[#23a6f0] h-[46px] p-4">
            <div className="flex items-center  h-9">
              <div className="flex items-center  ">
                <i className="fa-solid fa-solid-home-nav fa-user pr-2 "></i>
                <div>
                  <a href="#">Login</a> / <a href="#">Register</a>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between w-[120px] px-4 h-9">
              <i className="fa-solid fa-solid-home-nav fa-magnifying-glass h-[46px] cursor-pointer"></i>
              <input
                type="search"
                className={`outline-double outline-black bg-blue-50  w-34 ml-[-6rem] mb-12  hidden`}
              />
              <i
                onClick={toggleCart}
                className="fa-solid fa-solid-home-nav fa-cart-shopping h-[46px]  cursor-pointer "
              >
                <div className="h-4 w-4 rounded-[100%] bg-[#23a6f0] text-white flex justify-center items-center text-[8px] ml-[-15px] font-normal mt-[-35px]">
                  {cartNumber}
                </div>
              </i>
              <i className="fa-regular fa-solid fa-solid-home-nav fa-heart h-[46px]">
                <div className="h-4 w-4 rounded-[100%] bg-[#23a6f0] text-white flex justify-center items-center text-[8px] ml-[-15px] font-normal mt-[-35px]">
                  100
                </div>
              </i>
            </div>
            <div
              ref={ref}
              className="sideCart w-[320px] h-[40rem] absolute top-0 right-0 bg-[#252B42]  text-white hidden"
            >
              <div className="flex justify-around items-center text-white bg-[#252B42] h-[3rem] ">
                <b>Shoping Cart</b>
                <b onClick={toggleCart} className="text-[30px] cursor-pointer">
                  x
                </b>
              </div>
              <div>
                <ol className="flex flex-col gap-y-1">
                  <li className="bg-purple-700 py-2">
                    <div className="flex items-center gap-5">
                      <div className="flex justify-around w-[100%] ">
                        <span>1</span>
                        <span>Product Name</span>
                        <span>-</span>
                        <span>$134</span> <span>+</span>
                      </div>
                    </div>
                  </li>
                  <li className="bg-purple-700 py-2">
                    <div className="flex items-center gap-5">
                      <div className="flex justify-around w-[100%] ">
                        <span>1</span>
                        <span>Product Name</span>
                        <span>-</span>
                        <span>$134</span> <span>+</span>
                      </div>
                    </div>
                  </li>
                  <li className="bg-purple-700 py-2">
                    <div className="flex items-center gap-5">
                      <div className="flex justify-around w-[100%] ">
                        <span>1</span>
                        <span>Product Name </span>
                        <span>-</span>
                        <span>$134</span> <span>+</span>
                      </div>
                    </div>
                  </li>
                  <li className="bg-purple-700 py-2">
                    <div className="flex items-center gap-5">
                      <div className="flex justify-around w-[100%] ">
                        <span>1</span>
                        <span>Product Name</span>
                        <span>-</span>
                        <span>$134</span> <span>+</span>
                      </div>
                    </div>
                  </li>
                </ol>
                <div className="bg-sky-500 text-white p-2 w-32 rounded-md flex justify-between items-center cursor-pointer hover:bg-sky-600 ml-[30%] mt-[100%]">
                  Add to Cart
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ResponsiveNav />
      </nav>
    </>
  );
}

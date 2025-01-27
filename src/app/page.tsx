// import Image from "next/image";
import Desktop2 from "./desktop2/page";
import Products from "./products/page";
import VitalClassic from "./vitalClassic/page";
import Fluid from "./containerFluid/page";
import FeaturedPost from "./featuredPost/page";
import Header from "./components/Header/Header";
export default function Home() {
  return (
    <>
      <Header />

      <div className=" max-w-[1840px] h-[750px]   m-auto landing-home">
        <div className="max-w-[1044px] m-auto   h-[651px]  flex items-center">
          <div className="max-w-[599px] max-h-[331px] gap-[35px]    flex px-4  flex-col justify-between">
            <h5 className="text-white font-bold text-[16px] ">Summer 2024</h5>
            <h1 className="font-weight text-[58px] font-bold text-[#fafafa]">
              New Collection
            </h1>
            <div className="max-w-[376px] max-h-[60px] ">
              <h4 className=" font-[700px]  text-[20px] leading-[30px] text-[#fafafa]">
                We know how large objects will act, but things on a small scale.
              </h4>
            </div>
            <div className=" max-w-[221px] max-h-[62px] py-[15px] px-[40px] gap-[10px] bg-[#2DC071]">
              <h3 className="text-[#fafafa] font-[700]   text-center">
                SHOP NOW
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Desktop2 />
      <Products />
      <VitalClassic />
      <Fluid />
      <FeaturedPost />
    </>
  );
}

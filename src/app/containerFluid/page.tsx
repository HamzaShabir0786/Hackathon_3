export default function Fluid() {
  return (
    <>
      <div className="max-w-[1440px] h-[auto] m-auto  px-2 ">
        <div className="max-w-[1144px] h-[auto] py-[80px]  m-auto  gap-[40px]   fluid-flex">
          <div className="h-[500px] w-[50%]   gap-[30px]   fluid-landing fluid-flex-1"></div>

          <div className=" h-[500px] w-[50%]   fluid-flex-2 ">
            <div className="w-[100%] h-[500px]  gap-[35px]  flex flex-col justify-end   ">
              <h5 className="text-[#BDBDBD] font-bold text-[16px]">
                Summer 2024
              </h5>
              <h1 className="font-weight text-[58px] font-bold text-black">
                New Collection
              </h1>
              <div className="max-w-[376px] h-[60px] ">
                <h4 className=" font-[700px]  text-[20px] leading-[30px] text-[#737373]">
                  We know how large objects will act, but things on a small
                  scale.
                </h4>
              </div>
              <div className="fluid-btn-div py-[15px] px-[40px]  gap-[10px]  flex">
                <button className="w-[156px] h-[58px] text-white font-bold rounded-[5px] bg-[#2DC071]">
                  BUY NOW
                </button>
                <button className="w-[156px] h-[58px] text-[#2DC071] border border-[#2DC071] font-bold rounded-[5px] bg-none">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

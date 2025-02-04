import CompaniesLogo from "../components/Companies-logo/companies-logo";

export default function Product1() {
  return (
    <>
      <div className="max-w-[1440px] m-auto   ">
        <div className="px-2">
          <ul className="flex justify-between items-center w-[150px]  py-[20px]">
            <li className="font-bold text-[14px]  text-[#252B42]">Home</li>
            <li>
              <i className="fa-solid fa-chevron-right text-[#BDBDBD] text-[30px]"></i>
            </li>
            <li className="font-bold text-[14px]  text-[#737373]">Pricing</li>
          </ul>
        </div>
        <div className="product-1-grid px-2  pb-[80px]  h-auto">
          <div>
            <div className="product-pic-div h-[80%] w-auto bg-cover bg-no-repeat bg-center"></div>
            <div className="next-img-parent flex h-[75px] w-[12rem] gap-[20px] mt-[1.8rem]">
              <div className="next-img-div-1 bg-cover bg-no-repeat bg-center w-[50%]"></div>
              <div className="next-img-div-2 bg-cover bg-no-repeat bg-center w-[50%]"></div>
            </div>
          </div>
          <div className=" py-[20px] ">
            <div className="h-[80%]  grid-child-inner-1 flex flex-col justify-between">
              <h4 className="text-[20px] text-[#252B42]">Floating Phone</h4>
              <div className="flex items-center justify-between w-[215px]    ">
                <div className="flex gap-x-1">
                  <i className="text-[18px] fa-solid fa-star text-yellow-500 "></i>
                  <i className="text-[18px] fa-solid fa-star text-yellow-500 "></i>
                  <i className="text-[18px] fa-solid fa-star text-yellow-500 "></i>
                  <i className="text-[18px] fa-solid fa-star text-yellow-500 "></i>
                  <i className="text-[18px] fa-regular fa-star text-yellow-500"></i>
                </div>
                <div>
                  <h6 className="font-bold text-[#737373]">10 Reviews</h6>
                </div>
              </div>
              <h3 className="font-bold text-[24px] text-[#252B42]">
                $1,139.33
              </h3>
              <div className="flex gap-x-2 max-w-[180px] ">
                <h6 className="text-[#737373] font-bold text-[14px]">
                  Availability :
                </h6>
                <h6 className="text-[#23A6F0] font-bold text-[14px]">
                  In Stock{" "}
                </h6>
              </div>
              <div className="para-div-prodcut-1 p-4">
                <p className="text-[14px] font-bold text-[#858585]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
                <hr className="w-full border-t border-t-[#bdbdbd] my-[10px]" />
              </div>
              <div className="span-roll-div">
                <span className="span-1"></span>
                <span className="span-2"></span>
                <span className="span-3"></span>
                <span className="span-4"></span>
              </div>
              <div className=" flex justify-between items-center max-w-[310px]  mt-4">
                <div className="btn-div max-w-[158px] h-[45px] flex items-center cursor-pointer bg-[#23A6F0] py-[10px] px-[18px] rounded-md">
                  <h6 className="font-bold text-white text-[14px]">
                    select Options
                  </h6>
                </div>
                <div className="buy-heart-eye-icons-div ">
                  <i className="fa-regular fa-heart"></i>
                  <i className="fa-solid fa-cart-shopping"></i>
                  <i className="fa-solid fa-eye"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1050px] m-auto py-[40px] h-[auto]">
          <div className="addtional-info-product-1-div p-4 text-center max-w-[500px] py-[40px] m-auto flex  justify-between text-[#737373] font-[600] text-[14px]">
            <a href="#">Descrption</a>
            <a href="#">Additional Information</a>
            <a href="#">
              Reviews <span className="text-[green]">(0)</span>
            </a>
          </div>
          <div className="grid-info-product-1 py-[40px] px-2">
            <div className="g-i-product-items g-i-product-1"></div>
            <div className="g-i-product-items g-i-product-2">
              <div>
                <h3 className="text-[24px] font-bold text-[#252B42]">
                  the quick fox jumps over{" "}
                </h3>
                <div className="flex flex-col h-[410px] justify-around ">
                  <p className="text-[14px] font-[500] text-[#737373]">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                  <p className="text-[14px] font-[400] text-[#737373]">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                  <p className="text-[14px] font-[400] text-[#737373]">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                </div>
              </div>
            </div>
            <div className="g-i-product-items g-i-product-3">
              <div className=" h-[440px]">
                <div className=" h-[50%] flex flex-col justify-around">
                  <h3 className="text-[24px] font-bold text-[#252B42]">
                    the quick fox jumps over{" "}
                  </h3>
                  <h5 className="text-[14px] font-bold text-[#737373]  flex items-center gap-3">
                    <i className="fa-solid fa-chevron-right text-[#BDBDBD] text-[20px]"></i>
                    the quick fox jumps over the lazy dog
                  </h5>
                  <h5 className="text-[14px] font-bold text-[#737373]  flex items-center gap-3">
                    <i className="fa-solid fa-chevron-right text-[#BDBDBD] text-[20px]"></i>
                    the quick fox jumps over the lazy dog
                  </h5>
                  <h5 className="text-[14px] font-bold text-[#737373]  flex items-center gap-3">
                    <i className="fa-solid fa-chevron-right text-[#BDBDBD] text-[20px]"></i>
                    the quick fox jumps over the lazy dog
                  </h5>
                  <h5 className="text-[14px] font-bold text-[#737373]  flex items-center gap-3">
                    <i className="fa-solid fa-chevron-right text-[#BDBDBD] text-[20px]"></i>
                    the quick fox jumps over the lazy dog
                  </h5>
                </div>
                <div className=" h-[50%] flex flex-col justify-around">
                  <h3 className="text-[24px] font-bold text-[#252B42]">
                    the quick fox jumps over{" "}
                  </h3>
                  <h5 className="text-[14px] font-bold text-[#737373]  flex items-center gap-3">
                    <i className="fa-solid fa-chevron-right text-[#BDBDBD] text-[20px]"></i>
                    the quick fox jumps over the lazy dog
                  </h5>
                  <h5 className="text-[14px] font-bold text-[#737373]  flex items-center gap-3">
                    <i className="fa-solid fa-chevron-right text-[#BDBDBD] text-[20px]"></i>
                    the quick fox jumps over the lazy dog
                  </h5>
                  <h5 className="text-[14px] font-bold text-[#737373]  flex items-center gap-3">
                    <i className="fa-solid fa-chevron-right text-[#BDBDBD] text-[20px]"></i>
                    the quick fox jumps over the lazy dog
                  </h5>
                  <h5 className="text-[14px] font-bold text-[#737373]  flex items-center gap-3">
                    <i className="fa-solid fa-chevron-right text-[#BDBDBD] text-[20px]"></i>
                    the quick fox jumps over the lazy dog
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1140px] py-[80px] m-auto px-2 h-[auto] ">
          <div className="pb-[40px]">
            <h3 className="best-product-h3 text-[#252B42 text-[24px] font-bold">
              BESTSELLER PRODUCTS
            </h3>
          </div>
          <div className=" best-product-grid ">
            <div className="best-items best-i-1 ">
              <div className=" h-[70%] best-n-all-1 best-n-1-1"></div>
              <div className=" h-[30%] flex flex-col items-center justify-around">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Graphic Design
                </h5>
                <a href="#" className="text-[14px] font-bold text-[#737373]">
                  English Department
                </a>
                <div className="flex gap-4">
                  <span className="text-[#BDBDBD] font-bold text-[16px]">
                    $16.48
                  </span>
                  <span className="text-[#23856D] font-bold text-[16px]">
                    $6.48
                  </span>
                </div>
              </div>
            </div>
            <div className="best-items best-i-2 ">
              <div className=" h-[70%] best-n-all-1 best-n-1-2"></div>
              <div className=" h-[30%] flex flex-col items-center justify-around">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Graphic Design
                </h5>
                <a href="#" className="text-[14px] font-bold text-[#737373]">
                  English Department
                </a>
                <div className="flex gap-4">
                  <span className="text-[#BDBDBD] font-bold text-[16px]">
                    $16.48
                  </span>
                  <span className="text-[#23856D] font-bold text-[16px]">
                    $6.48
                  </span>
                </div>
              </div>
            </div>
            <div className="best-items best-i-3 ">
              <div className=" h-[70%] best-n-all-1 best-n-1-3"></div>
              <div className=" h-[30%] flex flex-col items-center justify-around">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Graphic Design
                </h5>
                <a href="#" className="text-[14px] font-bold text-[#737373]">
                  English Department
                </a>
                <div className="flex gap-4">
                  <span className="text-[#BDBDBD] font-bold text-[16px]">
                    $16.48
                  </span>
                  <span className="text-[#23856D] font-bold text-[16px]">
                    $6.48
                  </span>
                </div>
              </div>
            </div>
            <div className="best-items best-i-4 ">
              <div className=" h-[70%] best-n-all-1 best-n-1-4"></div>
              <div className=" h-[30%] flex flex-col items-center justify-around">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Graphic Design
                </h5>
                <a href="#" className="text-[14px] font-bold text-[#737373]">
                  English Department
                </a>
                <div className="flex gap-4">
                  <span className="text-[#BDBDBD] font-bold text-[16px]">
                    $16.48
                  </span>
                  <span className="text-[#23856D] font-bold text-[16px]">
                    $6.48
                  </span>
                </div>
              </div>
            </div>
            <div className="best-items best-i-5 ">
              <div className=" h-[70%] best-n-all-1 best-n-1-5"></div>
              <div className=" h-[30%] flex flex-col items-center justify-around">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Graphic Design
                </h5>
                <a href="#" className="text-[14px] font-bold text-[#737373]">
                  English Department
                </a>
                <div className="flex gap-4">
                  <span className="text-[#BDBDBD] font-bold text-[16px]">
                    $16.48
                  </span>
                  <span className="text-[#23856D] font-bold text-[16px]">
                    $6.48
                  </span>
                </div>
              </div>
            </div>
            <div className="best-items best-i-6 ">
              <div className=" h-[70%] best-n-all-1 best-n-1-6"></div>
              <div className=" h-[30%] flex flex-col items-center justify-around">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Graphic Design
                </h5>
                <a href="#" className="text-[14px] font-bold text-[#737373]">
                  English Department
                </a>
                <div className="flex gap-4">
                  <span className="text-[#BDBDBD] font-bold text-[16px]">
                    $16.48
                  </span>
                  <span className="text-[#23856D] font-bold text-[16px]">
                    $6.48
                  </span>
                </div>
              </div>
            </div>
            <div className="best-items best-i-7 ">
              <div className=" h-[70%] best-n-all-1 best-n-1-7"></div>
              <div className=" h-[30%] flex flex-col items-center justify-around">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Graphic Design
                </h5>
                <a href="#" className="text-[14px] font-bold text-[#737373]">
                  English Department
                </a>
                <div className="flex gap-4">
                  <span className="text-[#BDBDBD] font-bold text-[16px]">
                    $16.48
                  </span>
                  <span className="text-[#23856D] font-bold text-[16px]">
                    $6.48
                  </span>
                </div>
              </div>
            </div>
            <div className="best-items best-i-8 ">
              <div className=" h-[70%] best-n-all-1 best-n-1-8"></div>
              <div className=" h-[30%] flex flex-col items-center justify-around">
                <h5 className="text-[16px] font-bold text-[#252B42]">
                  Graphic Design
                </h5>
                <a href="#" className="text-[14px] font-bold text-[#737373]">
                  English Department
                </a>
                <div className="flex gap-4">
                  <span className="text-[#BDBDBD] font-bold text-[16px]">
                    $16.48
                  </span>
                  <span className="text-[#23856D] font-bold text-[16px]">
                    $6.48
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1040px] m-auto">
          <CompaniesLogo />
        </div>
      </div>
    </>
  );
}

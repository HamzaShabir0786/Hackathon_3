import Nav2 from "../components/nav2/nav2";
import CompaniesLogo from "../components/Companies-logo/companies-logo";
export default function Pricing() {
  return (
    <>
      <Nav2 />
      <div className="max-w-[1440px] h-auto m-auto  ">
        <div className="px-2 ">
          <div className="max-w-[1040px] m-auto ">
            <div className="flex flex-col items-center justify-between w-auto h-auto py-[60px]">
              <h5 className="pricing-h5 font-bold text-[24px] text-[#737373]">
                PRICING
              </h5>
              <h1 className="simple-pricing font-bold text-[58px] text-[#252B42]">
                Simple Pricing
              </h1>
              <div>
                <div className="flex justify-between items-center w-[150px]  py-[20px]">
                  <a
                    href="/"
                    target="_blank"
                    className="font-bold text-[14px]  text-[#252B42]"
                  >
                    Home
                  </a>

                  <i className="fa-solid fa-chevron-right text-[#BDBDBD] text-[30px]"></i>

                  <a
                    href="/pricing"
                    target="_blank"
                    className="font-bold text-[14px]  text-[#737373]"
                  >
                    Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1040px] m-auto  h-[auto] py-[80px] ">
            <div className="max-w-[450px] m-auto py-[40px]  text-center">
              <h2 className="text-[40px] font-bold text-[#252B42]">Pricing</h2>
              <p className="dj text-[14px] font-[400] text-[#737373] ">
                Problems trying to resolve the conflict between <br /> the two
                major realms of Classical physics: Newtonian mechanics{" "}
              </p>
            </div>
            <div className="monthly-div  max-w-[450px] m-auto flex justify-center gap-[20px] items-center py-4">
              <h5 className="text-[16px] font-bold text-[#252B42]">Monthly</h5>
              <div className=" w-[60px] flex items-center border-2 border-[#23A6F0] px-1 h-[30px] rounded-[30px]  ">
                <div className=" w-[25px] h-[25px] rounded-[50%] border-2 border-[#D0D0D0]  "></div>
              </div>
              <h5 className="text-[16px] font-bold text-[#252B42]">Yearly</h5>
              <div className="w-[110px] h-[44px] rounded-[30px]  p-[10px] flex justify-center items-center">
                <h6 className="text-[14px] text-[#23A6F0] font-bold">
                  Save 25%
                </h6>
              </div>
            </div>

            <div className="grid-pricing  px-4 py-[80px]">
              <div className="grid-price-items g-price-i-1  ">
                <div className="flex flex-col items-center    h-[410px] py-[50px]  ">
                  <h3 className="text-[24px] font-bold text-[#252B42]">Fee</h3>
                  <h5 className="font-bold text-[16px] text-[#737373] w-[200px] m-auto">
                    Organize across all apps by hand
                  </h5>
                  <div className="flex justify-center gap-4">
                    <h2 className="text-[40px] font-bold text-[#23A6F0] ">0</h2>
                    <div className="flex flex-col ">
                      <span className="text-[24px] font-bold text-[#23A6F0]">
                        $
                      </span>
                      <span className="text-[14px] text-[#8EC2F2] font-bold">
                        Per Month
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-3  py-4">
                    <div className="flex justify-center items-center bg-green-600 w-[2rem] h-[2rem] rounded-[50%]">
                      &#10003;
                    </div>
                    <h6 className="text-[14px] font-bold text-[#252B42]">
                      Unlimited product updates
                    </h6>
                  </div>
                </div>
              </div>

              <div className="grid-price-items g-price-i-2  ">
                <div className="flex flex-col items-center   h-[410px] py-[50px] ">
                  <h3 className="text-[24px] font-bold text-[#fff]">
                    STANDARD
                  </h3>
                  <h5 className="font-bold text-[16px] text-[#fff] w-[200px] m-auto ">
                    Organize across all apps by hand
                  </h5>
                  <div className="flex justify-center gap-4">
                    <h2 className="text-[40px] font-bold text-[#23A6F0] ">
                      9.99
                    </h2>
                    <div className="flex flex-col ">
                      <span className="text-[24px] font-bold text-[#23A6F0]">
                        $
                      </span>
                      <span className="text-[14px] text-[#8EC2F2] font-bold">
                        Per Month
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-3  py-4">
                    <div className="flex justify-center items-center bg-green-600 text-[#fff] w-[2rem] h-[2rem] rounded-[50%]">
                      &#10003;
                    </div>
                    <h6 className="text-[14px] font-bold text-[#fff]">
                      Unlimited product updates
                    </h6>
                  </div>
                </div>
              </div>

              <div className="grid-price-items g-price-i-3  ">
                <div className="flex flex-col items-center    h-[410px] py-[50px] ">
                  <h3 className="text-[24px] font-bold text-[#252B42]">
                    PREMIUM
                  </h3>
                  <h5 className="font-bold text-[16px] text-[#737373] w-[200px] m-auto">
                    Organize across all apps by hand
                  </h5>
                  <div className="flex justify-center gap-4">
                    <h2 className="text-[40px] font-bold text-[#23A6F0] ">
                      19.99
                    </h2>
                    <div className="flex flex-col ">
                      <span className="text-[24px] font-bold text-[#23A6F0]">
                        $
                      </span>
                      <span className="text-[14px] text-[#8EC2F2] font-bold">
                        Per Month
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-3 py-4">
                    <div className="flex justify-center items-center bg-green-600 w-[2rem] h-[2rem] rounded-[50%]">
                      &#10003;
                    </div>
                    <h6 className="text-[14px] font-bold text-[#252B42]">
                      Unlimited product updates
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-[40px]">
              <h4 className="text-[#252B42] text-[20px] text-center">
                Trusted By Over 4000 Big Companies
              </h4>
              <CompaniesLogo />
            </div>
          </div>
          <div className="max-w-[1040px] m-auto h-[auto] px-4 py-[80px]">
            <div className=" text-center max-w-[500px] m-auto py-[50px]">
              <h2 className="text-[40px] font-bold text-[#252B42]">
                Pricing FAQs
              </h2>
              <h4 className="text-[20px] font-[400] text-[#737373]">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics
              </h4>
            </div>
            <div className="text-grid-pricing">
              <div className="text-g-items text-grid-item-1">
                <div className="flex gap-7">
                  <i className="fa-solid fa-chevron-right text-[#23A6F0]  text-[20px]"></i>
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    the quick fox jumps over the lazy dog
                  </h5>
                </div>
                <h6 className="text-[16px] ml-10 font-[400] text-[#737373]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </h6>
              </div>
              <div className="text-g-items text-grid-item-2">
                <div className="flex gap-7">
                  <i className="fa-solid fa-chevron-right text-[#23A6F0]  text-[20px]"></i>
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    the quick fox jumps over the lazy dog
                  </h5>
                </div>
                <h6 className="text-[16px] ml-10 font-[400] text-[#737373]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </h6>
              </div>
              <div className="text-g-items text-grid-item-3">
                <div className="flex gap-7">
                  <i className="fa-solid fa-chevron-right text-[#23A6F0]  text-[20px]"></i>
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    the quick fox jumps over the lazy dog
                  </h5>
                </div>
                <h6 className="text-[16px] ml-10 font-[400] text-[#737373]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </h6>
              </div>
              <div className="text-g-items text-grid-item-4">
                <div className="flex gap-7">
                  <i className="fa-solid fa-chevron-right text-[#23A6F0]  text-[20px]"></i>
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    the quick fox jumps over the lazy dog
                  </h5>
                </div>
                <h6 className="text-[16px] ml-10 font-[400] text-[#737373]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </h6>
              </div>
              <div className="text-g-items text-grid-item-5">
                <div className="flex gap-7">
                  <i className="fa-solid fa-chevron-right text-[#23A6F0]  text-[20px]"></i>
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    the quick fox jumps over the lazy dog
                  </h5>
                </div>
                <h6 className="text-[16px] ml-10 font-[400] text-[#737373]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </h6>
              </div>
              <div className="text-g-items text-grid-item-6">
                <div className="flex gap-7">
                  <i className="fa-solid fa-chevron-right text-[#23A6F0]  text-[20px]"></i>
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    the quick fox jumps over the lazy dog
                  </h5>
                </div>
                <h6 className="text-[16px] ml-10 font-[400] text-[#737373]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </h6>
              </div>
            </div>
          </div>
          <div className="max-w-[1040px] m-auto py-[80px] h-[auto] ">
            <h4 className="text-[#737373] text-[20px] text-center">
              Haven’t got your answer? Contact our support
            </h4>
          </div>
          <div className="max-w-[1040px] m-auto py-[80px] h-[auto]  px-4">
            <div className="max-w-[600px]  m-auto flex flex-col items-center gap-9">
              <h2 className="text-[40px] font-bold text-[#252B42">
                Start your 14 days free trial
              </h2>
              <h6 className="text-[14px] text-[#737373] font-bold max-w-[500px] text-center">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent.
              </h6>
              <button className="bg-[#23A6F0] text-white max-w-[15rem] font-bold px-[40px] py-[15px] rounded-[5px] ">
                Try it fry now
              </button>
              <div className="pricing-icons w-[250px] text-center flex gap-10  h-[auto]">
                <a href="https://x.com/hamzii2205/" target="_blank">
                  <i className="p-icons p-i-tiwtter fa-brands fa-twitter"></i>
                </a>
                <a href="https://web.facebook.com/M.Hamza2205" target="_blank">
                  <i className="p-icons p-i-facebook fa-brands fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/hamza_shabir_0786/?hl=en"
                  target="_blank"
                >
                  <i className="p-icons p-i-instagram fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/hamza-shabir-796b8a261/"
                  target="_blank"
                >
                  <i className="p-icons p-i-linkedin fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import Nav2 from "../components/nav2/nav2";
export default function Contact() {
  return (
    <>
      <div className="max-w-[1440px] h-auto  m-auto ">
        <Nav2 />
        <div className="home-contact  max-w-[1440px] h-auto py-[80px] m-auto px-2">
          <div className=" grid-contact-home">
            <div className="flex-contact-child-1 flex flex-col justify-center items-start gap-7 w-[100%]   ">
              <h5 className="font-bold text-[16px] text-[#252B42]">
                CONTACT US
              </h5>
              <h1 className="text-[58px] font-bold text-[#252B42]">
                Get in touch <br /> today!
              </h1>
              <h4 className="text-[20px] font-bold text-[#737373]">
                We know how large objects will act, <br /> but things on a small
                scale
              </h4>
              <div className="flex flex-col gap-5">
                <h3 className="text-[24px] font-bold text-[#252B42]">
                  Phone : +921xxxxx0
                </h3>
                <h3 className="text-[24px] font-bold text-[#252B42]">
                  Fax : +921xxxxx0
                </h3>
              </div>
              <div className="contact-icons flex text-[30px] gap-8 ">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>
            <div className="flex-contact-child-2 w-[100%]"></div>
          </div>
        </div>
        <div className="max-w-[1040px] h-[auto] py-[80px] px-2 m-auto ">
          <div className="small-business-div w-[640px]  m-auto py-2 text-center">
            <h6 className="font-bold text-[#252B42] ">VISIT OUR OFFICE</h6>
            <h1 className="font-bold text-[40px] text-[#252B42] ">
              We help small businesses with big ideas
            </h1>
          </div>
          <div className="contact-business-grid  ">
            <div className="contact-business-items c-b-i-1 ">
              <i className="fa-solid-contact fa-solid fa-phone text-[white] text-[72px]"></i>
              <div>
                <h6>georgia.young@example.com</h6>
                <h6>georgia.young@ple.com</h6>
              </div>
              <h5 className="font-bold"> Get Support</h5>
              <button className="contact-btn ">Submit</button>
            </div>
            <div className="contact-business-items c-b-i-2 ">
              <i className="fa-solid-contact text-white text-[72px] fa-solid fa-location-dot"></i>
              <div>
                <h6>georgia.young@example.com</h6>
                <h6>georgia.young@ple.com</h6>
              </div>
              <h5 className="font-bold"> Get Support</h5>
              <button className="contact-btn">Submit</button>
            </div>
            <div className="contact-business-items c-b-i-3 ">
              <i className="fa-solid-contact text-white text-[72px] fa-solid fa-message"></i>
              <div>
                <h6>georgia.young@example.com</h6>
                <h6>georgia.young@ple.com</h6>
              </div>
              <h5 className="font-bold"> Get Support</h5>
              <button className="contact-btn">Submit</button>
            </div>
          </div>
        </div>

        <div className="arr-div  max-w-[1040px] h-[400px] m-auto px-2">
          <div>
            <div className=" text-center h-[auto] ">
              <div className=" text-center flex justify-center ">
                <svg
                  width="62"
                  height="62"
                  viewBox="0 0 62 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43.9052 61.2058C44.5713 62.0869 45.8256 62.2611 46.7067 61.5949L61.0645 50.7389C61.9456 50.0727 62.1198 48.8184 61.4536 47.9374C60.7874 47.0563 59.5331 46.8821 58.6521 47.5483L45.8896 57.1981L36.2398 44.4356C35.5736 43.5545 34.3193 43.3803 33.4382 44.0465C32.5572 44.7127 32.383 45.9669 33.0491 46.848L43.9052 61.2058ZM0.367223 4.49559C13.131 5.34642 22.0886 9.24913 28.4012 14.4985C34.7283 19.7599 38.5351 26.4888 40.7922 33.1997C43.0521 39.9191 43.7382 46.5647 43.8525 51.5532C43.9095 54.0417 43.8239 56.1028 43.7249 57.5345C43.6755 58.2501 43.6228 58.8073 43.5831 59.181C43.5632 59.3678 43.5466 59.5086 43.5354 59.6003C43.5297 59.6461 43.5254 59.6796 43.5227 59.7005C43.5213 59.7109 43.5203 59.7181 43.5198 59.7221C43.5195 59.7242 43.5194 59.7254 43.5193 59.7257C43.5193 59.7259 43.5193 59.7256 43.5193 59.7257C43.5194 59.7252 43.5195 59.7245 45.5005 59.9996C47.4815 60.2747 47.4816 60.2736 47.4818 60.2722C47.4819 60.2715 47.4821 60.27 47.4823 60.2685C47.4827 60.2656 47.4832 60.2619 47.4838 60.2574C47.485 60.2483 47.4867 60.236 47.4887 60.2204C47.4928 60.1893 47.4985 60.1453 47.5054 60.0889C47.5193 59.976 47.5384 59.8132 47.5607 59.6036C47.6052 59.1846 47.6623 58.5782 47.7154 57.8104C47.8215 56.2753 47.9117 54.0903 47.8515 51.4616C47.7313 46.2158 47.0111 39.1427 44.5835 31.9246C42.153 24.6981 37.991 17.2708 30.9587 11.423C23.9119 5.56306 14.1195 1.40343 0.63327 0.50445L0.367223 4.49559Z"
                    fill="#23A6F0"
                  />
                </svg>
              </div>
              <div className=" py-[40px]">
                <h5 className=" text-[#252B42] font-bold text-[16px]">
                  WE Can't WAIT TO MEET YOU
                </h5>
                <h2 className="text-[58px] font-bold text-[#252B42} ">
                  Let’s Talk
                </h2>
                <button className="w-[15rem] p-[1.2rem] rounded-md mt-2 bg-[#23A6F0] font-bold text-white">
                  Try it free now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

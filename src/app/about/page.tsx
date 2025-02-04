import CompaniesLogo from "../components/Companies-logo/companies-logo";
import Data from "../../../public/aboutData.json";
export default function About() {
  return (
    <>
      <div className="max-w-[1440px] h-auto   m-auto">
        <div className="about-grid  px-6 py-[20px]">
          <div className="about-grid-1  flex flex-col justify-center items-start gap-10 w-[100%]">
            <h5 className="text-[#252B42] text-[24px] font-bold">
              ABOUT COMPANY
            </h5>
            <h1 className="text-[#252B42] text-[58px] font-bold">ABOUT US</h1>
            <h4 className="text-[20px] text-[#737373] font-[400]">
              We know how large objects will act, <br /> but things on a small
              scale
            </h4>
            <button className="px-[40px] py-[15px] text-white bg-[#23A6F0] rounded-md font-bold">
              Get Quote Now
            </button>
          </div>
          <div className="about-grid-2  relative  "></div>
        </div>

        <div className="max-w-[1040px] m-auto h-[auto] py-[40px] px-2 ">
          <div className="flex-about-problems py-[20px]  flex w-[100%] h-[210px] gap-[50px]">
            <div className="flex-p-1 h-[200px] w-[40%] flex flex-col justify-around ">
              <p className="text-[#E74040] text-[14px] font-[600]">
                Problems trying
              </p>
              <h3 className="text-[24px] text-[#252B42]  font-bold ">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent.
              </h3>
            </div>
            <div className="flex-p-2 w-[60%] flex flex-col justify-center  h-[200px]">
              <p className="text-[14px] font-[600] text-[#737373]">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="progress-div py-[40px] mt-4 max-w-[1040px]  h-auto px-2  m-auto">
          <div>
            <h1 className="text-[#252B42] font-bold text-[58px]">15K</h1>
            <h5 className="text-[#737373] font-bold text-[16px]">
              Happy Coustomers
            </h5>
          </div>
          <div>
            <h1 className="text-[#252B42] font-bold text-[58px]">150K</h1>
            <h5 className="text-[#737373] font-bold text-[16px]">
              Monthly Visitors
            </h5>
          </div>
          <div>
            <h1 className="text-[#252B42] font-bold text-[58px]">15</h1>
            <h5 className="text-[#737373] font-bold text-[16px]">
              Countries Worldwide
            </h5>
          </div>
          <div>
            <h1 className="text-[#252B42] font-bold text-[58px]">100K+</h1>
            <h5 className="text-[#737373] font-bold text-[16px]">
              Top Partners
            </h5>
          </div>
        </div>

        <div className="about-video max-w-[1040px] m-auto mt-4 py-[40px] px-2  h-[auto] ">
          <video controls autoPlay loop muted>
            <source src="/videos/about-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="grid-div max-w-[1040px] h-auto px-2 m-auto py-[80px]">
          <div className="info mb-8  w-[50%] m-auto text-center">
            <h2 className="text-[40px] text-[#252B42] font-bold">
              Meet Our Team.{" "}
            </h2>
            <p className="text-[14px] font-[400] text-[#737373]">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>

          <div className="grid-team ">
            {Data.map((item, index) => {
              return (
                <div className="g-teams g-t-1" key={item.id}>
                  <div
                    className="g-n-t-all-01 g-n-t-01-1 "
                    style={{
                      backgroundImage: `url(${item.imageSrc})`,
                    }}
                  ></div>
                  <div className="g-n-t-all-02 g-n-t-02-1 ">
                    <h5 className="font-bold text-[16px] text-[#252B42]">
                      {item.h5}
                    </h5>
                    <h6 className="text-[#737373] text-[14px] font-bold">
                      {item.h6}
                    </h6>
                    <div className="grid-team-icons-div  ">
                      <a
                        href="https://web.facebook.com/M.Hamza2205"
                        target="_blank"
                      >
                        <i className="fa-brands fa-brands-team fa-facebook"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/hamza_shabir_0786/?hl=en"
                        target="_blank"
                      >
                        <i className="fa-brands fa-brands-team fa-instagram"></i>
                      </a>
                      <a href="https://x.com/hamzii2205/" target="_blank">
                        <i className="fa-brands fa-brands-team fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="max-w-[1040px] m-auto px-2  py-[80px] ">
          <div className="company-info-div py-4 w-[50%] m-auto mb-8 text-center">
            <h1 className="text-[#252B42] font-bold text-[40px]">
              Big Companies Are Here
            </h1>
            <p className="text-[#737373] text-[14px] font-[400]">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>

          <CompaniesLogo />
        </div>
        <div className="about-last-grid max-w-[1440px] px-2 h-[750px]">
          <div className="bg-[#2A7CC7] about-l-1">
            <div className="l-info-div">
              <h5 className="text-[16px] font-bold text-white">WORK WITH US</h5>
              <h5 className="text-[40px] font-bold text-white">
                Now Let’s grow Yours
              </h5>
              <p className="text-[14px] font-bold text-white">
                The gradual accumulation of information about atomic and
                small-scale behavior during the first quarter of the 20th{" "}
              </p>
              <button className="py-[15px]  px-[40px] rounded-md text-white border text-[14px]">
                Button
              </button>
            </div>
          </div>
          <div className=" about-l-2"></div>
        </div>
      </div>
    </>
  );
}

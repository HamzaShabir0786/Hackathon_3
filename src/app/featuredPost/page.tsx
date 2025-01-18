export default function FeaturedPost() {
  return (
    <>
      <div className="max-w-[1440px] h-[auto]  m-auto">
        <div className="max-w-[1040px] m-auto   ">
          <div className="py-[80px] text-center px-2 ">
            <h6 className="text-[#23A6F0] font-bold text-[14px]">
              Practice Advice
            </h6>
            <h2 className="text-[#252B42] font-bold text-[40px] ">
              Featured Post
            </h2>
            <p className="font-bold text-[#737373] text-[14px]">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="grid-featured-post px-2  ">
            <div className="featured-items featured-i-1   ">
              <div className="all-featured-post-n-1 h-[50%]  f-p-n-1 "></div>
              <div className="all-featured-post-n-2 h-[50%] p-4 f-p-n-2  flex  flex-col justify-around">
                <div className=" flex gap-4">
                  <a>Google </a>
                  <a>Trending</a>
                  <a>New</a>
                </div>

                <h4 className="text-[30px] font-[400]">
                  Loudest a la Madison #1 (L&apos;integral)
                </h4>
                <p>
                  We focus on ergonomics and meeting you where you work.
                  It&apos;s only a keystroke away.
                </p>
                <div className="flex justify-between ">
                  <span className="text-[#737373] text-[12px] ">
                    <i className="fa-regular fa-bell pr-2"></i>
                    22 April 2021
                  </span>
                  <span className="text-[#737373] text-[12px] flex">
                    <i className="fa-solid fa-chart-simple pr-2"></i>
                    10 comments
                  </span>
                </div>
                <div>
                  <span className="text-[#737373] text-[12px] font-bold flex items-center">
                    Learn More
                    <i className="fa-solid fa-arrow-right pl-2"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="featured-items featured-i-2 ">
              <div className="all-featured-post-n-1 h-[50%]  f-p-n-3 "></div>
              <div className="all-featured-post-n-2 h-[50%] p-4 f-p-n-4  flex  flex-col justify-around">
                <div className=" flex gap-4">
                  <a>Google </a>
                  <a>Trending</a>
                  <a>New</a>
                </div>

                <h4 className="text-[30px] font-[400]">
                  Loudest a la Madison #1 (L&apos;integral)
                </h4>
                <p>
                  We focus on ergonomics and meeting you where you work.
                  It&apos;s only a keystroke away.{" "}
                </p>
                <div className="flex  justify-between">
                  <span className="text-[#737373] text-[12px] ">
                    <i className="fa-regular fa-bell pr-2"></i>
                    22 April 2021
                  </span>
                  <span className="text-[#737373] text-[12px] flex">
                    <i className="fa-solid fa-chart-simple pr-2"></i>
                    10 comments
                  </span>
                </div>
                <div>
                  <span className="text-[#737373] text-[12px] font-bold flex items-center">
                    Learn More
                    <i className="fa-solid fa-arrow-right pl-2"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="featured-items featured-i-3 ">
              <div className="all-featured-post-n-1 h-[50%]  f-p-n-5 "></div>
              <div className="all-featured-post-n-2 h-[50%] p-4 f-p-n-6  flex  flex-col justify-around ">
                <div className=" flex gap-4">
                  <a>Google </a>
                  <a>Trending</a>
                  <a>New</a>
                </div>

                <h4 className="text-[30px] font-[400]">
                  Loudest à la Madison #1 (L&apos;integral)
                </h4>
                <p>
                  We focus on ergonomics and meeting you where you work.
                  It&apos;s only a keystroke away.{" "}
                </p>
                <div className="flex  justify-between">
                  <span className="text-[#737373] text-[12px] ">
                    <i className="fa-regular fa-bell pr-2"></i>
                    22 April 2021
                  </span>
                  <span className="text-[#737373] text-[12px]  flex">
                    <i className="fa-solid fa-chart-simple pr-2"></i>
                    10 comments
                  </span>
                </div>
                <div>
                  <span className="text-[#737373] text-[12px] font-bold flex items-center ">
                    Learn More
                    <i className="fa-solid fa-arrow-right pl-2"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import Button from "../button/Button";
import Glow from "../extras/Glow";
import heroVideo from "../../../src/assets/hero-video.jpg";

const Hero = () => {
  return (
    <div>
      <div className="z-[-10] h-[80vh] absolute container md:hidden"></div>
      <div>
        <div>
          <Glow />
        </div>
        <div className="flex flex-col justify-center pt-[40px] items-center gap-4 md:w-full">
          <div className="sm:px-[24px] md:px-[40px] flex flex-col justify-start items-center gap-[12px]">
            <p className="text-[50px] text-center md:text-[34px] sm:text-[24px] font-semibold sm:font-bold text-black-500 leading-[70px] sm:leading-8">
              Welcome to the <span className="text-green">NetZero 50</span> App
            </p>

            <p className="w-[60%] text-[20px] md:w-full leading-[36px] text-center sm:text-[14px] sm:leading-[24px] text-text">
              we are committed to driving global efforts toward achieving net
              zero carbon emissions.
            </p>
          </div>

          <div className="w-full flex flex-row justify-center mt-2 items-center gap-6 sm:gap-3">
            <a href="#">
              <Button
                withIcon={false}
                type="fill"
                className="h-[55px] px-8 sm:!h-[40px] sm:text-[12px]"
                text={"Get started"}
              ></Button>
            </a>

            <a href="#">
              <Button
                withIcon={false}
                type="outline"
                className="h-[55px] px-6 sm:!h-[40px] sm:text-[12px]"
                text={"Community Feeds"}
              ></Button>
            </a>
          </div>

          <div className="flex flex-col justify-center items-center rounded-[12px] w-[94%] h-[70vh] md:h-[37vh] sm:h-[30vh] md:w-[93%] lg:w-[95%] lg:h-[60vh] relative z-[100]">
            {/* <iframe
                                className="rounded-[12px] w-[92%] h-[60vh] lg:h-[54vh] md:h-[35vh] bg-black"
                                width=""
                                height=""
                                src={heroVideo}
                                frameBorder="2"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe> */}
            <img className="w-[40%]" src="png2.png" alt="" />
          </div>
        </div>
        <div className="second-glow">
          <Glow />
        </div>
      </div>
    </div>
  );
};

export default Hero;

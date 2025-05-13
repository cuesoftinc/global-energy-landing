import React from "react"
import Button from "../button/Button"
import Glow from "../extras/Glow"
import 'animate.css';



const Hero = () => {
    return (
        <div>
            <div className="z-[-10] h-[80vh] absolute max-w-[1800px] md:hidden"></div>
            <div>
                <div>
                    <Glow />
                </div>
                <div className="flex flex-col justify-center pt-[100px] 2xl:pt-[150px] items-center gap-5 md:w-full">
                    <div className="sm:px-[24px] md:px-[40px] flex flex-col justify-start items-center gap-[12px]">
                        <p className="w-[80%] sm:w-full md:w-full text-[40px] text-center md:text-[34px] sm:text-[20px] font-semibold sm:font-bold text-black-500 leading-[60px] sm:leading-8 animate__animated animate__bounceInDown animate__slower" >Welcome to Global <span className="text-green"> Energy Transition</span> for People and Planet Ltd/Gte (GETPP)</p>

                        <p className="w-[60%] text-[20px] md:w-full leading-[36px] text-center sm:text-[14px] sm:leading-[24px] text-text animate__animated animate__fadeInUpBig animate__slow">Your Path to Net Zero Starts Here.</p>
                    </div>

                    <div className="w-full py-4 flex flex-row justify-center mt-2 items-center gap-6 sm:gap-2 z-20">
                        <Button
                            withIcon={false}
                            type="fill"
                            className="h-[55px] px-8 sm:!h-[40px] sm:text-[12px]"
                            text={'Get started'}
                            onClick={() => window.location.href = "https://global-webapp.vercel.app/"}
                        />

                        <Button
                            withIcon={false}
                            type="outline"
                            className="h-[55px] px-6 sm:!h-[40px] sm:text-[12px]"
                            text={'Community Feeds'}
                            onClick={() => window.location.href = "https://global-webapp.vercel.app/dashboard"}
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center rounded-[12px] w-[94%] h-[65vh] md:h-[37vh] sm:h-[30vh] md:w-[93%] lg:w-[95%] 2xl:h-[45vh] xl:h-[70vh] relative z-[10] mt-[0px]">
                        <img className="w-[40%] sm:w-[60%]" src="png2.png" alt="" />
                    </div>
                </div>
                <div className="second-glow">
                    <Glow />
                </div>
            </div>
        </div>
    )
}

export default Hero

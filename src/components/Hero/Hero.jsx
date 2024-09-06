import React from "react"
import Button from "../button/Button"
import Glow from "../extras/Glow"


const Hero = () => {
    return (
        <div>
            <div className="z-[-10] h-[80vh] absolute container"></div>
            <div>
                <div>
                    <Glow />
                </div>
                <div className="flex flex-col justify-center pt-[40px] sm:justify-start items-center sm:items-start gap-4 md:w-full">
                    <div className="flex flex-col justify-start items-center gap-[12px]">
                        <p className="text-[50px] text-center sm:text-left sm:text-[24px] font-semibold sm:font-bold text-black-500 leading-[70px] sm:leading-8">Welcome to the <span className="text-green">NetZero 50</span> App</p>

                        <p className="w-[60%] text-[20px] leading-[36px] text-center sm:text-left sm:text-[14px] sm:leading-[24px] text-text">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                    </div>

                    <div className="flex flex-row justify-center mt-2 items-center gap-6">
                        <a href="#">
                            <Button
                                withIcon={false}
                                type="fill"
                                className="h-[55px] px-8 sm:!w-[100px] sm:!h-[40px]"
                                text={'Get started'}
                            >
                            </Button>
                        </a>
                        <a href="#">
                            <Button
                                withIcon={false}
                                type="outline"
                                className="h-[55px] px-6 sm:!w-[100px] sm:!h-[40px]"
                                text={'Community Feeds'}
                            >
                            </Button>
                        </a>
                    </div>

                    <div className=" flex flex-col justify-center items-center rounded-2xl mt-6 w-[70%] h-[80vh] bg-yellow">
                        <div className="flex flex-col justify-center items-center rounded-[12px] bg-[#000] w-[92%] h-[70vh]">
                            <iframe
                                className="rounded-[12px] w-[92%] h-[60vh] bg-black"
                                width=""
                                height=""
                                src=""
                                frameBorder="2"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
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
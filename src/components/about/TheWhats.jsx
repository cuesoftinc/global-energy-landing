import React, { useState } from "react"
import companyVideo from "../../assets/video.mp4"


const TheWhats = () => {
    const [readmore, setReadMore] = useState([false, false])

    const handletoggle = (index) => {
        const newReadmore = [...readmore]
        newReadmore[index] = !newReadmore[index]
        setReadMore(newReadmore)
    }

    return (
        <div className="flex flex-row justify-between items-start gap-6 px-[60px] md:px-[40px] sm:px-[20px] lg:flex-col mt-[20px] md:mt-[10px]">
            <div className="flex flex-col gap-[30px] w-[50%] lg:w-full">
                <p className="text-[20px] text-text sm:text-[14px] lg:text-center md:w-full">Whether you're turning off unused appliances, switching to clean cooking, or adopting renewable energy, every step you take counts — and earns you rewards. Together, we are shaping a sustainable future, one action at a time. Join us on the journey.
                </p>
                <p className="text-[20px] text-text sm:text-[14px] lg:text-center md:w-full">Act. Earn. Transform.</p>
                <div className="flex flex-col gap-[8px]">
                    <p className="text-[30px] font-semibold leading-[64px] sm:text-[24px] md:text-center sm:w-full sm:leading-[34px] sm:font-semibold">Mission and Vision</p>
                    <p className="text-[20px] text-text sm:text-[14px] md:text-center md:w-full">Our mission is to harness everyone's effort toward attaining net zero carbon by 2050.
                    </p>
                    <div className="md:flex flex-row justify-center mt-2">
                        {readmore[0] ? (<button onClick={() => handletoggle(0)} className="font-bold text-red-500">Read Less</button>
                        ) : (
                            <button onClick={() => handletoggle(0)} className="font-bold text-green">Read More</button>
                        )}
                    </div>
                    {readmore[0] && (
                        <div>
                            <p className="text-[20px] text-text sm:text-[14px] md:text-center md:w-full">Our vision is to sustainably align with net zero agenda, while harnessing and mobilising the effort of every individual on earth surface to its effect.</p>
                        </div>
                    )}
                </div>

                <div className="flex flex-col gap-[8px]">
                    <p className="text-[30px] font-semibold leading-[64px] sm:text-[24px] md:text-center sm:w-full sm:leading-[34px] sm:font-semibold">Objectives</p>
                    <p className="text-[20px] text-text sm:text-[14px] md:text-center md:w-full">1. To mobilize and guide men,women, and children to concertedly participate in every way possible to mitigate greenhouse gas emission with regards to the laid out goal in the Paris agreement.</p>
                    <div className="md:flex flex-row justify-center mt-2">
                        {readmore[1] ? (<button onClick={() => handletoggle(1)} className="font-bold text-red-500">Read Less</button>
                        ) : (
                            <button onClick={() => handletoggle(1)} className="font-bold text-green">Read More</button>
                        )}
                    </div>
                    {readmore[1] && (
                        <div className="flex flex-col gap-2">
                            <p className="text-[20px] text-text sm:text-[14px] md:text-center md:w-full">2. To establish an interactive group/club for children and adult carder respectively for knowledge exchange on mile stone activities towards carbon netzero. This will establish the trending pattern for energy conservative attitude or behaviour for every body and importantly for our children and generations to come.</p>
                            <p className="text-[20px] text-text sm:text-[14px] md:text-center md:w-full">3. To liaise with professional, engineers and project developers to begin designs and development of projects that are completely renewable energy.</p>
                            <p className="text-[20px] text-text sm:text-[14px] md:text-center md:w-full">4. To facilitate and assist the government on policies to accelerate their net zero plan.</p>
                            <p className="text-[20px] text-text sm:text-[14px] md:text-center md:w-full">5. To develop strategies and focus on activities aimed at maximise emission reduction.</p>
                            <p className="text-[20px] text-text sm:text-[14px] md:text-center md:w-full">6. To facilitate and focusing on an enabling new clean electricity generation.</p>
                            <p className="text-[20px] text-text sm:text-[14px] md:text-center md:w-full">7. To establish programs to assist in migrating from dirty energy sources to clean energy sources.</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex flex-row justify-end items-center w-[50%] lg:w-full lg:justify-center">
                <div className="h-[350px] w-[100px] absolute z-[-10] right-[520px] lg:right-[360px] rounded-2xl bg-yellow lg:hidden"></div>
                <div>
                    <iframe
                        className="w-[520px] h-[400px] sm:w-[330px] sm:h-[250px] rounded-[10px] bg-black"
                        // width="520"
                        // height="400"
                        src={companyVideo}
                        frameBorder="2"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    {/* <img className="lg:w-[350px] h-[400px] w-[520px] rounded-[10px] bg-black" src={companyImage} alt="" /> */}
                </div>
            </div>
        </div>
    )
}

export default TheWhats
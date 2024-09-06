import React, { useState } from "react"


const TheWhats = () => {
    const [readmore, setReadMore] = useState([false, false])

    const handletoggle = (index) => {
        const newReadmore = [...readmore]
        newReadmore[index] = !newReadmore[index]
        setReadMore(newReadmore)
    }

    return (
        <div className="flex flex-row justify-between items-start gap-6 px-[60px]">
            <div className="flex flex-col gap-[12px] w-[50%]">
                <div className="flex flex-col gap-[8px]">
                    <p className="text-[30px] font-semibold leading-[64px] sm:text-[24px] md:text-center sm:w-full sm:leading-[34px] sm:font-semibold">Who we are</p>
                    <p className="text-[20px] text-text sm:text-[14px] md:text-center md:w-full">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                    <div>
                        {readmore[0] ? (<button onClick={() => handletoggle(0)} className="font-bold text-red-500">Read Less</button>
                        ) : (
                            <button onClick={() => handletoggle(0)} className="font-bold text-green">Read More</button>
                        )}
                    </div>
                    {readmore[0] && (
                        <div>
                            <p className="text-[20px] text-text sm:text-[14px] md:text-center md:w-full">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                        </div>
                    )}
                </div>

                <div className="flex flex-col gap-[8px]">
                    <p className="text-[30px] font-semibold leading-[64px] sm:text-[24px] md:text-center sm:w-full sm:leading-[34px] sm:font-semibold">What we do</p>
                    <p className="text-[20px] text-text sm:text-[14px] md:text-center md:w-full">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                    <div>
                        {readmore[1] ? (<button onClick={() => handletoggle(1)} className="font-bold text-red-500">Read Less</button>
                        ) : (
                            <button onClick={() => handletoggle(1)} className="font-bold text-green">Read More</button>
                        )}
                    </div>
                    {readmore[1] && (
                        <div>
                            <p className="text-[20px] text-text sm:text-[14px] md:text-center md:w-full">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                        </div>
                    )}
                </div>
            </div>


            <div className="flex flex-row justify-end items-center w-[50%]">
                <div className="h-[350px] w-[100px] absolute z-[-10] right-[520px] lg:right-[360px] rounded-2xl bg-yellow"></div>
                <div>
                    <iframe
                        className="lg:w-[350px] rounded-[10px] bg-black"
                        width="520"
                        height="400"
                        src=""
                        frameBorder="2"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default TheWhats
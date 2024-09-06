import React, { useState } from "react";
import arrowDown from "../../assets/arrow-down.svg";

const FAQ = ({ questions, responses }) => {
    if (!questions || !responses) return null;

    return (
        <div className="flex flex-row justify-between items-start gap-6 px-[60px] pt-[80px]">
            <div className="flex flex-col gap-[12px] w-[50%]">
                <p className="text-[42px] font-semibold leading-[64px] sm:text-[24px] md:text-center sm:w-full sm:leading-[34px] sm:font-semibold">
                    Get <span className="text-green">Answers</span> to Your Frequently Asked Questions.
                </p>
                <p className="text-[20px] text-text sm:text-[14px] md:text-center md:w-full">
                    You can find the answers to some of your questions about NetZero 50 here.
                </p>

                <div className="mt-[20px]">
                    <p className="text-[20px] text-text">You can also reach us at:</p>
                    <p className="text-[20px] text-text">Email: <span className="text-green font-semibold">info@netzero50.globalenergytrans.org</span></p>
                </div>
            </div>

            <div className="flex flex-col gap-[32px] w-[45%] md:w-full">
                {questions.map((question, index) => (
                    <Template key={index} text={question} response={responses[index]} />
                ))}
            </div>
        </div>
    );
};

const Template = ({ text, response }) => {
    const [showResponse, setShowResponse] = useState(false);
    const toggleResponse = () => {
        setShowResponse(!showResponse);
    };

    return (
        <div className={`border border-[#C0CCCB] px-5 py-6 sm:py-4 flex flex-col justify-between items-start gap-[12px] rounded-[10px] ${showResponse ? 'bg-[#f6f6f6]' : ''}`}>
            <div className="flex flex-row justify-between items-start w-full">
                <p className="!text-[black] sm:font-semibold">{text}</p>
                <img className={`cursor-pointer ${showResponse ? 'rotate-180' : ''}`} src={arrowDown} onClick={toggleResponse} alt="arrow icon" />
            </div>
            {showResponse && response}
        </div>
    );
};

export default FAQ;

import React, { useState, useEffect } from "react";
import YouthPlan from "./subplans/YouthPlan";
import FamilyPlan from "./subplans/FamilyPlan";
import CorporatePlan from "./subplans/CorporatePlan";
import SchoolPlan from "./subplans/SchoolPlan"
import "./plans.css"






const memberList = [
    { key: "youth", text: "Individual (Youth) Member" },
    { key: "family", text: "Family Member" },
    { key: "corporate", text: "Corporate Member" },
    { key: "school", text: "School Member" },
];

const PlansNav = () => {
    const [selected, setSelected] = useState("youth");

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setSelected((prevSelected) => {
    //             const currentIndex = memberList.findIndex((member) =>member.key === prevSelected)
    //             const nextIndex = (currentIndex + 1) % memberList.length
    //             return memberList[nextIndex].key
    //         })
    //     }, 5000)
    //     return () => clearInterval(interval)
    // }, [])

    const handleSelectChange = (option) => {
        setSelected(option);
    };


    return (
        <div className="flex flex-col gap-[30px] md:gap-[30px]">
            <div className="flex flex-col justify-center items-center md:w-full">
                <ul className="flex flex-row justify-center gap-[20px] cursor-pointer bg-[#F9F9F9] p-3 rounded-[40px] text-[#959595] md:p-[6px] sm:gap-[4px] md:gap-[8px] md:w-full">
                    {memberList.map((member) => (
                        <li
                            key={member.key}
                            className={`${selected === member.key ? "selected-class" : "member-class"}`}
                            onClick={() => handleSelectChange(member.key)}
                        >
                            {member.text}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                {selected === "youth" && <YouthPlan />}
                {selected === "family" && <FamilyPlan />}
                {selected === "corporate" && <CorporatePlan />}
                {selected === "school" && <SchoolPlan />}
            </div>
        </div>
    );
};

export default PlansNav;

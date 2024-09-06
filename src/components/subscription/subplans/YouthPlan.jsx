import number1 from "../../../assets/number1.svg"
import number2 from "../../../assets/number2.svg"
import number3 from "../../../assets/number3.svg"
import Button from "../../button/Button"




const YouthPlan = () => {
    return (
            <div className="bg-[#e3e6ef] rounded-[36px] md:rounded-[12px] px-[58px] pt-[40px] md:py-[30px] flex flex-col gap-[30px]">
                <div className="flex flex-row justify-between">
                    <p className="text-[32px] text-[#0E1C4D] font-semibold leading-[64px] w-[60%] md:w-full sm:text-[24px] sm:leading-[34px] md:text-center">Benefits for youth membership on:</p>
                    <a href="#">
                        <Button className="w-[139px] h-[55px] md:hidden" text={"Get Started"} />
                    </a>
                </div>

                <div className="flex flex-row justify-center items-center gap-12 md:flex-col">
                    <div className="w-full flex flex-col justify-between items-start md:items-center gap-9">

                        <div className="flex flex-row md:flex-col md:items-center items-start gap-5">
                            <img src={number1} alt="number icon" />
                            <div>
                                <p className="text-[24px] font-semibold md:text-center">Basic</p>
                                <p className="text-text text-[18px]  md:text-center">Empowerment / skill training to venture into renewable energy business.</p>
                            </div>
                        </div>

                        <div className="flex flex-row md:flex-col items-start md:items-center gap-5">
                            <img src={number2} alt="number icon" />
                            <div>
                                <p className="text-[24px] font-semibold md:text-center">Advance Plan</p>
                                <p className="text-text text-[18px]  md:text-center">Access funding for startups after training, mentorship for growth.</p>
                            </div>
                        </div>

                        <div className="flex flex-row md:flex-col items-start md:items-center gap-5">
                            <img src={number3} alt="number icon" />
                            <div>
                                <p className="text-[24px] font-semibold md:text-center">Extended Plan</p>
                                <p className="text-text text-[18px] md:text-center">Access to electric vehicles or motorbikes and others depending on performance.</p>
                            </div>
                        </div>

                        <Button className="w-[139px] h-[55px] hidden md:block" text={"Get Started"} />
                    </div>

                    <div className="w-full">
                        <img className="block sm:hidden" src="" alt="image" />
                        <img className="hidden sm:block" src="" alt="" />
                    </div>
                </div>
            </div>
    )
}

export default YouthPlan
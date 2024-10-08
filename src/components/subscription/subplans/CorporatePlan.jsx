import number1 from "../../../assets/number1.svg"
import number2 from "../../../assets/number2.svg"
import number3 from "../../../assets/number3.svg"
import Button from "../../button/Button"
import subscribeImg from "../../../assets/subscribe-image.png"




const CorporatePlan = () => {
    return (
            <div className="bg-[#e3e6ef] rounded-[36px] md:rounded-[12px] px-[58px] pt-[40px] md:py-[30px] sm:px-[24px] flex flex-col gap-[30px]">
                <div className="flex flex-row justify-between">
                    <p className="text-[32px] text-[#0E1C4D] font-semibold leading-[64px] md:w-full sm:text-[24px] md:leading-[44px]  sm:leading-[34px] md:text-center">Benefits for corporate membership on:</p>
                    <a href="#">
                        <Button className="w-[139px] h-[55px] md:hidden" text={"Get Started"} />
                    </a>
                </div>

                <div className="flex flex-row justify-center items-start gap-12 md:flex-col">
                    <div className="w-full flex flex-col justify-between items-start md:items-center gap-9">

                        <div className="flex flex-row md:flex-col md:items-center items-start gap-5">
                            <img src={number1} alt="number icon" />
                            <div>
                                <p className="text-[24px] font-semibold md:text-center">Basic</p>
                                <p className="text-text text-[18px]  md:text-center">Access to energy audit of your homes and assist in reducing energy usage by 60%</p>
                            </div>
                        </div>

                        <div className="flex flex-row md:flex-col items-start md:items-center gap-5">
                            <img src={number2} alt="number icon" />
                            <div>
                                <p className="text-[24px] font-semibold md:text-center">Advance Plan</p>
                                <p className="text-text text-[18px]  md:text-center">2.Access to subsidized rate up to 30% to migrate from to clean energy sources.</p>
                            </div>
                        </div>

                        <div className="flex flex-row md:flex-col items-start md:items-center gap-5">
                            <img src={number3} alt="number icon" />
                            <div>
                                <p className="text-[24px] font-semibold md:text-center">Extended Plan</p>
                                <p className="text-[#676767] text-[18px] md:text-center"></p>
                            </div>
                        </div>

                        <Button className="w-[139px] h-[55px] hidden md:block" text={"Get Started"} />
                    </div>

                    <div className="block w-full h-full md:hidden">
                        <img className="block rounded-2xl sm:hidden" src={subscribeImg} alt="image" />
                        <img className="hidden sm:block" src="" alt="" />
                    </div>
                </div>
            </div>
    )
}

export default CorporatePlan
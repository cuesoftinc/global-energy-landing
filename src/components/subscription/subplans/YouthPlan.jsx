import number1 from "../../../assets/number1.svg"
import number2 from "../../../assets/number2.svg"
import number3 from "../../../assets/number3.svg"
import Button from "../../button/Button"
import subscribeImg from "../../../assets/subscribe-image.png"




const YouthPlan = () => {
    return (
        <div className="bg-[#e3e6ef] rounded-[36px] md:rounded-[12px] px-[58px] pt-[40px] sm:px-[24px] md:py-[30px] flex flex-col gap-[30px]">
            <div className="flex flex-row justify-between">
                <p className="text-[32px] text-[#0E1C4D] font-semibold leading-[64px] w-[70%] md:w-full md:leading-[44px] sm:leading-[28px] md:text-[34px] sm:text-[20px] md:text-center">Incentives for Individual members:</p>
                <Button className="w-[139px] h-[55px] md:hidden" text={"Get Started"}
                    onClick={() => window.location.href = "https://global-webapp.vercel.app/"}
                />

            </div>

            <div className="flex flex-row justify-center items-start gap-12 md:flex-col">
                <div className="w-full flex flex-col justify-between items-start md:items-center gap-9">

                    <div className="flex flex-row md:flex-col md:items-center items-start gap-5">
                        <img src={number1} alt="number icon" />
                        <div>
                            <p className="text-[24px] font-semibold md:text-center sm:text-[16px] md:text-[18px]">Complete Verified Activities</p>
                            <p className="text-text text-[18px]  md:text-center sm:text-[14px] md:text-[16px]">Engage in meaningful sustainability tasks tailored to Individual account type.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-row md:flex-col items-start md:items-center gap-5">
                        <img src={number2} alt="number icon" />
                        <div>
                            <p className="text-[24px] font-semibold md:text-center sm:text-[16px] md:text-[18px]">Reduce Your CO₂ Emissions</p>
                            <p className="text-text text-[18px]  md:text-center sm:text-[14px] md:text-[16px]">Your efforts contribute to measurable carbon reduction — tracked in real-time.</p>
                        </div>
                    </div>

                    <div className="flex flex-row md:flex-col items-start md:items-center gap-5">
                        <img src={number3} alt="number icon" />
                        <div>
                            <p className="text-[24px] font-semibold md:text-center sm:text-[16px] md:text-[18px]">Earn Access to Exclusive Rewards</p>
                            <p className="text-text text-[18px] md:text-center sm:text-[14px] md:text-[16px]">Top contributors gain access to incentives such as renewable energy training, startup funding, eco-tech tools, electric mobility solutions, recognition badges, and even financial bonuses.</p>
                        </div>
                    </div>

                    <Button className="w-[139px] h-[55px] hidden md:block" text={"Get Started"} />
                </div>

                <div className="flex flex-row justify-end items-center w-full h-full md:hidden pb-[40px]">
                    <img className="block rounded-2xl object-cover object-top  sm:hidden" src={subscribeImg} alt="image" />
                    <img className="hidden sm:block" src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default YouthPlan
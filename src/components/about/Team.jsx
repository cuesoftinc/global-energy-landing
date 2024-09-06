import team1 from "../../assets/team1.png"
import team2 from "../../assets/team2.png"
import team3 from "../../assets/team3.png"

const Team = () => {
    return (
        <div className="flex flex-col justify-start gap-5">
            <p className="text-[30px] font-semibold leading-[64px] sm:text-[24px] text-center sm:w-full sm:leading-[34px] sm:font-semibold">Meet the team</p>
            <div className="px-[60px] flex flex-row md:flex-col gap-[20px] justify-between">
                <div className="flex flex-col justify-start items-center gap-[16px]">
                    <img className="w-[350px] h-[250px] rounded-[8px] md:w-[283px] md:h-[250px]" src={team1} alt="" />
                    <div className="flex flex-col justify-center items-center gap-[8px]">
                        <p className="text-[20px] font-semibold">Nkechi Blessing</p>
                        <p className="text-[16px] text-blue font-medium">Founder & CEO</p>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-center gap-[16px]">
                    <img className="w-[350px] h-[250px] rounded-[8px] md:w-[283px] md:h-[250px]" src={team2} alt="" />
                    <div className="flex flex-col justify-center items-center gap-[8px]">
                        <p className="text-[20px] font-semibold">Esther Balogun</p>
                        <p className="text-[16px] text-blue">Founder & CEO</p>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-center gap-[16px]">
                    <img className="w-[350px] h-[250px] rounded-[8px] md:w-[283px] md:h-[250px]" src={team3} alt="" />
                    <div className="flex flex-col justify-center items-center gap-[8px]">
                        <p className="text-[20px] font-semibold">John hopkins</p>
                        <p className="text-[16px] text-blue">Founder & CEO</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
import team1 from "../../assets/team1.png"
import team2 from "../../assets/team2.png"
import team3 from "../../assets/team3.png"

const Team = () => {
    return (
        <div className="flex flex-col justify-start gap-5">
            <p className="text-[30px] font-semibold leading-[64px] sm:text-[24px] text-center sm:w-full sm:leading-[34px] sm:font-semibold">Meet the team</p>
            <div className="px-[60px] md:px-[40px] sm:px-[20px] flex flex-row md:grid md:grid-cols-2 sm:flex sm:flex-col gap-[20px] justify-between">
                <div className="flex flex-col justify-start items-center gap-[16px]">
                    <img className="w-[350px] h-[250px] lg:h-[220px] rounded-[8px] md:w-[283px] md:h-[200px]" src={team1} alt="" />
                    <div className="flex flex-col justify-center items-center gap-[8px]">
                        <p className="text-[20px] font-semibold">Nkechi Blessing</p>
                        <p className="text-[16px] text-blue font-medium">Founder & CEO</p>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-center gap-[16px]">
                    <img className="w-[350px] h-[250px] lg:h-[220px] rounded-[8px] md:w-[283px] md:h-[200px]" src={team2} alt="" />
                    <div className="flex flex-col justify-center items-center gap-[8px]">
                        <p className="text-[20px] font-semibold">Esther Balogun</p>
                        <p className="text-[16px] text-blue">Founder & CEO</p>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-center gap-[16px]">
                    <img className="w-[350px] h-[250px] lg:h-[220px] rounded-[8px] md:w-[283px] md:h-[200px]" src={team3} alt="" />
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
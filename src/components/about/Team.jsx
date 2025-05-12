// import johnson from "../../assets/johnson.jpg"
// import joy from "../../assets/joy.jpg"
// import godwin from "../../assets/godwin.jpg"
// import team1 from "../../assets/team1.png"
import team1 from "../../assets/team1.jpg"
import team2 from "../../assets/team2.png"
import team3 from "../../assets/team3.png"

const Team = () => {
    return (
        <div className="flex flex-col justify-start gap-5">
            <p className="text-[30px] font-semibold leading-[64px] sm:text-[24px] text-center sm:w-full sm:leading-[34px] sm:font-semibold">Meet the team</p>
            <div className="px-[60px] md:px-[40px] sm:px-[20px] flex flex-row md:grid md:grid-cols-2 sm:flex sm:flex-col gap-[20px] justify-between">
                <div className="flex flex-col justify-start items-center gap-[16px]">
                    <img className="w-[350px] h-[250px] lg:h-[220px] rounded-[8px] md:w-[283px] md:h-[200px] object-cover object-top border" src={team1} alt="" />
                    <div className="flex flex-col justify-center items-center gap-[8px]">
                        <p className="text-[20px] md:text-[16px] text-center font-semibold">Johnson Chukwuemeka Okafor</p>
                        <p className="text-[16px] text-blue font-medium">President, CEO & Founder</p>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-center gap-[16px]">
                    <img className="w-[350px] h-[250px] lg:h-[220px] rounded-[8px] md:w-[283px] md:h-[200px] object-cover object-top border" src={team2} alt="" />
                    <div className="flex flex-col justify-center items-center gap-[8px]">
                        <p className="text-[20px] font-semibold md:text-[16px] text-center">Joy Ohumagu-Mgbenyere Johnson</p>
                        <p className="text-[16px] text-blue">Country Director</p>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-center gap-[16px]">
                    <img className="w-[350px] h-[250px] lg:h-[220px] rounded-[8px] md:w-[283px] md:h-[200px] object-cover border" src={team3} alt="" />
                    <div className="flex flex-col justify-center items-center gap-[8px]">
                        <p className="text-[20px] font-semibold md:text-[16px] text-center">Godwin Ekah Okoh</p>
                        <p className="text-[16px] text-blue">Board Member</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
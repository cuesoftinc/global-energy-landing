import AboutHeader from "./AboutHeader"
import Team from "./Team"
import TheWhats from "./TheWhats"


const About = () => {
    return (
        <div className="pt-[80px] sm:pt-[40px] flex flex-col justify-start gap-[50px]">
            <div className="flex flex-col justify-start gap-[50px] lg:gap-[20px]">
                <AboutHeader />
                <TheWhats />
            </div>
            <Team />
        </div>
    )
}

export default About
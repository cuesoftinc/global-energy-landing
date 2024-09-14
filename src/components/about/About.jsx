import AboutHeader from "./AboutHeader"
import Team from "./Team"
import TheWhats from "./TheWhats"


const About = () => {
    return (
        <div className="pt-[80px] sm:pt-[40px] flex flex-col justify-start gap-[50px]">
            <AboutHeader />
            <TheWhats />
            <Team />
        </div>
    )
}

export default About
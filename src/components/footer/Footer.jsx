import logo from "../../assets/logo.svg"
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div className="bg-primary mt-[40px] px-[60px] md:px-[40px] sm:px-[20px] ">
            <div className="flex flex-row sm:flex-col justify-between gap-[40px] lg:gap-[20px] py-[40px] sm:py-[20px]">
                <div>
                    <div className="w-[350px] lg:w-[200px]">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="flex flex-row justify-between gap-[8px] w-[60%] lg:w-[70%] sm:grid grid-cols-2 md:grid md:grid-cols-3 sm:w-full">
                    <div className="flex flex-col gap-4">
                        <p className="text-[16px] sm:text-[12px] text-white font-semibold">Quick Links</p>
                        <div className="flex flex-col gap-3 text-[#D9D8D8] sm:text-[12px]">
                            <Link to="about" smooth={true} duration={500}><p className="hover:underline underline-offset-4 cursor-pointer">About</p></Link>
                            <Link to="subscription" smooth={true} duration={500}><p className="hover:underline underline-offset-4 cursor-pointer" smooth={true} duration={500}>Subcription</p></Link>
                            <Link to="faq" smooth={true} duration={500}><p className="hover:underline underline-offset-4 cursor-pointer">FAQ</p></Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="text-[16px] text-white font-semibold sm:text-[12px]">Contact Us</p>
                        <div className="flex flex-col gap-3 text-[#D9D8D8] sm:text-[12px]">
                            <p>+234 903 9946 201</p>
                            <p>+234 7055 415 147</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="text-[16px] font-semibold text-white sm:text-[12px] ">Opening Hours</p>
                        <div className="flex flex-col gap-3 text-[#D9D8D8] sm:text-[12px]">
                            <p>Monday - Friday</p>
                            <p>9:00AM - 05:00PM</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="text-[16px] font-semibold text-white sm:text-[12px]">Address</p>
                        <div className="flex flex-col gap-3 text-[#D9D8D8] sm:text-[12px]">
                            <p>FCT, Abuja, Nigeria</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-[12px] text-white flex flex-col items-end pb-[20px]" >
                <p className="font-semibold text-left">© Copyright NetZero 50 App. All Rights Reserved</p>
                <p className="font-semibold text-left">&copy; {new Date().getFullYear()} - Property of Global Energy.</p>
            </div>
        </div>
    )
}

export default Footer
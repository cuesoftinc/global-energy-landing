import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="bg-blue mt-[80px] px-[60px] ">
            <div className="flex flex-row justify-between gap-[40px] py-[60px]">
                <div>
                    <div className="w-[350px]">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="flex flex-row justify-between w-[60%]">
                    <div className="flex flex-col gap-4">
                        <p className="text-[16px] text-white font-semibold">Quick Links</p>
                        <div className="flex flex-col gap-3 text-[#D9D8D8]">
                            <Link to="/about"><p className="hover:underline underline-offset-4">About</p></Link>
                            <Link to="/subscription"><p className="hover:underline underline-offset-4">Subcription</p></Link>
                            <Link to="/contact-us"><p className="hover:underline underline-offset-4">FAQ</p></Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="text-[16px]  text-white font-semibold">Contact Us</p>
                        <div className="flex flex-col gap-3 text-[#D9D8D8]">
                            <p>+1 5589 55488 55</p>
                            <p>+1 6678 254445 41</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="text-[16px] font-semibold text-white ">Opening Hours</p>
                        <div className="flex flex-col gap-3 text-[#D9D8D8]">
                            <p>Monday - Friday</p>
                            <p>9:00AM - 05:00PM</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="text-[16px] font-semibold  text-white ">Address</p>
                        <div className="flex flex-col gap-3 text-[#D9D8D8]">
                            <p>FCT, Abuja, Nigeria</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-white flex flex-col items-end pb-[20px]" >
                <p className="font-semibold text-left">© Copyright NetZero 50 App. All Rights Reserved</p>
                <p className="font-semibold text-left">© 2024 - Property of Global Energy.</p>
            </div>
        </div>
    )
}

export default Footer
import NavLinks from "./NavLinks";
import Logo from "../../assets/logo.svg"

const Header = () => {
    return (
        <div>
            <div className="flex justify-between items-center py-6 px-[60px] border border-[#E3E9F0] drop-shadow-sm w-full md:flex-row-reverse md:px-2 md:pr-4 h-16 bg-white">
                <div className="w-[250px]">
                    <img src={Logo} alt="logo image" />
                </div>

                <div>
                    <NavLinks />
                </div>
            </div>
        </div>
    )
}

export default Header;
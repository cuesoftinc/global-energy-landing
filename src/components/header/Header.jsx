import React, { useState } from "react";
import NavLinks from "./NavLinks";
import Logo from "../../assets/logo.svg"
import menuBar from "../../assets/menu-bar.svg"
import closeIcon from "../../assets/close-icon.svg"
import MobileMenu from "./mobileMenu";


const Header = () => {
    const [togglemenu, setToggleMenu] = useState(false)

    const handleToggle = () => {
        setToggleMenu(!togglemenu)
    }

    return (
        <div>
            <div className="flex justify-between items-center py-6 px-[60px] md:px-[40px] sm:px-[20px] border border-[#E3E9F0] drop-shadow-sm w-full h-16 bg-white relative">
                <div className="w-[250px]">
                    <img src={Logo} alt="logo image" />
                </div>
                <button onClick={handleToggle} className="hidden sm:flex flex-row justify-end w-full">
                    {togglemenu ? (<img src={closeIcon} alt="clos icon" />) : (<img src={menuBar} alt="menu bar" />)}
                </button>
                <div>
                    <NavLinks />
                </div>
                {togglemenu && (
                    <div className="hidden sm:block bg-white absolute top-[60px] py-4 w-[90%]">
                      <MobileMenu />
                    </div>
                )}
            </div>
        </div>
    )
}


export default Header;
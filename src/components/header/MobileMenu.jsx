import { Link } from 'react-scroll';
import "./Nav.css";

const MobileMenu = () => {

    return (
        <ul className="flex flex-col items-center justify-between gap-6 text-[#939393] hover:text-[#212121] w-full 2xl:hidden">
            <li className="nav-link">
                <Link
                    to="hero-section"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                >
                    Home
                </Link>
            </li>
            <li className="nav-link">
                <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                >
                    About
                </Link>
            </li>
            <li className="nav-link">
                <Link
                    to="subscription"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                >
                    Subscription
                </Link>
            </li>
            <li className="nav-link">
                <Link
                    to="footer"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                >
                    Contact Us
                </Link>
            </li>
        </ul>
    )
}

export default MobileMenu



import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsChatSquareText } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { Link } from "react-scroll";
import "../index.css";

const NavBar = () => {
    return (
        <nav className="flex justify-center items-center mt-6 w-full fixed bottom-4 lg:bottom-8 z-[100]">
            <div className="w-[80%] bg-black/20 h-[76px] lg:h-[86px] backdrop-blur-3xl rounded-full max-w-[460px] px-5 flex justify-between items-center align-middle text-2xl text-white/70">
                <Link
                    to="home"
                    smooth={true}
                    spy={true}
                    offset={-200}
                    activeClass="active"
                    className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                >
                    <BiHomeAlt className="font-bold" />
                </Link>
                <Link
                    to="about"
                    smooth={true}
                    spy={true}
                    activeClass="active"
                    className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                >
                    <BiUser className="font-bold" />
                </Link>
                <Link
                    to="skills"
                    smooth={true}
                    spy={true}
                    activeClass="active"
                    className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                >
                    <HiOutlineBadgeCheck className="font-bold" />
                </Link>
                <Link
                    to="projects"
                    smooth={true}
                    spy={true}
                    activeClass="active"
                    className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                >
                    <FaLaptopCode className="font-bold" />
                </Link>

                <Link
                    to="contact"
                    smooth={true}
                    spy={true}
                    activeClass="active"
                    className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                >
                    <BsChatSquareText className="font-bold" />
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;

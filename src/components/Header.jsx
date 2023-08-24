import { Link } from "react-scroll";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import ATLogo from "../assets/logos/AT-black-outline-square.png";

const Header = () => {
    return (
        <header className="flex w-full justify-between items-center fixed top-0 py-4 backdrop-blur-3xl z-[100]">
            <Link
                to="home"
                smooth={true}
                className="flex cursor-pointer text-2xl ml-7 font-bold text-gradient min-w-[40px]"
            >
                <img src={ATLogo} alt="Anna Tasheva Logo" className="w-[40px] h-[38px] md:w-[65px] md:h-[60px]" />
            </Link>

            <div className="flex items-center lg:gap-7 md:gap-5 gap-3 text-violet-400">
                <a
                    href="https://github.com/AnnaTas77"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-5 transition-colors duration-300 hover:text-cyan-400 focus:outline-none"
                >
                    <div>
                        <BsGithub className="text-2xl md:text-3xl " />
                    </div>
                </a>
                <a
                    href="https://www.linkedin.com/in/anna-tasheva-48074085/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center mr-8 transition-colors duration-300 hover:text-cyan-400 focus:outline-none"
                >
                    <div>
                        <BsLinkedin className="text-2xl md:text-3xl" />
                    </div>
                </a>
            </div>
        </header>
    );
};

export default Header;

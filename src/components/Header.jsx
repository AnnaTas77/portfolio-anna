import { Link } from "react-scroll";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Header = () => {
    return (
        <header className="flex w-full justify-between items-center fixed top-0 py-5 backdrop-blur-3xl z-[100]">
            <Link to="home" smooth={true} className="cursor-pointer text-2xl px-5 font-bold text-gradient">
                <p>ANNA</p> <p>TASHEVA</p>
            </Link>

            <div className="flex items-center lg:gap-7 gap-5 text-violet-400">
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
                    className="flex items-center mr-10 transition-colors duration-300 hover:text-cyan-400 focus:outline-none"
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

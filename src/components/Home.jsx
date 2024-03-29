import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <section className="min-h-screen w-10/12 flex justify-center items-center pt-20" id="home">
            <div className="flex flex-col justify-center items-center w-full text-center font-secondary ">
                <motion.h1
                    variants={fadeIn("left", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true }}
                    className="text-gradient text-[25px] font-bold leading-[1] md:text-[39px] lg:text-[50px]  mb-5 "
                >
                    ANNA <span>TASHEVA</span>
                </motion.h1>
                <motion.p
                    variants={fadeIn("right", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true }}
                    className="p-5 text-md lg:text-[28px] font-secondary font-semibold uppercase"
                >
                    <span className="text-white text-md md:text-2xl lg:text-3xl">I am a</span>
                    <TypeAnimation
                        sequence={["Junior Developer", 2000, "Sustainability Enthusiast", 2000, "Career Changer", 2000]}
                        speed={50}
                        className="px-2 text-md md:text-2xl lg:text-3xl bg-gradient-to-r text-transparent text-gradient"
                        wrapper="span"
                        repeat={Infinity}
                    />
                </motion.p>
                <motion.p
                    variants={fadeIn("left", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true }}
                    className="mb-8 p-5 lg:mx-0 max-w-[900px] text-md md:text-xl"
                >
                    Welcome to my Portfolio! This is where I share my passion for coding and showcase my projects. I
                    love to explore new technologies and continuously learn and grow in the ever-evolving world of
                    software development. 🌱
                </motion.p>

                <motion.div
                    variants={fadeIn("right", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true }}
                    className="flex max-w-max gap-x-6 items-center justify-center mb-12"
                >
                    <button className="btn-style hover:scale-110 transition-all ease-in-out duration-300">
                        <Link to="contact" className="text-gradient font-bold text-md md:text-xl" smooth={true}>
                            Contact me
                        </Link>
                    </button>
                    <button className="btn-style hover:scale-110 transition-all ease-in-out duration-300">
                        <Link to="projects" className="text-gradient font-bold text-md md:text-xl" smooth={true}>
                            My Portfolio
                        </Link>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import "@lottiefiles/lottie-player";
import AnnaPhoto from "../assets/Anna-gradient-outlineSQ.png";
import LaptopAnimation from "../assets/animations/laptopAnimation.json";

const About = () => {
    return (
        <section
            className="flex flex-col items-center justify-center w-full max-w-[1180px] min-h-screen pt-44"
            id="about"
            data-aos="fade-up"
        >
            <h2 className="text-gradient text-center w-full text-2xl py-5 mb-10 font-bold lg:text-3xl">About me</h2>
            <motion.h3
                variants={fadeIn("left", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true }}
                className="mb-8 font-bold text-center text-lg md:text-xl"
            >
                I am a <span className="text-gradient">Junior Software Developer</span> based in London.
            </motion.h3>
            <div className="flex flex-col-reverse w-full gap-4 lg:flex-row-reverse justify-center items-center lg:items-start p-3  rounded-md">
                <div className="flex relative mt-3">
                    <motion.div
                        variants={fadeIn("left", 0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true }}
                        className="z-20 flex flex-col"
                    >
                        <div className="flex flex-col w-full self-center text-center text-bold text-md lg:text-left md:text-[1rem] md:w-[78%] text-lg md:text-xl text-white">
                            <p className="mb-8 project-border p-3 bg-slate-950/40">
                                While my background is in environmental conservation and administration, my passion for
                                technology, creating things from scratch, and solving problems in unique and creative
                                ways inspired my journey towards software development.
                            </p>
                            <p className="mb-8 project-border p-3 bg-slate-950/40">
                                The Northcoders Software Developer Skills Bootcamp played a crucial role in terms of my
                                progression in this field, as it equipped me with strong full-stack skills and
                                invaluable experience in pair programming and efficient teamwork.
                            </p>
                            <p className="mb-4 project-border p-3 bg-slate-950/40">
                                My journey in software development is not only about writing code - it is about crafting
                                elegant solutions that make a tangible impact. I embrace the ever-changing world of
                                software and see each project as a chance to learn, tap into my creativity, and think
                                outside the box.
                            </p>
                        </div>
                    </motion.div>

                    <div className="flex items-center justify-center ">
                        <motion.div
                            variants={fadeIn("right", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true }}
                            className="flex w-full absolute -z-1 md:top-[-50%] md:left-[47%] lg:left-[55%] lg:top-[-58%] left-[20%] top-[-10%] m-8"
                        >
                            <lottie-player
                                src={JSON.stringify(LaptopAnimation)}
                                background="none"
                                speed="1"
                                style={{ display: "flex", maxWidth: "480px" }}
                                loop
                                autoplay
                                direction="1"
                                mode="normal"
                            ></lottie-player>
                        </motion.div>

                        <motion.div
                            variants={fadeIn("right", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true }}
                            className="flex w-full absolute -z-1 md:right-[9%] md:bottom-[-15%] lg:right-[26%] lg:bottom-[-3%] right-[14.5%] bottom-[-8%] m-1"
                        >
                            <lottie-player
                                // src="https://lottie.host/df300741-e5c1-4516-a85c-95231f72eeb8/CI3XhlHzte.json"
                                src={JSON.stringify(LaptopAnimation)}
                                background="none"
                                speed="1"
                                style={{ display: "flex", maxWidth: "250px", transform: "scaleX(-1)" }}
                                className="transform scale-x-[-1]"
                                loop
                                autoplay
                                direction="1"
                                mode="normal"
                            ></lottie-player>
                        </motion.div>
                    </div>
                </div>
                {/* IMAGE */}
                <motion.img
                    variants={fadeIn("right", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true }}
                    src={AnnaPhoto}
                    alt="Anna's photo"
                    className="shadow rounded-full lg:rounded-md w-28 h-28 md:w-48 md:h-auto max-h-[200px] mt-3 mb-7"
                />
            </div>
        </section>
    );
};

export default About;

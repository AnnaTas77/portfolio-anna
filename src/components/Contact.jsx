import { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isError, setIsError] = useState(false);
    const [messageSent, setMessageSent] = useState(false);

    const handleChange = (event) => {
        setFormData((prevFormData) => {
            const { name, value } = event.target;
            return { ...prevFormData, [name]: value };
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const dataToSend = { ...formData, access_key: "1f848643-bc72-48da-b3cd-566fd149f5ea" };
        var json = JSON.stringify(dataToSend);

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        })
            .then((response) => {
                let jsonResponse = response.json();

                if (response.status === 200) {
                    setFormData({ name: "", email: "", message: "" });
                    setIsError(false);
                }
            })
            .then(() => {
                setMessageSent(true);
                setTimeout(() => {
                    setMessageSent(false);
                }, 2500);
            })
            .catch((error) => {
                console.log(error);
                setIsError(true);
                setTimeout(() => {
                    setIsError(false);
                }, 2500);
                setFormData({ name: "", email: "", message: "" });
            });
    };

    return (
        <section className="flex flex-col w-full items-center justify-center min-h-screen " id="contact">
            <h2 className="text-center w-full text-2xl mb-10 font-bold lg:text-3xl text-gradient mt-[120px]">
                Let&#39;s connect!
            </h2>
            <div
                className="flex items-center justify-center
            w-full gap-6 text-cyan-400"
            >
                <a
                    href="https://github.com/AnnaTas77"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-5 transition-colors duration-300 hover:text-violet-500 "
                >
                    <div>
                        <BsGithub className="text-4xl " />
                    </div>
                </a>
                <a
                    href="https://www.linkedin.com/in/anna-tasheva-48074085/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-5 transition-colors duration-300 hover:text-violet-500 "
                >
                    <div>
                        <BsLinkedin className="text-4xl" />
                    </div>
                </a>
            </div>
            {/* MAP */}
            <div className="py-10 flex flex-col-reverse lg:flex-row w-full items-center justify-center">
                <motion.div
                    variants={fadeIn("right", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true }}
                    className="flex relative w-full max-w-[450px] min-h-[300px] md:min-h-[430px] rounded-lg overflow-hidden m-10 "
                >
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        style={{ filter: "opacity(0.7)" }}
                        src="https://www.google.com/maps/embed/v1/place?q=battersea+power+station+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    />
                </motion.div>
                {/* FORM */}
                <motion.form
                    variants={fadeIn("left", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true }}
                    className="relative flex flex-col w-full max-w-[450px] text-violet-200"
                    onSubmit={handleSubmit}
                    action="https://api.web3forms.com/submit"
                    method="POST"
                >
                    <input type="hidden" name="access_key" value="1f848643-bc72-48da-b3cd-566fd149f5ea"></input>
                    <h2 className="text-center w-full text-xl mb-3  font-bold md:text-xl lg:text-xl text-gradient">
                        Get in touch
                    </h2>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="text-gradient leading-7 text-lg">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            required
                            onChange={handleChange}
                            placeholder="Your full name..."
                            className="w-full font-light bg-transparent rounded border border-violet-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:italic placeholder:text-md placeholder:text-violet-400"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="text-gradient leading-7 text-lg">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            required
                            onChange={handleChange}
                            placeholder="Your email address..."
                            className="w-full font-light bg-transparent rounded border border-violet-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:italic placeholder:text-md placeholder:text-violet-400"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="text-gradient  leading-7 text-lg">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            required
                            onChange={handleChange}
                            placeholder="Your message..."
                            className="w-full font-light bg-transparent rounded border border-violet-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out placeholder:italic placeholder:text-md placeholder:text-violet-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn-style w-[50%] self-center mt-2 hover:scale-110 transition-all ease-in-out duration-300 text-lg text-white"
                    >
                        Send
                    </button>

                    {/* SUCCESS */}
                    <div
                        className={`${
                            messageSent
                                ? "animate-jump-in absolute inset-0 flex justify-center items-center "
                                : "animate-jump-out absolute inset-0 flex justify-center items-center"
                        }`}
                    >
                        <p className="bg-green-600 text-white font-bold text-center p-4 rounded text-lg">
                            Email sent successfully!
                        </p>
                    </div>

                    {/* ERROR */}
                    <div
                        className={`${
                            isError
                                ? "animate-jump-in absolute inset-0 flex justify-center items-center"
                                : "animate-jump-out absolute inset-0 flex justify-center items-center"
                        }`}
                    >
                        <p className="bg-red-600 text-white font-bold text-center p-4 rounded text-lg">
                            Oops! Something went wrong. Please try again.
                        </p>
                    </div>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;

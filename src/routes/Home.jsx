import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import ProfileImage from "@/routes/home/ProfileImage";
import GetInTouch from "@/routes/home/GetInTouch";

const Home = () => {

    const itemVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }

    const containerVariant = {
        hidden: { opacity: 1 },
        visible: { opacity: 1, transition: { staggerChildren: 0.03 } },
    }

    const splitToSpan = ({ str, ...args }) => {
        return str.split("").map((ele) => {
            return <motion.span key={uuidv4()} variants={itemVariant} {...args}>{ele}</motion.span>
        })
    }

    return (
        <>
            <div className="max-sm:hidden">
                <div className="flex min-[640px]:justify-around max-[640px]:flex-col max-[640px]:items-center debug">
                    <motion.div variants={containerVariant} initial="hidden" animate="visible"
                        className="ml-36 mt-24 w-3/6 mb-4">
                        <div>
                            <p className="text-light-orange text-2xl">{splitToSpan({ str: "Hi, my name is" })}</p>
                            <p className="text-white font-bold text-5xl">{splitToSpan({ str: "Pujan Parikh." })}</p>
                            <p className="text-light-gray font-bold text-4xl">{splitToSpan({ str: "I craft experiences for the web." })}</p>
                        </div>
                        <div className="text-2xl w-5/6">
                            <p className="text-light-gray">{splitToSpan({ str: "I'm a " })}{splitToSpan({ str: "software developer", className: "text-light-orange" })}{splitToSpan({ str: " with a passion for human-centered design." })}</p>
                            <p className="text-light-gray">{splitToSpan({ str: "At the moment, I'm " })}{splitToSpan({ str: "looking for opportunites", className: "text-light-orange" })}{splitToSpan({ str: " with motivated teams to build delightful and performant experiences for the user." })}</p>
                        </div>
                        <GetInTouch />
                    </motion.div>
                    <ProfileImage />
                </div>
            </div>

            <div className="sm:hidden">
                <div className="flex flex-col items-center">
                    <div className="flex justify-center border-4 w-3/6 border-green-600">
                        <ProfileImage />
                    </div>
                    <motion.div variants={containerVariant} initial="hidden" animate="visible"
                        className="ml-36 mt-24 w-3/6 mb-4">
                        <div>
                            <p className="text-light-orange text-2xl">{splitToSpan({ str: "Hi, my name is" })}</p>
                            <p className="text-white font-bold text-5xl">{splitToSpan({ str: "Pujan Parikh." })}</p>
                            <p className="text-light-gray font-bold text-4xl">{splitToSpan({ str: "I craft experiences for the web." })}</p>
                        </div>
                        <div className="text-2xl w-5/6">
                            <p className="text-light-gray">{splitToSpan({ str: "I'm a " })}{splitToSpan({ str: "software developer", className: "text-light-orange" })}{splitToSpan({ str: " with a passion for human-centered design." })}</p>
                            <p className="text-light-gray">{splitToSpan({ str: "At the moment, I'm " })}{splitToSpan({ str: "looking for opportunites", className: "text-light-orange" })}{splitToSpan({ str: " with motivated teams to build delightful and performant experiences for the user." })}</p>
                        </div>
                        <GetInTouch />
                    </motion.div>
                </div>
            </div>

        </>

    )
}

export default Home;
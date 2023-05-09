import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

const Home = () => {

    const itemVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }

    const containerVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.03 } }
    }

    const buttonVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { ease: "easeIn", duration: 1 } }
    }

    const splitToSpan = ({ str, ...args }) => {
        return str.split("").map((ele) => {
            return <motion.span key={uuidv4()} variants={itemVariant} {...args}>{ele}</motion.span>
        })
    }

    return (
        <motion.div variants={containerVariant} initial="hidden" animate="visible" className="w-4/5 ml-32">
            <div>
                <p className="text-light-orange text-2xl">{splitToSpan({ str: "Hi, my name is" })}</p>
                <p className="text-white font-bold text-5xl">{splitToSpan({ str: "Pujan Parikh." })}</p>
                <p className="text-light-gray font-bold text-4xl">{splitToSpan({ str: "I craft experiences for the web." })}</p>
            </div>
            <div className="text-2xl w-3/5">
                <p className="text-light-gray">{splitToSpan({ str: "I'm a " })}{splitToSpan({ str: "software developer", className: "text-light-orange" })}{splitToSpan({ str: " with a passion for human-centered design." })}</p>
                <p className="text-light-gray">{splitToSpan({ str: "At the moment, I'm " })}{splitToSpan({ str: "looking for opportunites", className: "text-light-orange" })}{splitToSpan({ str: " with motivated teams to build delightful and performant experiences for the user." })}</p>
            </div>
            <div className="w-full">
                <motion.button variants={buttonVariant} className="shadow-xl p-3 mt-16 text-2xl border-2 border-light-orange text-light-orange">Get in touch!</motion.button>

            </div>
        </motion.div >
    )
}

export default Home;
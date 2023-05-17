import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const Text = () => {


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
        <motion.div variants={containerVariant} initial="hidden" animate="visible"
            className="h-full flex items-center flex-wrap debug">
            <div className="">
                <p className="text-light-orange text-sm">{splitToSpan({ str: "Hi, my name is" })}</p>
                <p className="text-white font-bold text-lg">{splitToSpan({ str: "Pujan Parikh." })}</p>
                <p className="text-light-gray font-bold text-base">{splitToSpan({ str: "I craft experiences for the web." })}</p>
            </div>
            <div className="text-sm w-5/6">
                <p className="text-light-gray">{splitToSpan({ str: "I'm a " })}{splitToSpan({ str: "software developer", className: "text-light-orange" })}{splitToSpan({ str: " with a passion for human-centered design." })}</p>
                <p className="text-light-gray">{splitToSpan({ str: "At the moment, I'm " })}{splitToSpan({ str: "looking for opportunites", className: "text-light-orange" })}{splitToSpan({ str: " with motivated teams to build delightful and performant experiences for the user." })}</p>
            </div>
        </motion.div>
    )
}

export default Text;
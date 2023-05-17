import { motion } from "framer-motion";
import objectHash from "object-hash";
const Text = () => {


    const itemVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }


    const splitToSpan = ({ str, ...args }) => {
        return str.split("").map((ele, idx) => {
            return <motion.span key={objectHash([ele, idx])} variants={itemVariant} {...args}>{ele}</motion.span>
        })
    }


    return (
        <div className="h-full flex items-center flex-wrap">
            <div className="">
                <p className="text-light-orange text-sm">{splitToSpan({ str: "Hi, my name is" })}</p>
                <p className="text-white font-bold text-lg">{splitToSpan({ str: "Pujan Parikh." })}</p>
                <p className="text-light-gray font-bold text-base">{splitToSpan({ str: "I craft experiences for the web." })}</p>
            </div>
            <div className="text-sm w-5/6">
                <p className="text-light-gray">{splitToSpan({ str: "I'm a " })}{splitToSpan({ str: "software developer", className: "text-light-orange" })}{splitToSpan({ str: " with a passion for human-centered design." })}</p>
                <p className="text-light-gray">{splitToSpan({ str: "At the moment, I'm " })}{splitToSpan({ str: "looking for opportunites", className: "text-light-orange" })}{splitToSpan({ str: " with motivated teams to build delightful and performant experiences for the user." })}</p>
            </div>
        </div>
    )
}

export default Text;
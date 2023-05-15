import { motion } from "framer-motion";


const GetInTouch = () => {
    const buttonVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { ease: "easeIn", duration: 1 } },
    }
    return (
        <div className="ml-2 w-fit relative h-1/5">
            <motion.button
                variants={buttonVariant}
                whileHover={{ x: "-0.5rem", transition: { duration: 0.3, ease: "easeInOut" } }}
                className="bg-deep-purple z-10 relative shadow-xl w-full h-full text-2xl border-2 border-light-orange text-light-orange">Get in touch!</motion.button>
            <motion.div variants={buttonVariant} className="bg-light-orange w-full absolute top-0 left-0 h-full z-0"></motion.div>
        </div >
    )
}

export default GetInTouch;
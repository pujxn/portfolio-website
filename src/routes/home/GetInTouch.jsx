import { motion } from "framer-motion";


const GetInTouch = ({ buttonVariant }) => {

    return (
        <div className="mt-16 ml-4 w-fit relative">
            <motion.button
                variants={buttonVariant}
                whileHover={{ x: "-1rem", transition: { duration: 0.3, ease: "easeInOut" } }}
                className="bg-deep-purple z-10 relative shadow-xl w-full h-full p-3 text-2xl border-2 border-light-orange text-light-orange">Get in touch!</motion.button>
            <div className="bg-light-orange w-full absolute top-0 left-0 h-full z-0"></div>
        </div >
    )
}

export default GetInTouch;
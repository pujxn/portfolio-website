import { motion } from "framer-motion";

const Button = () => {

    const buttonVariant = {
        hidden: { opacity: 0, y: 0 },
        visible: { opacity: 1, y: 0, transition: { ease: "easeIn", duration: 1 } },
    }

    return (
        <div className="h-full flex justify-center items-center">
            <motion.button className="p-3 block border-2 border-light-orange text-light-orange text-sm" variants={buttonVariant}>
                Get in touch!
            </motion.button>
        </div>

    )
}

export default Button;
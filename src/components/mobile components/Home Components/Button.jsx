import { motion } from "framer-motion";

const Button = () => {
    return (
        <div className="h-full flex justify-center items-center">
            <motion.button className="block">
                Get in touch!
            </motion.button>
        </div>

    )
}

export default Button;
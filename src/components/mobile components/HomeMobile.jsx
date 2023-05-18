import Button from "@/components/mobile components/Home Components/Button";
import ProfileImage from "@/components/mobile components/Home Components/ProfileImage";
import Text from "@/components/mobile components/Home Components/Text";
import { motion } from "framer-motion";
import Links from "@/components/mobile components/Home Components/Links";

const HomeMobile = () => {

    const containerVariant = {
        hidden: { opacity: 1 },
        visible: { opacity: 1, transition: { staggerChildren: 0.03 } },
    }

    return (
        // <div className="h-9/10 grid grid-rows-3 px-4">
        <div className="h-9/10 px-4">

            {/* <div className="row-start-1"> */}
            <div className="h-1/3">
                <ProfileImage />
            </div>
            {/* <motion.div className="row-start-2 row-span-2 grid grid-rows-2" variants={containerVariant} initial="hidden" animate="visible"> */}
            <motion.div className="h-2/3" variants={containerVariant} initial="hidden" animate="visible">
                {/* <div className="row-start-1 row-span-1 "> */}
                <div className="h-1/2">
                    <Text />
                </div>
                {/* <div className="row-start-2 row-span-1"> */}
                <div className="h-1/2 flex flex-wrap justify-center">
                    <div className="self-start">
                        <Links />
                    </div>
                    <div>
                        <Button />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default HomeMobile;
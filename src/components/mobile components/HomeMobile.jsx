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
        <>
            <div className=" sm:hidden h-9/10 px-4">
                <div className="h-1/3">
                    <ProfileImage />
                </div>
                <motion.div className="h-2/3" variants={containerVariant} initial="hidden" animate="visible">
                    <div className="h-1/2">
                        <Text />
                    </div>
                    <div className="h-1/2 flex flex-col justify-center">
                        <div className="h-4/5 relative">
                            <div>
                                <Links />
                            </div>
                            <div className="h-fit absolute inset-y-1/4 inset-x-1/4">
                                <Button />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

        </>

    )
}

export default HomeMobile;
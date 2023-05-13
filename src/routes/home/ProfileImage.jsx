import { useState } from "react";
import ProfileImg from '../../../public/pujanparikh.jpg'

const ProfileImage = () => {

    const [imageTranslate, setImageTranslate] = useState("");
    const [borderTranslate, setBorderTranslate] = useState("");

    const handleMouseEnter = () => {
        setImageTranslate("-translate-x-2 -translate-y-2");
        setBorderTranslate("translate-x-2 translate-y-2");
    }

    const handleMouseLeave = () => {
        setImageTranslate("");
        setBorderTranslate("");
    }

    return (
        <div className="mt-16 w-3/12 mb-4 relative">
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`h-full w-full absolute top-0 left-0 z-30 bg-light-orange/20 transition-transform duration-300 ease-in-out ${imageTranslate} hover:bg-white/0`}>
            </div>
            <img
                src={ProfileImg}
                alt="pujan parikh"
                className={`max-w-full relative z-20 h-full transition-transform duration-300 ease-in-out ${imageTranslate}`} />
            <div className={`h-full w-full absolute top-4 left-4 z-10 border-2 border-light-orange transition-transform duration-300 ease-in-out  ${borderTranslate}`}></div>
        </div>
    )
}

export default ProfileImage;
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
        <div className="w-full h-full">
            <div className="max-sm:hidden flex items-center h-9/10 mt-4">
                <div className="h-5/6 relative">
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
            </div>

            <div className="sm:hidden flex items-center justify-center h-full w-full">
                <div className="h-full relative w-full">
                    <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className={`h-full w-full absolute top-0 left-0 z-30 bg-light-orange/20 transition-transform duration-300 ease-in-out ${imageTranslate} hover:bg-white/0`}>
                    </div>
                    <img
                        src={ProfileImg}
                        alt="pujan parikh"
                        className={`w-full relative z-20 h-full transition-transform duration-300 ease-in-out ${imageTranslate}`} />
                    <div className={`h-full w-full absolute top-4 left-4 z-10 border-2 border-light-orange transition-transform duration-300 ease-in-out  ${borderTranslate}`}></div>
                </div>
            </div>
        </div>


    )
}

export default ProfileImage;
import Button from "@/components/mobile components/Home Components/Button";
import ProfileImage from "@/components/mobile components/Home Components/ProfileImage";
import Text from "@/components/mobile components/Home Components/Text";

const HomeMobile = () => {

    return (
        <div className="h-9/10 grid grid-rows-3">
            <div className="row-start-1">
                <ProfileImage />
            </div>
            <div className="row-start-2">
                <Text />
            </div>
            <div className="row-start-3">
                <Button />
            </div>
        </div>
    )
}

export default HomeMobile;
import ProfileImg from "../../../../public/pujanparikh.jpg"

const ProfileImage = () => {
    return (
        <div className="h-full flex justify-center items-center">
            <img src={ProfileImg} className="h-4/5" alt="Pujan Image" />
        </div>
    )
}
export default ProfileImage;
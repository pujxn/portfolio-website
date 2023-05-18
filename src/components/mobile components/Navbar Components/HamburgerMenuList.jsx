import objectHash from "object-hash";
import { AiOutlineClose } from "react-icons/ai"

const HamburgerMenuList = ({ listItems, handleClose }) => {
    return (
        <div className="absolute top-4 right-0 text-right backdrop-blur-xl border-4 border-white">
            <ul className=" leading-10">
                <li className="text-left"><button onClick={handleClose}><AiOutlineClose className="text-light-orange" /></button></li>
                <hr />
                {listItems.map(ele => <li key={objectHash(ele)} className="pr-4 text-white">{ele}</li>)}
            </ul>
        </div>
    )
}

export default HamburgerMenuList;
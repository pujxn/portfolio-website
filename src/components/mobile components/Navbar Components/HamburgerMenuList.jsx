import objectHash from "object-hash";
import { AiOutlineClose } from "react-icons/ai"

const HamburgerMenuList = ({ listItems, handleClose }) => {
    return (
        <div className="absolute top-4 right-4 text-right">
            <ul>
                <li className="text-left"><button onClick={handleClose}><AiOutlineClose className="text-light-orange" /></button></li>
                {listItems.map(ele => <li key={objectHash(ele)}>{ele}</li>)}
            </ul>
        </div>
    )
}

export default HamburgerMenuList;
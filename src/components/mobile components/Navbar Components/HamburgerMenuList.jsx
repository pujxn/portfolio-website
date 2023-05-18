import objectHash from "object-hash";
import { AiOutlineClose } from "react-icons/ai"

const HamburgerMenuList = ({ listItems, handleClose }) => {
    return (
        <div className="absolute top-4 right-0 text-left backdrop-blur-xl border-4 border-white">
            <ul className=" leading-10">
                <li className="text-right pr-2"><button onClick={handleClose}><AiOutlineClose className="text-light-orange" /></button></li>
                <hr />
                {listItems.map(ele => <li key={objectHash(ele)} className="pl-2 text-white">{ele}</li>)}
            </ul>
        </div>
    )
}

export default HamburgerMenuList;
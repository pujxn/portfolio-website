import { useState } from "react";

const NavListItem = ({ itemText }) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <span onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
            className={isHovered && "text-light-orange"}
        >{itemText}</ span>
    )
}

export default NavListItem;
import { useState } from "react";

const NavListItem = ({ itemText }) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <a href="" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
            className={isHovered ? "text-light-orange" : undefined}
        >{itemText}</ a>
    )
}

export default NavListItem;
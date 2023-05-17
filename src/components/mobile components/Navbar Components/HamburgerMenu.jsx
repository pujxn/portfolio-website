import { useState } from "react";
import HamburgerMenuList from "@/components/mobile components/Navbar Components/HamburgerMenuList";

const HamburgerMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    }

    const navList = ["About", "Work", "Experience", "Contact"]

    return (
        <div>
            {isOpen ? <HamburgerMenuList listItems={navList} handleClose={handleClose} /> : <button onClick={(() => setIsOpen(true))}>Open</button>}
        </div>
    )
}

export default HamburgerMenu;
import { useState } from "react";
import HamburgerMenuList from "@/components/mobile components/Navbar Components/HamburgerMenuList";
import { GiHamburgerMenu } from "react-icons/gi"


const HamburgerMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    }

    const navList = ["About", "Work", "Experience", "Contact"]

    return (
        <div>
            {isOpen ? <HamburgerMenuList listItems={navList} handleClose={handleClose} /> : <button onClick={(() => setIsOpen(true))}><GiHamburgerMenu className="text-light-orange" /></button>}
        </div>
    )
}

export default HamburgerMenu;
import { useState } from "react";

const HamburgerButton = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <button onClick={(() => setIsOpen(prevState => !prevState))} >{isOpen ? "Close" : "Open"}</button >
    )
}

export default HamburgerButton;
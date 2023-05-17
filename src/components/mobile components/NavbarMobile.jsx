import HamburgerButton from "@/components/mobile components/Navbar Components/HamburgerButton";

const NavbarMobile = () => {
    return (
        <div className="h-1/10 debug flex justify-between items-center px-4 text-sm">
            <div>
                <p>Pujan Parikh</p>
            </div>
            <div>
                <HamburgerButton />
            </div>

        </div>
    )
}

export default NavbarMobile;
import HamburgerMenu from "@/components/mobile components/Navbar Components/HamburgerMenu";

const NavbarMobile = () => {
    return (
        <div className="h-1/10 flex justify-between items-center text-base relative px-4 font-bold">
            <div className="text-light-orange">
                <p>Pujan Parikh</p>
            </div>
            <div>
                <HamburgerMenu />
            </div>

        </div>
    )
}

export default NavbarMobile;
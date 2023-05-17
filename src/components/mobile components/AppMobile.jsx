import HomeMobile from "@/components/mobile components/HomeMobile";
import NavbarMobile from "@/components/mobile components/NavbarMobile";
import SidebarMobile from "@/components/mobile components/SidebarMobile";

const AppMobile = () => {
    return (
        <div className="h-screen debug">
            <NavbarMobile />
            <HomeMobile />
            <SidebarMobile />
        </div >

    )
}

export default AppMobile;
import SidebarListItem from "@/components/sidebar/SidebarListItem";

const SidebarList = () => {

    const listItems = [
        "Github",
        "Instagram",
        "LinkedIn"
    ]

    return (
        <ul>
            {listItems.map((ele, idx) => {
                return <SidebarListItem key={idx} text={ele} />
            })}
        </ul>
    )
}

export default SidebarList;
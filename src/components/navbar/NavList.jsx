import NavListItem from "@/components/navbar/NavListItem";

const NavList = () => {
    const listItems = [
        "About",
        "Experience",
        "Work",
        "Contact"
    ];

    return (
        <ul className="text-white">
            {
                listItems.map((ele, idx) => {
                    return <li className="inline-block" key={idx}><NavListItem itemText={ele} />{idx != (listItems.length - 1) && "|"}</li>
                })
            }

        </ul>
    )
}

export default NavList;
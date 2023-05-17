import objectHash from "object-hash";

const HamburgerMenuList = ({ listItems, handleClose }) => {
    return (
        <div>
            <ul>
                {listItems.map(ele => <li key={objectHash(ele)}>{ele}</li>)}
                <li><button onClick={handleClose}>Close</button></li>
            </ul>
        </div>
    )
}

export default HamburgerMenuList;
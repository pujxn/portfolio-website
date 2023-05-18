import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const Links = () => {

    const linkItems = [
        { "name": "github", "link": "https://github.com/pujxn", "svgComponent": <FiGithub /> },
        { "name": "linkedin", "link": "https://www.linkedin.com/in/pujan-parikh-818234165/", "svgComponent": <FiLinkedin /> },
        { "name": "instagram", "link": "https://www.instagram.com/pxj.an/?hl=en", "svgComponent": <FiInstagram /> },
    ]

    return (
        <div className="flex flex-row justify-center w-full text-2xl text-white">
            {linkItems.map(ele => <a className="px-8" href={ele.link} key={ele.name}>{ele.svgComponent}</a>)}
        </div>
    )
}

export default Links;
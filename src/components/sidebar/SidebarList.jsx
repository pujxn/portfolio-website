import GithubSVG from "@/components/sidebar/GithubSVG";
import InstagramSVG from "@/components/sidebar/InstagramSVG";
import LinkedinSVG from "@/components/sidebar/LinkedinSVG";


const SidebarList = () => {

    const svgList = [
        ["Github", <GithubSVG key={0} />, "https://github.com/pujxn"],
        ["Instagram", <InstagramSVG key={1} />, "https://www.instagram.com/pxj.an/?hl=en"],
        ["Linkedin", <LinkedinSVG key={2} />, "https://www.linkedin.com/in/pujan-parikh-818234165/"],
    ]

    return (
        <ul className="space-y-4 mb-12">
            {svgList.map((ele, idx) => <li key={idx}><a className="cursor-pointer" href={ele[2]} target="_blank" rel="noreferrer" >{ele[1]}</a></li>)}
        </ul>
    )
}

export default SidebarList;
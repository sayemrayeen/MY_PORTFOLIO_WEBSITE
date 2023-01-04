import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from "react-icons/fi";

const Socials = () => {
    return (
        <div className={"header__socials"}>
            <a href={"https://www.linkedin.com/in/sayem-aslam-442368223/"} target={"_blank"} rel={"noreferrer"}><BsLinkedin /></a>
            <a href={"https://github.com/sayemrayeen/"} target={"_blank"} rel={"noreferrer"}><FaGithub /></a>
            <a href={"https://dribbble.com"} target={"_blank"} rel={"noreferrer"}><FiDribbble /></a>
        </div>
    )
}

export default Socials
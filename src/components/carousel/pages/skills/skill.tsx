import { FaCss3, FaGitAlt, FaHtml5, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiJavascript, SiPostman } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import { TbFileTypeSql } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";

// Import styles
import "./skill.styles.scss";

const Skill = () => {
    return ( 
        <div className="skills-page">
            <h1>Skills</h1>
            <div className="skills-container">
                <div className="hard-skills">
                    <h3>Tools: </h3>
                    <FaHtml5 className="fa-html5" />
                    <FaCss3 className="fa-css3" />
                    <SiJavascript className="si-javascript" />
                    <FaPython className="fa-python" />
                    <FaNodeJs className="fa-node-js" />
                    <DiJqueryLogo className="di-jquery-logo" />
                    <FaGitAlt className="fa-git-alt" />
                    <TbFileTypeSql className="tb-file-type-sql" />
                    <BiLogoPostgresql className="bi-logo-postgresql" />
                    <FaReact className="fa-react" />
                    <RiNextjsFill className="ri-nextjs-fill" />
                    <SiPostman className="si-postman" />
                </div>
                <div className="soft-skills">
                    {/* Additional soft skills content */}
                </div>
            </div>
        </div>
     );
}
 
export default Skill;

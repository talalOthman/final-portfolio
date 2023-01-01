import { faShip } from "@fortawesome/free-solid-svg-icons";
import { faPython, faJs, faCss3Alt, faHtml5, faLaravel } from '@fortawesome/free-brands-svg-icons';
import ProjectCard from '../components/projectCard';


export default function Project2() {
    const projectDescription = "A web application that provides the neccassary information needed to track potential illegal activity that might occur in maritime areas." +
        " This project was built by carefully following the requirements given by the relevant stakeholders."

    const techIcons = [
        {
            id: 5,
            iconName: faJs
        },
        {
            id: 6,
            iconName: faPython
        },
        {
            id: 7,
            iconName: faCss3Alt
        },
        {
            id: 8,
            iconName: faLaravel
        },
        {
            id: 9,
            iconName: faHtml5
        },
    ]
    return (
        <ProjectCard
            title={"Maritime Monitoring System"}
            icon={faShip}
            description={projectDescription}
            techIcons={techIcons}
            githubLink={"https://github.com/talalOthman/Marine-app"}
            projectLink={"https://drive.google.com/file/d/1kbk0vW0c15HD58XugdF_LKmzafLaZ2c7/view?usp=share_link"}
            leftArrowLink={"/projects/projectsMain"}
            rightArrowLink={"/projects/project3"}
        />
    )
}

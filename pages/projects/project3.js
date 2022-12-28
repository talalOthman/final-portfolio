import { faVirusCovid } from "@fortawesome/free-solid-svg-icons";
import { faJs, faCss3Alt, faHtml5} from '@fortawesome/free-brands-svg-icons';
import ProjectCard from '../components/projectCard';


export default function Project3() {
    const projectDescription = "A web application that provide the latest data relevant to the covid-19 pandameic. "+
    "The data that is being used throughout this web application is fetched by using several third-party APIs."

    const techIcons = [
        {
            id: 10,
            iconName: faJs
        },
        {
            id: 11,
            iconName: faCss3Alt
        },
        {
            id: 12,
            iconName: faHtml5
        },
    ]

    return (
        <ProjectCard
            title={"Covid-19 Tracker"}
            icon={faVirusCovid}
            description={projectDescription}
            techIcons={techIcons}
            githubLink={"https://github.com/talalOthman/Covid19-Tracker"}
            projectLink={"https://covid-19-tracker-74390.web.app/"}
            leftArrowLink={"/projects/project2"}
            rightArrow={'Disabled'}
            demoOrVisitName={'Visit'}
        />
    )
}

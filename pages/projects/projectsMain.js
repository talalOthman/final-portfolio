import { faShieldVirus } from "@fortawesome/free-solid-svg-icons";
import { faPython, faJs, faCss3Alt, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import React from 'react'
import ProjectCard from '../components/projectCard';


export default function ProjectsMain() {
    const projectDescription = "A web application that predicts if an individual might have the monkeypox"
        + " disease by the usage of Artificial Intelligence. The model that classify the input provided from the users has an accuraccy rate of 93.8%."
        

    const techIcons = [
        {
            id: 1,
            iconName: faJs
        },
        {
            id: 2,
            iconName: faPython
        },
        {
            id: 3,
            iconName: faCss3Alt
        },
        {
            id: 4,
            iconName: faHtml5
        },
    ]

    return (
        <ProjectCard
            title={"Monkeypox Detector"}
            icon={faShieldVirus}
            description={projectDescription}
            techIcons={techIcons}
            githubLink={"https://github.com/talalOthman/Monkeypox-app"}
            projectLink={"https://drive.google.com/file/d/1iOcLydbbXQcZ-s40d0Bqfix3P8edUQKy/view?usp=share_link"}
            leftArrow={"Disabled"}
            rightArrowLink={"/projects/project2"}
        />
    )
}

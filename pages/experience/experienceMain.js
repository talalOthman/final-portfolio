import React from 'react'
import ExperienceCard from '../components/experienceCard';


export default function ExperienceMain() {
    const contributions = [
        'Developed 7 new notifications that are being used by customers.',
        'Enhanced existing model classes by creating custom scope functions to ease the development for future features.',
        'Increased the overall engagement rate of the Vimigo product.'
    ]
    return (
        <ExperienceCard
            jobTitle={'Backend Developer'}
            image={'/images/vimigo.png'}
            startDuration={'2021 Oct'}
            endDuration={'2022 Feb'}
            contributions={contributions}
            detailsLink={'https://www.vimigotech.com/'}
            leftArrow={'Disabled'}
            rightArrowLink={'/experience/experience2'}
        />
    )
}

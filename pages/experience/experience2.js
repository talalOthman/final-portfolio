import React from 'react'
import ExperienceCard from '../components/experienceCard';


export default function Experience2() {
    const contributions = [
        'Developed the entire frontend of the new stock terminal that will be used by future customers to track their stock.',
        'Improved the customer experience compared to the old stock terminal used by the customers.',
        'Implemented all the frontend functionalities that were requested by relevant stakeholders in a timely manner.'
    ]
    return (
        <ExperienceCard
            jobTitle={'Frontend Developer'}
            image={'/images/IME.png'}
            startDuration={'2021 July'}
            endDuration={'2021 Oct'}
            contributions={contributions}
            detailsLink={'https://imetech.com.my/'}
            rightArrow={'Disabled'}
            leftArrowLink={'/experience/experienceMain'}
        />
    )
}

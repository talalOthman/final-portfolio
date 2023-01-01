import React from 'react'
import EducationCard from '../components/educationCard';


export default function EducationMain() {
    const achievments = [
        'Worked with a cross-functional team to deliver a complete software product, from conception to deployment, and demonstrated strong communication and collaboration skills.',
        'Demonstrated strong problem-solving skills by completing a variety of challenging software engineering projects.'
    ]
    return (
        <EducationCard
            educationTitle={'BSc. of Software Eng.'}
            image={'/images/UTM.png'}
            startDuration={'2018 Sep'}
            endDuration={'2022 Nov'}
            achievements={achievments}
            degreeLink={'https://drive.google.com/file/d/1AoCRVH2dcFFicpo12SUHiq4xVCusV3Rl/view?usp=share_link'}
            awardsLink={'https://drive.google.com/file/d/1XQg6EamQDUevaAK9XEmEAm1b4xpXgwXF/view?usp=share_link'}
            leftArrow={'Disabled'}
            rightArrow={'Disabled'}
        />
    )
}
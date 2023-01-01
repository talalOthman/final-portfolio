import Link from 'next/link';
import styles from '../../styles/Home.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from 'react'
import Image from 'next/image'


export default function EducationCard({ educationTitle, image, startDuration, endDuration, achievements = [], degreeLink, awardsLink, leftArrow = "Active", rightArrow = "Acitve", leftArrowLink, rightArrowLink }) {

    return (
        <div className={styles.experienceContent}>
            <div className={styles.experienceContainer}>
                <div className={styles.experienceNameContainer}>
                    <h1 className={styles.projectsNameItem}>{educationTitle}</h1>
                </div>
                <div className={styles.experiencePicContainer}>
                    <div className={styles.experienceImageItem}>
                        <Image
                            src={image}
                            width={500}
                            height={500}
                            className={styles.experienceImageItem}
                        />
                    </div>
                </div>
                <div className={styles.experienceDateContainer}>
                    <p className={styles.experienceDateTitle}>Education Duration</p>
                    <p className={styles.experienceDateItem}>{startDuration} - {endDuration}</p>
                </div>
                <div className={styles.experienceDescriptionContainer}>
                    <p className={styles.experienceTitleItem}>Key Achievements</p>
                    <div className={styles.experienceDescriptionListConatiner}>
                        <ul className={styles.experienceDescriptionList}>
                            {
                                achievements.map((achievement) => {
                                    return (
                                        <li key={achievement} className={styles.experienceDescriptionItem}>{achievement}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className={styles.projectsBottomContentContainer}>
                    <Link href={leftArrowLink ?? ''}>
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            style={{ fontSize: 25 }}
                            className={leftArrow == 'Disabled' ? `${styles.projectsTechIconItemDisabled} ${styles.projectsTechIconItemHidden}` : `${styles.projectsTechIconItem} ${styles.projectsTechIconItemHidden}`}
                        />
                    </Link>
                    <div className={styles.projectsLinksContainer}>
                        <Link href={degreeLink ?? ''} passHref={true}>
                            <a className={`${styles.projectContentButton}`} target="_blank">
                                Degree
                            </a>
                        </Link>
                        <Link href={awardsLink ?? ''} passHref={true}>
                            <a className={`${styles.projectContentButton}`} target="_blank">
                                Awards
                            </a>
                        </Link>
                    </div>
                    <Link href={rightArrowLink ?? ''}>
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            style={{ fontSize: 25 }}
                            className={rightArrow == 'Disabled' ? `${styles.projectsTechIconItemDisabled} ${styles.projectsTechIconItemHidden}` : `${styles.projectsTechIconItem} ${styles.projectsTechIconItemHidden}`}
                        />
                    </Link>
                </div>
            </div>

            <div className={styles.projectsNavigatorContainer}>

                <Link href={leftArrowLink ?? ''}>
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        style={{ fontSize: 25 }}
                        className={leftArrow == 'Disabled' ? `${styles.projectsTechIconItemDisabled}` : `${styles.projectsTechIconItem}`}
                    />
                </Link>


                <Link href={rightArrowLink ?? ''}>
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ fontSize: 25 }}
                        className={rightArrow == 'Disabled' ? `${styles.projectsTechIconItemDisabled}` : `${styles.projectsTechIconItem}`}
                    />
                </Link>
            </div>
        </div>
    )
}

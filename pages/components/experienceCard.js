import Link from 'next/link';
import styles from '../../styles/Home.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from 'react'
import Image from 'next/image'


export default function ExperienceCard({ jobTitle, image, startDuration, endDuration, contributions = [], detailsLink, leftArrow = "Active", rightArrow = "Acitve", leftArrowLink, rightArrowLink }) {

    return (
        <div className={styles.experienceContent}>
            <div className={styles.experienceContainer}>
                <div className={styles.experienceNameContainer}>
                    <h1 className={styles.projectsNameItem}>{jobTitle}</h1>
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
                    <p className={styles.experienceDateTitle}>Experience Duration</p>
                    <p className={styles.experienceDateItem}>{startDuration} - {endDuration}</p>
                </div>
                <div className={styles.experienceDescriptionContainer}>
                    <p className={styles.experienceTitleItem}>Key Contributions</p>
                    <ul className={styles.experienceDescriptionList}>
                        {
                            contributions.map((contribution) => {
                                return (
                                    <li key={contribution} className={styles.experienceDescriptionItem}>{contribution}</li>
                                )
                            })
                        }
                    </ul>
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
                        <Link href={detailsLink ?? ''} passHref={true}>
                            <a className={`${styles.projectContentButton}`} target="_blank">
                                Details
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

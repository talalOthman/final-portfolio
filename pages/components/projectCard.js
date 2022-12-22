import Link from 'next/link';
import styles from '../../styles/Home.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import LinkButton from '../components/linkButton';


export default function ProjectCard({ title, icon, description, techIcons = [], githubLink, projectLink, demoOrVisitName = "Demo", leftArrow = "Active", rightArrow = "Acitve", leftArrowLink, rightArrowLink }) {
    return (
        <div className={styles.projectsContent}>
            <div className={styles.projectsContainer}>
                <div className={styles.projectsNameContainer}>
                    <h1 className={styles.projectsNameItem}>{title}</h1>
                </div>
                <div className={styles.projectsPicContainer}>
                    <div className={styles.projectsPicItem}>
                        <FontAwesomeIcon
                            icon={icon}
                            style={{ fontSize: 250 }}
                            className={styles.projectsPicItem}
                        />
                    </div>
                </div>
                <div className={styles.projectsDescriptionContainer}>
                    <p className={styles.projectsDescriptionItem}>
                        {description}
                    </p>
                </div>
                <div className={styles.projectsTechContainer}>
                    <h3 className={styles.projectsTechTitleItem}>Technologies Used</h3>
                    <div className={styles.projectsTechIconsContainer}>
                        {
                            techIcons.map((icon) => {
                                return (
                                    <FontAwesomeIcon
                                        key={icon.id}
                                        icon={icon.iconName}
                                        style={{ fontSize: 25 }}
                                        className={styles.projectsTechIconItem}
                                    />
                                )
                            })
                        }
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
                        <LinkButton link={githubLink} name={"Github"} />
                        <LinkButton link={projectLink} name={demoOrVisitName} />
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

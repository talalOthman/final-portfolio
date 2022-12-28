import Link from 'next/link';
import Layout from '../components/layout';
import styles from '../../styles/Home.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleRight, faArrowLeft, faArrowRight, faCode, faProjectDiagram, faShieldVirus } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router'
import { faGithub, faLinkedin, faReact, faPython, faJs, faCss3, faCss3Alt, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import React, { useEffect } from 'react'
import Image from 'next/image'


export default function ExperienceMain() {
    const router = useRouter()

    return (
        <div className={styles.experienceContent}>
            <div className={styles.experienceContainer}>
                <div className={styles.experienceNameContainer}>
                    <h1 className={styles.projectsNameItem}>Backend Developer</h1>
                </div>
                <div className={styles.experiencePicContainer}>
                <div className={styles.experienceImageItem}>
                        <Image
                            src="/images/vimigo.png"
                            width={500}
                            height={500}
                            className={styles.experienceImageItem}
                        />
                    </div>
                </div>
                <div className={styles.experienceDateContainer}>
                    <p className={styles.experienceDateTitle}>Experience Duration</p>
                    <p className={styles.experienceDateItem}>2021 Oct - 2022 Feb</p>
                </div>
                {/* <div className={styles.experienceTitleContainer}>
                <p className={styles.experienceTitleItem}>Key Contributions</p>
                </div> */}
                <div className={styles.experienceDescriptionContainer}>
                <p className={styles.experienceTitleItem}>Key Contributions</p>
                    <ul className={styles.experienceDescriptionList}>
                        <li className={styles.experienceDescriptionItem}>Developed 7 new notifications that are being used by customers.</li>
                        <li className={styles.experienceDescriptionItem}>Enhanced existing model classes by creating custom scope functions to ease the development for future features</li>
                        <li className={styles.experienceDescriptionItem}>Increased the overall engagement rate of the Vimigo product.</li>
                    </ul>
                </div>
                <div className={styles.projectsBottomContentContainer}>

                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        style={{ fontSize: 25 }}
                        className={`${styles.projectsTechIconItemDisabled} ${styles.projectsTechIconItemHidden}`}
                    />
                    <div className={styles.projectsLinksContainer}>
                        <Link href="https://www.vimigotech.com/" passHref={true}>
                            <a className={`${styles.projectContentButton}`} target="_blank">
                                Details
                            </a>
                        </Link>
                    </div>
                    <Link href="/experience/experience2" passHref={true}>
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            style={{ fontSize: 25 }}
                            className={`${styles.projectsTechIconItem} ${styles.projectsTechIconItemHidden}`}
                        />
                    </Link>
                </div>
            </div>

            <div className={styles.projectsNavigatorContainer}>

                <FontAwesomeIcon
                    icon={faArrowLeft}
                    style={{ fontSize: 25 }}
                    className={styles.projectsTechIconItemDisabled}
                />


                <Link href="/experience/experience2" passHref={true}>
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ fontSize: 25 }}
                        className={styles.projectsTechIconItem}
                    />
                </Link>
            </div>
        </div>
    )
}

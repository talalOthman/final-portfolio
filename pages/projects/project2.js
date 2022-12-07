import Link from 'next/link';
import Layout from '../components/layout';
import styles from '../../styles/Home.module.scss'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleRight, faArrowDown19, faArrowLeft, faArrowLeftRotate, faArrowRight, faCode, faProjectDiagram, faShieldVirus, faShip } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router'
import { faGithub, faLinkedin, faReact, faPython, faJs, faCss3, faCss3Alt, faHtml5, faLaravel } from '@fortawesome/free-brands-svg-icons';



export default function Home() {
    const router = useRouter()
    const redirectNextProject = () => {
        router.push('/projects/project3')
    }

    const redirectPreviousProject = () => {
        router.push('/projects/projectsMain')
    }

    return (
        <div className={styles.projectsContent}>
            <div className={styles.projectsContainer}>
                <div className={styles.projectsNameContainer}>
                    <h1 className={styles.projectsNameItem}>Maritime Monitoring System</h1>
                </div>
                <div className={styles.projectsPicContainer}>
                    <div className={styles.projectsPicItem}>
                        <FontAwesomeIcon
                            icon={faShip}
                            style={{ fontSize: 250 }}
                            className={styles.projectsPicItem}
                        />
                    </div>
                </div>
                <div className={styles.projectsDescriptionContainer}>
                    <p className={styles.projectsDescriptionItem}>
                        A web application that provides the neccassary information needed to track potential illegal activity that might occur in maritime areas.
                        This project was built by carefully following the requirements given by the relevant stakeholders.
                    </p>
                </div>
                <div className={styles.projectsTechContainer}>
                    <h3 className={styles.projectsTechTitleItem}>Technologies Used</h3>
                    <div className={styles.projectsTechIconsContainer}>
                        <FontAwesomeIcon
                            icon={faJs}
                            style={{ fontSize: 25 }}
                            className={styles.projectsTechIconItem}
                        />

                        <FontAwesomeIcon
                            icon={faPython}
                            style={{ fontSize: 25 }}
                            className={styles.projectsTechIconItem}
                        />

                        <FontAwesomeIcon
                            icon={faCss3Alt}
                            style={{ fontSize: 25 }}
                            className={styles.projectsTechIconItem}
                        />

                        <FontAwesomeIcon
                            icon={faLaravel}
                            style={{ fontSize: 25 }}
                            className={styles.projectsTechIconItem}
                        />

                        <FontAwesomeIcon
                            icon={faHtml5}
                            style={{ fontSize: 25 }}
                            className={styles.projectsTechIconItem}
                        />

                    </div>
                </div>
                <div className={styles.projectsBottomContentContainer}>
                    <Link href="/projects/projectsMain" passHref={true}>
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            style={{ fontSize: 25 }}
                            className={`${styles.projectsTechIconItem} ${styles.projectsTechIconItemHidden}`}
                        />
                    </Link>
                    <div className={styles.projectsLinksContainer}>
                        <Link href="https://github.com/talalOthman/Marine-app" passHref={true}>
                            <a target="_blank">
                                <button className={`${styles.indexButtonItem} ${styles.projectContentButton}`}>Github</button>
                            </a>
                        </Link>
                        <Link href="https://drive.google.com/file/d/1kbk0vW0c15HD58XugdF_LKmzafLaZ2c7/view?usp=share_link" passHref={true}>
                            <a target="_blank">
                                <button className={`${styles.indexButtonItem} ${styles.projectContentButton}`}>Demo</button>
                            </a>
                        </Link>
                    </div>
                    <Link href="/projects/project3" passHref={true}>
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            style={{ fontSize: 25 }}
                            className={`${styles.projectsTechIconItem} ${styles.projectsTechIconItemHidden}`}
                        />
                    </Link>
                </div>
            </div>

            <div className={styles.projectsNavigatorContainer}>
                <Link href="/projects/projectsMain" passHref={true}>
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        style={{ fontSize: 25 }}
                        className={styles.projectsTechIconItem}
                    />
                </Link>

                <Link href="/projects/project3" passHref={true}>
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

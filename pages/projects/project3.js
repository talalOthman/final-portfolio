import Link from 'next/link';
import Layout from '../components/layout';
import styles from '../../styles/Home.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleRight, faArrowLeft, faArrowRight, faCode, faProjectDiagram, faShieldVirus, faShip, faVirusCovid } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router'
import { faGithub, faLinkedin, faReact, faPython, faJs, faCss3, faCss3Alt, faHtml5, faLaravel } from '@fortawesome/free-brands-svg-icons';



export default function Home() {
    const router = useRouter()
    const redirectNextProject = () => {
        router.push('/projects/project4')
    }

    const redirectPreviousProject = () => {
        router.push('/projects/project2')
    }

    return (
        <div className={styles.projectsContent}>
            <div className={styles.projectsContainer}>
                <div className={styles.projectsNameContainer}>
                    <h1 className={styles.projectsNameItem}>Covid-19 Tracker</h1>
                </div>
                <div className={styles.projectsPicContainer}>
                    <div className={styles.projectsPicItem}>
                        <FontAwesomeIcon
                            icon={faVirusCovid}
                            style={{ fontSize: 250 }}
                            className={styles.projectsPicItem}
                        />
                    </div>
                </div>
                <div className={styles.projectsDescriptionContainer}>
                    <p className={styles.projectsDescriptionItem}>
                        A web application that provide the latest data relevant to the covid-19 pandameic. The data that is being used throughout this web application
                        is fetched by using several third-party APIs.
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
                            icon={faCss3Alt}
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

                    <Link href="/projects/project2" passHref={true}>
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            style={{ fontSize: 25 }}
                            className={`${styles.projectsTechIconItem} ${styles.projectsTechIconItemHidden}`}
                        />
                    </Link>

                    <div className={styles.projectsLinksContainer}>
                        <Link href="https://github.com/talalOthman/Covid19-Tracker" passHref={true}>
                            <a className={`${styles.projectContentButton}`} target="_blank">
                                Github
                            </a>
                        </Link>
                        <Link href="https://covid-19-tracker-74390.web.app/" passHref={true}>
                            <a className={`${styles.projectContentButton}`} target="_blank">
                                Demo
                            </a>
                        </Link>
                    </div>
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ fontSize: 25 }}
                        className={`${styles.projectsTechIconItemDisabled} ${styles.projectsTechIconItemHidden}`}
                    />
                </div>
            </div>

            <div className={styles.projectsNavigatorContainer}>
                <Link href="/projects/project2" passHref={true}>
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        style={{ fontSize: 25 }}
                        className={styles.projectsTechIconItem}
                    />
                </Link>


                <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ fontSize: 25 }}
                    className={styles.projectsTechIconItemDisabled}
                />

            </div>
        </div>
    )
}

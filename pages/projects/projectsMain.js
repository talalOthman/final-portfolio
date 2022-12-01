import Link from 'next/link';
import Layout from '../components/layout';
import styles from '../../styles/Home.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleRight, faArrowLeft, faArrowRight, faCode, faProjectDiagram, faShieldVirus } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router'
import { faGithub, faLinkedin, faReact, faPython, faJs, faCss3, faCss3Alt, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image'
import projectImage from '../../public/images/buymecoffe.jpeg'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import React, { useEffect } from 'react'


export default function Home() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

    useEffect(() => {
        if (emblaApi) {
            // Embla API is ready
        }
    }, [emblaApi])

    const router = useRouter()
    const redirectNextProject = () => {
        router.push('/projects/project2')
    }

    return (
        <div className={styles.projectsContent}>
            <div className={styles.projectsContainer}>
                <div className={styles.projectsNameContainer}>
                    <h1 className={styles.projectsNameItem}>Monkeypox Detector</h1>
                </div>
                <div className={styles.projectsPicContainer}>
                    <div className={styles.projectsPicItem}>
                        <FontAwesomeIcon
                            icon={faShieldVirus}
                            style={{ fontSize: 250 }}
                            className={styles.projectsPicItem}
                        />
                    </div>
                </div>
                <div className={styles.projectsDescriptionContainer}>
                    <p className={styles.projectsDescriptionItem}>
                    A web application that predicts if an individual might have the monkeypox disease by the usage of Artificial Intelligence.
                    The model that classify the input provided from the users has an accuraccy rate of 93.8%.
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
                            icon={faHtml5}
                            style={{ fontSize: 25 }}
                            className={styles.projectsTechIconItem}
                        />
                    </div>
                </div>
                <div className={styles.projectsBottomContentContainer}>

                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        style={{ fontSize: 25 }}
                        className={`${styles.projectsTechIconItemDisabled} ${styles.projectsTechIconItemHidden}`}
                    />
                    <div className={styles.projectsLinksContainer}>
                        <Link href="https://github.com/talalOthman/Monkeypox-app" passHref={true}>
                            <button className={`${styles.indexButtonItem} ${styles.projectContentButton}`}>Github</button>
                        </Link>
                        <Link href="https://drive.google.com/file/d/1iOcLydbbXQcZ-s40d0Bqfix3P8edUQKy/view?usp=share_link" passHref={true}>
                            <button className={`${styles.indexButtonItem} ${styles.projectContentButton}`}>Demo</button>
                        </Link>
                    </div>
                    <Link href="/projects/project2" passHref={true}>
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


                <Link href="/projects/project2" passHref={true}>
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

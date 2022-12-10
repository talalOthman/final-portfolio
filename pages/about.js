import Link from 'next/link';
import Layout from './components/layout';
// import styles from '../styles/about.module.css'
import styles from '../styles/Home.module.scss'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe, faShieldVirus } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Home() {
    const router = useRouter()


    return (
        // <Layout props={0x249aaa}>
        <div className={styles.aboutContent}>
            <div className={styles.aboutCard}>
                <div className={styles.aboutImageContainer}>
                    <div className={styles.aboutImageItem}>
                        <Image
                            src="/images/TalalSuitFinal.jpeg"
                            alt="Picture of the author"
                            width={500}
                            height={500}
                            className={styles.aboutImageItem}
                        />
                    </div>
                    <h1 className={styles.aboutNameItem}>Talal Al-Ahdal</h1>
                    <div className={styles.aboutSocialMediaContainer}>
                        <Link href="https://www.linkedin.com/in/talalothman/">
                            <a target="_blank">
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    style={{ fontSize: 25 }}
                                    className={styles.aboutNavbarLogoItem}
                                />
                            </a>
                        </Link>

                        <Link href="https://github.com/talalOthman" >
                            <a target="_blank">
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    style={{ fontSize: 25 }}
                                    className={styles.aboutNavbarLogoItem}
                                />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={styles.aboutDescriptionContainer}>
                    <p className={styles.aboutDescriptionItem}>Extremely motivated to constantly develop my skills and grow
                        professionally. I am confident in my ability to tackle any obstacles I might face in the future.</p>
                </div>

                <div className={styles.aboutResumeContainer}>
                    <Link href="https://drive.google.com/file/d/1kLzgIBUgkwgYh-6ibkYAiGfhUEHQi_sE/view?usp=share_link" passHref={true}>
                        <a target="_blank">
                            <button className={`${styles.indexButtonItem}`}>Resume</button>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
        // </Layout>
    )
}

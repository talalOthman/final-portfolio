import Link from 'next/link';
import Layout from './components/layout';
// import styles from '../styles/index.module.css'
import styles from '../styles/Home.module.scss'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import $ from "jquery"



export default function Home() {
    const router = useRouter()

    const redirectUploadImage = () => {
        router.push('/projects/projectsMain')
    }
    return (
        <div className={styles.indexContentContainer}>
            <div className={styles.indexTitleContainer}>
                <h1 className={styles.indexTitleItem}>I'm Talal</h1>
                <div className={styles.typewriter}>
                    <p className={styles.indexSubTitleItem}>A Software Engineer. </p>
                </div>
            </div>

            <div className={styles.indexButtonContainer}>
                <button onClick={redirectUploadImage} className={styles.indexButtonItem}>Projects</button>
            </div>
        </div>
    )
}

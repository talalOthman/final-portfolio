// import styles from '../../styles/layout.module.css'
import styles from '../../styles/Home.module.scss'
import Head from 'next/head'
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCode, faProjectDiagram, faShieldVirus } from "@fortawesome/free-solid-svg-icons";


export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Talal&apos;s Portfolio</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width; initial-scale=1.0" />
            </Head>
            <div className={styles.layoutNavbar}>
                <div className={styles.layoutNavbarItems}>
                    <Link href="/">
                        <FontAwesomeIcon
                            icon={faCode}
                            style={{ fontSize: 25 }}
                            className={styles.layoutNavbarLogoItem}
                        /></Link>
                    <Link href="/about">About</Link>
                </div>
            </div>

            <div className={styles.layoutContent}>
                {children}
            </div>

        </>
    )
}
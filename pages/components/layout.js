// import styles from '../../styles/layout.module.css'
import styles from '../../styles/Home.module.scss'
import Head from 'next/head'
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from 'react';
// import '@fortawesome/fontawesome-svg-core/styles.css'; 
import { faBars, faBurger, faCode, faHamburger, faProjectDiagram, faShieldVirus, faX, faXmark } from "@fortawesome/free-solid-svg-icons";


export default function Layout({ children }) {
    const [isActive, setIsAcitve] = useState(false)

    function toggleNavbar() {
        setIsAcitve(!isActive)
    }

    function toggleHomePage(){
        setIsAcitve(false)
    }

    const barClassName = isActive ? `${styles.barActive}` : `${styles.barInActive}`
    const barContentClassName = isActive ? `${styles.barContentActive}` : `${styles.barContentInActive}`

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
                            className={`${styles.layoutNavbarLogoItem}`}
                            onClick={toggleHomePage}
                        /></Link>
                    <div className={styles.layoutNavbarSubItems}>
                        <Link href="/about">Skills</Link>
                        <Link href="/about">About</Link>
                    </div>

                    <div className={styles.layoutNavbarBurger}>
                        <FontAwesomeIcon
                            icon={faBars}
                            style={{ fontSize: 25 }}
                            className={`${styles.layoutNavbarLogoItem}`}
                            onClick={toggleNavbar}
                        />
                    </div>

                    <div className={barClassName}>
                        <div className={`${styles.layoutNavbarXBurgerIcon} ${barContentClassName}`}>
                        <FontAwesomeIcon
                            icon={faXmark}
                            style={{ fontSize: 25 }}
                            onClick={toggleNavbar}
                        />
                        </div>
                        <div className={`${styles.layoutNavbarBurgerItems} ${barContentClassName}`}>
                        <Link href="/about">Skills</Link>
                        <Link href="/about">About</Link>
                        </div>
                    </div>

                </div>
            </div>

            <div className={styles.layoutContent}>
                {children}
            </div>

        </>
    )
}
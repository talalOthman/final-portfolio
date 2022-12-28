import Link from 'next/link';
import styles from '../../styles/Home.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleRight, faArrowLeft, faArrowRight, faCode, faProjectDiagram, faShieldVirus } from "@fortawesome/free-solid-svg-icons";

export default function DesktopArrowButton({ link, type, status="Active" }) {

    return (
        <Link href={link ?? ''}>
            <FontAwesomeIcon
                icon={type == 'leftArrow' ? faArrowLeft : faArrowRight}
                style={{ fontSize: 25 }}
                className={status == 'Disabled' ? `${styles.projectsTechIconItemDisabled} ${styles.projectsTechIconItemHidden}` : `${styles.projectsTechIconItem} ${styles.projectsTechIconItemHidden}`}
            />
        </Link>
    )
}
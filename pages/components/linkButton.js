import Link from 'next/link';
import styles from '../../styles/Home.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleRight, faArrowDown19, faArrowLeft, faArrowLeftRotate, faArrowRight, faCode, faProjectDiagram, faShieldVirus, faShip } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router'
import { faGithub, faLinkedin, faReact, faPython, faJs, faCss3, faCss3Alt, faHtml5, faLaravel } from '@fortawesome/free-brands-svg-icons';



export default function LinkButton({link, name, target="_blank"}) {

    return (
        <Link href={link} passHref={true}>
            <a className={`${styles.projectContentButton}`} target={target}>
                {name}
            </a>
        </Link>
    )
}

import Link from 'next/link';
import styles from '../../styles/Home.module.scss'

export default function LinkButton({link, name, target="_blank"}) {

    return (
        <Link href={link ?? ''}>
            <a className={`${styles.projectContentButton}`} target={target}>
                {name}
            </a>
        </Link>
    )
}

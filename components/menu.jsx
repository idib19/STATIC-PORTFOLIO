import styles from '../styles/Menu.module.css' //Importer le fichier css dedier a ce composant
import Link from 'next/link'

export default function Menu() {
    return <nav>
        <ul className={styles.menu}>
            <li className={styles.li} >
                <Link href='/' className={styles.buttons}> BIENVENUE </Link>
            </li>
            <li className={styles.li} >
                <Link href='/projet1' className={styles.buttons}> PROJET 1 </Link>
            </li>
            <li className={styles.li} >
                <Link href='/projet2' className={styles.buttons}> PROJET 2 </Link>
            </li>
            <li className={styles.li} >
                <Link href='/contact' className={styles.buttons}> CONTACT </Link>
            </li>

        </ul>
    </nav>
}
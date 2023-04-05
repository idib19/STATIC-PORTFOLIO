import Image from "next/image"
import Menu from "./menu" // importer le composant Menu
import logo from '../public/mylogo.png'
import styles from '../styles/Header.module.css' //Importer le fichier css dedier a ce composant
import Link from 'next/link'
export default function Header( ) {
    return (

        <header className={styles.header}>
            <div className={styles.top}>
                <Link href="/">
                    <div className={styles.image}>
                    <Image className={styles.logo} src={logo} alt="logo"
                        
                    />
                    </div>
                </Link>

                <h1 className={styles.titre}>IDRISSA BERTHE</h1>
            </div>
            <Menu />
        </header>
    )
}
import styles from '../styles/Boutton.module.css' //Importer le fichier css dedier a ce composant
import Link from 'next/link'

export default function Boutton(){
    return <>
    <button className={styles.boutton}>
    <Link href='/contact' className={styles.buttons}> Me contacter </Link> 
    </button>
    </>
}
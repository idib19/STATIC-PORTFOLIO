import styles from '../styles/Info.module.css' //Importer le fichier css dedier a ce composant


export default function Info(props) {
    return <>
        <div className={styles.info }>
            {props.children}
        </div>
    </>

}
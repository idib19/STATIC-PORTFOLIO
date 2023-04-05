import styles from '../styles/Projet.module.css'; //Importer le fichier css dedier a ce composant
import Image from "next/image";
import Prj1 from '../public/hrcl1.png';
import Prj2 from '../public/hrcl2.png';
import Head from 'next/head';


export default function Projet2() {
    return <>
    <Head>
      <title>Idrissa - Projet 2 </title>
      <meta name="description" content="Presentation du projet numero 2 du portfolio de Idrissa "/>
      <meta property="og:title" content="Idrissa-Projet 2"/>
      <meta property="og:description" content="Presentation de mon deuxieme projet "/>
      <meta property="og:image" content="http://localhost:3000/profil.png"/>
    </Head><main >
        <div className={styles.main}>
            <span className={styles.span1}>
                <h3 className={styles.h2}> Projet 2</h3>
                <h1 className={styles.h1}>Gestionnaire de Manege</h1>
            </span>

            <div className={styles.caroussel}>
                <div>
                    <Image src={Prj1} alt="photo du jeu de memoire"
                        height={180}
                        width={230}
                    />
                </div>

                <div>
                    <Image src={Prj2} alt="photo du jeu de memoire"
                        height={180}
                        width={230}
                    />
                </div>

                <div>
                    <Image src={Prj1} alt="photo du jeu de memoire"
                        height={180}
                        width={230}
                    />
                </div>

                <div>
                    <Image src={Prj2} alt="photo du jeu de memoire"
                        height={180}
                        width={230}
                    />
                </div>

                <div>
                    <Image src={Prj1} alt="photo du jeu de memoire"
                        height={180}
                        width={230}
                    />
                </div>
            </div>

            <span className={styles.span}>
                <p className={styles.p}>Herculand est un  projet de site web dédié à la gestion de manèges.
                    Il a ete concu dans le but d&apos;aider les propriétaires et les gérants de maneges à gérer efficacement leur
                    entreprise . Il offre une variété de fonctionnalités pour faciliter la gestion quotidienne
                    , telles que la gestion des réservations, l&apos;inscription, l&apos;authentification et la connexion
                    en ligne des utilisateurs aisni qu&apos;une interface d&apos;administration integre.
                </p>
            </span>
        </div>

    </main>
</>
}
import styles from '../styles/Projet.module.css' //Importer le fichier css dedier a ce composant
import Image from "next/image";
import Prj1 from '../public/Prj3.png';
import Prj2 from '../public/Prj4.png'
import Head from 'next/head';

export default function Projet1() {
    return <>
    <Head>
      <title>Idrissa - Projet 1 </title>
      <meta name="description" content="Presentation du projet numero 1 du portfolio de Idrissa "/>
      <meta property="og:title" content="Idrissa-Projet1"/>
      <meta property="og:description" content="Presentation de mon premier projet "/>
      <meta property="og:image" content="http://localhost:3000/profil.png"/>
    </Head>
    <main >
        <div className={styles.main}>
            <span className={styles.span1}>
                <h3 className={styles.h2}> Projet 1</h3>
                <h1 className={styles.h1}>Jeu de Memoire</h1>
            </span>

            <div className={styles.caroussel}>
                <div>
                    <Image src={Prj1} alt="photo du jeu de memoire"
                       
                         />
                </div>

                <div>
                    <Image src={Prj2} alt="photo du jeu de memoire"
                        
                         />
                </div>

                <div>
                    <Image src={Prj1} alt="photo du jeu de memoire"
                        
                         />
                </div>

                <div>
                    <Image src={Prj2} alt="photo du jeu de memoire"
                       
                         />
                </div>

                <div>
                    <Image src={Prj1} alt="photo du jeu de memoire"
                       
                        />
                </div>
            </div>

            <span className={styles.span}>
                <p className={styles.p}>Ce jeu consiste en une grille de cartes retournées, chacune avec une image différente.
                    Le but du jeu est de retourner deux cartes à la fois et de trouver les paires correspondantes.
                    Si les cartes retournées ne correspondent pas, elles sont à nouveau retournées pour continuer
                    la recherche de paires. Le jeu se termine lorsque toutes les paires ont été trouvées. Il peut
                    être personnalisé en ajoutant différentes images ou en modifiant la taille de la grille.
                    Ce jeu est une excellente façon de développer la mémoire et la concentration.
                    </p>
            </span>
        </div>

        </main>
</>
}
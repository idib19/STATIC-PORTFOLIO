// Page d'acceuil du portfolio

import Bio from "../components/Bio"
import Idrissa from "../components/Idrissa"
import Head from "next/head"

import styles from '../styles/Acceuil.module.css'

export default function Acceuil() {
  return <>
    <Head>
      <title>Idrissa - Acceuil </title>
      <meta name="description" content="Page d&apos;acceuil du portfolio de Idrissa Berthe, developpeur web full Stack"/>
      <meta property="og:title" content="Idrissa-Acceuil"/>
      <meta property="og:description" content="Page d&apos;acceuil du portfolio de Idrissa Berthe, developpeur web full Stack"/>
      <meta property="og:image" content="http://localhost:3000/profil.png"/>

    </Head>

    <main className={styles.main} >
      <div className={styles.main1}>
        <Idrissa />

        <Bio />
      </div>
    </main>
  </>

}

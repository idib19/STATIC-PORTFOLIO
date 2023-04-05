import Head from "next/head"
import { useRef, useState } from "react";
import styles from '../styles/Contact.module.css'
import axios from "axios";
import { motion } from 'framer-motion'


export default function Contact() {

  const inputPrenom = useRef(null);
  const inputNom = useRef(null);
  const inputCourriel = useRef(null);
  const inputMessage = useRef(null);


  const handleSubmit = async (event) => {
    event.preventDefault();

    // validations courriel-nom-prenom
    validateCourriel();
    validatenom();
    validateprenom();


    if (validCourriel === "" && validprenom === "" && validnom === "") {
      let data = {
        prenom: inputPrenom.current.value,
        nom: inputNom.current.value,
        courriel: inputCourriel.current.value,
        message: inputMessage.current.value
      }
      try {
        const response = await axios.post('/api/contact', data);

        console.log(response.data);

        inputPrenom.current.value ='';
        inputNom.current.value ='';
        inputCourriel.current.value ='';
        inputMessage.current.value ='';
      }
      catch (error) {
        console.error('Erreur de soumission du formulaire')
      }
    }
  }

  const [validCourriel, setvalidcourriel] = useState("")
  const [validnom, setvalidnom] = useState("")
  const [validprenom, setvalidprenom] = useState("")


  const validateCourriel = () => {
    if (inputCourriel.current.validity.valid) {
      setvalidcourriel('')
    }

    else {
      if (inputCourriel.current.validity.valueMissing) {
        setvalidcourriel('Vous devez fournir un courriel')
      }
      else if (inputCourriel.current.validity.typeMismatch) {
        setvalidcourriel('Cette adresse courriel n\'est pas valide')
      }
    }
  }

  const validatenom = () => {
    if (inputNom.current.validity.valid) {
      setvalidnom('')
    }

    else {
      setvalidnom('Veuillez fournir votre nom')
    }
  }

  const validateprenom = () => {
    if (inputPrenom.current.validity.valid) {
      setvalidprenom('')
    }

    else {
      setvalidprenom('Veuillez fournir votre prénom ')
    }
  }

  return <>
    <Head>
      <title>Contacter-Idrissa </title>
      <meta name="description" content="Page contact, Idrissa " />
      <meta property="og:title" content="Idrissa-Contact" />
      <meta property="og:description" content="Page de contact de Idrissa Berthe, developpeur web full Stack" />
      <meta property="og:image" content="http://localhost:3000/profil.png" />

    </Head>

    <motion.div initial='hidden' animate='visible' variants={{ hidden: { scale: .8, opacity: 0 }, visible: { scale: [.9, 1], opacity: 1, transition: { delay: .3 } } }} >


    <main className={styles.main}>

      <div className={styles.formcontainer}>



        <form className={styles.form} noValidate onSubmit={handleSubmit}>
          <h3>CONTACT</h3>

          <div className={styles.divinput} >

            <input type="text" ref={inputPrenom} required placeholder="Prenom" />

            {
              validprenom &&
              <div className={styles.erreur}>
                {validprenom}
              </div>
            }
          </div>

          <div className={styles.divinput}>

            <input type="text" ref={inputNom} required placeholder="Nom" />

            {
              validnom &&
              <div className={styles.erreur}>
                {validnom}
              </div>
            }
          </div>

          <div className={styles.divinput}>

            <input type="email" ref={inputCourriel} required placeholder="Email" />

            {
              validCourriel &&
              <div className={styles.erreur}>
                {validCourriel}
              </div>
            }

          </div>

          <div>

            <textarea cols="25" rows="4" required placeholder="Message" ref={inputMessage}>

            </textarea>
          </div>

          <input className={styles.submitbutton} type="submit" value="Envoyer" />
        </form>

      </div>
    </main>
    
    </motion.div>
  </>
}
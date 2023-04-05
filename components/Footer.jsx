import styles from '../styles/Footer.module.css' //Importer le fichier css dedier a ce composant
import Image from 'next/image'
import ytb from '../public/ytb5.png'
import insta from '../public/insta.png'
import linkedin from '../public/linkedin.png'
import github from '../public/github.png'
export default function Footer () {
    return <>
        <footer className={styles.footer}>
                <div className={styles.icones}>
                        <div>
                                <a href="https://www.youtube.com/channel/UCEvTxLuhzv_ACcwn_855A2g" target="_blank" rel="noreferrer"> <Image className={styles.logo} src={ytb} alt="logo Youtube"
                        /></a>
                        </div>
                        <div>
                             <a href="https://www.instagram.com/idii.b/?igshid=NDk5N2NlZjQ%3D" target="_blank" rel="noreferrer"> <Image className={styles.logo} src={insta} alt="logo insta"/></a>  
                        </div>
                        <div>
                        <a href="https://www.linkedin.com/in/idrissa-berth%C3%A9-192531229/" target="_blank" rel="noreferrer"> <Image className={styles.logo} src={linkedin} alt="logo Linkedin"/></a>  
      
                        </div>

                        <div>
                        <a href="https://github.com/idib19" target="_blank" rel="noreferrer"> <Image className={styles.logo} src={github} alt="logo Linkedin"/></a>  
      
                        </div>
                </div>

                <p className={styles.p}>© 2021 Copyright Idrissa Berthe</p>

                
        </footer>
        </>
    
}
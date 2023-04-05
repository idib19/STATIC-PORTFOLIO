import Info from "./info"
import Image from "next/image"
import profil from '../public/profil.png'
import styles from '../styles/Presentation.module.css' //Importer le fichier css dedier a ce composant
import Boutton from "./boutton"


export default function Idrissa() {
    return <div className={styles.acceuil}>


        <div >
            <Image src={profil} alt="photo de profil Idrissa"
                height={144}
                width={144}
                className={styles.borderCircle}


            />
        </div>

        <div>
            <Info >
                <p>
                    Salut,  moi c&apos;est Idrissa
                    et j&apos;adore relevé de nouveaux challenges.
                </p>

            </Info>
        </div>

        <div>
            <Boutton>

            </Boutton>
        </div>


    </div>

}

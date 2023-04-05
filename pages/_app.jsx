// Ceci est le fichier de depart de notre app next (entry point)
import 'normalize.css/normalize.css'
import '../styles/globals.css' // Ceci est le fichier css global de l'app

import { Montserrat, Roboto_Flex} from '@next/font/google'
import Layout from '../components/Layout';

const roboto = Roboto_Flex();
const montserrat = Montserrat();

export default function App({ Component, pageProps }) {
  


  return <>
 <style jsx global>
  {`
  html{
    font-family: ${roboto.style.fontFamily}
    }

    h1,h2,h3,h4,h5,h6{
      font-family: ${montserrat.style.fontFamily}
    }
  `}
 </style>

 <Layout>
 <Component  {...pageProps} />
 </Layout>
  

  </>
}

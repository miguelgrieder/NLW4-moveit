import { PersonalizeProvider } from '../contexts/PersonalizeContext';
import '../styles/global.css';
//Sempre carregado e renderizado a cada nova pagina


function MyApp({ Component, pageProps }) {
  return (

      <Component {...pageProps} />

)};

export default MyApp

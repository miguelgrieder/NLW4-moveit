import { PersonalizeProvider } from '../contexts/PersonalizeContext';
import '../styles/global.css';
//Sempre carregado e renderizado a cada nova pagina


function MyApp({ Component, pageProps }) {
  
  return (
    <PersonalizeProvider> 
      <Component {...pageProps} />
    </PersonalizeProvider>

)};

export default MyApp

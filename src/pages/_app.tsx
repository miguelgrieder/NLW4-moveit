import '../styles/global.css';
import { ChallengesProvider} from '../contexts/ChallengesContext'
import { CountdownContext, CountdownProvider } from '../contexts/CountdownContext';
//Sempre carregado e renderizado a cada nova pagina


function MyApp({ Component, pageProps }) {
  return (


  <ChallengesProvider>
      <Component {...pageProps} />
  </ChallengesProvider>
)};

export default MyApp

import '../styles/global.css';

//Sempre carregado e renderizado a cacda nova pagina

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

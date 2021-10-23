import { PersonalizeProvider } from '../contexts/PersonalizeContext';
import '../styles/global.css';
import GoogleLogin from 'react-google-login';
//Sempre carregado e renderizado a cada nova pagina


function MyApp({ Component, pageProps }) {
  const responseGoogle = (response)=>{
    console.log(response);
    console.log(response.profileObj);
  }
  return (
    <GoogleLogin
    clientId="204696438746-8og13k6e857sfg42olg8dfk68pnnt5hu.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
    cookiePolicy={'single_host_origin'}>
    <PersonalizeProvider> 
      <Component {...pageProps} />
    </PersonalizeProvider>
    </GoogleLogin>
)};

export default MyApp

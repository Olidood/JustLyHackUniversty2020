import Head from "next/head";
import HeaderUnlogged from '../components/HeaderUnlogged';
import SignInBody from '../components/SignInBody';
import Footer from '../components/Footer'

function Home(){
  return <div>
    <Head>
      <title>Вход</title>
      <link rel="shortcut icon" href="https://sun9-28.userapi.com/N_0nedgWtI-4iqd51k7hkB9Ei-gR_yXzolLn_g/o2lxrwNNQ3Y.jpg" type="image/x-icon"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
    </Head>
  </div>
}

export default function SignIn(){
    return(
      <div style={{'background-image':'url(https://sun9-12.userapi.com/VjptDjuK4wfiu0h9w-D76kG95KUYVfNUHrSzZA/hsl-nw7Ziew.jpg)'}}>
        <Home/>
        <HeaderUnlogged/>
        <SignInBody/>
        <Footer/>
      </div>
    );
}

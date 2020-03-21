import HeaderLogged from '../components/HeaderLogged';
import Head from "next/head";
import IndexBody from '../components/IndexBody';
import Footer from '../components/Footer'

function Home(){
  return <div>
    <Head>
      <title>Легко!</title>
      <script type="text/javascript" src="//vk.com/js/api/openapi.js?122"></script>
      <link rel="shortcut icon" href="https://sun9-28.userapi.com/N_0nedgWtI-4iqd51k7hkB9Ei-gR_yXzolLn_g/o2lxrwNNQ3Y.jpg" type="image/x-icon"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
    </Head>
  </div>
}

export default function IndexLogged(){
    return(
      <div style={{'background-image':'url(https://sun9-12.userapi.com/VjptDjuK4wfiu0h9w-D76kG95KUYVfNUHrSzZA/hsl-nw7Ziew.jpg)'}}>
        <Home/>
        <HeaderLogged/>
        <IndexBody logged="true"/>
        <Footer/>
      </div>
    );
}

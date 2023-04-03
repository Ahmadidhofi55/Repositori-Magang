import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'
import Image from 'next/image'

//import Navbarcomponents
import NavbarComponents from '../components/NavbarComponents'
//import HeroComponents
import HeroComponents from '../components/HeroComponents'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rumah Impian</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/Assets/logo.png" type="image/x-icon" />
        <link rel="stylesheet" href="/style/style.css" />
      </Head>
      {/*Navbar*/}
      <NavbarComponents />

      {/*Hero Section*/}
      <HeroComponents />
    </>
  );
}

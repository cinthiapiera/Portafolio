import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import Services from '../Services/Services';
import Experience from '../Experience/Experience';
import Portfolio from '../Portfolio/Portfolio';
import Carrusel from '../Carrusel/Carrusel';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Layout = () => {
  return(
    <> 
      <Header/>
      <HeroSection/>
      <About/>
      <Services/>
      <Experience/>
      <Portfolio/>
      <Carrusel/>
      <Contact/>
      <Footer/>
    </>
  )  
}

export default Layout;
import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import Services from '../Services/Services';
import Experience from '../Experience/Experience';
import Portfolio from '../Portfolio/Portfolio';
import Carrusel from '../Carrusel/Carrusel';

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
    </>
  )  
}

export default Layout;
import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import Services from '../Services/Services';
import Experience from '../Experience/Experience';
import Portfolio from '../Portfolio/Portfolio';

const Layout = () => {
  return(
    <> 
      <Header/>
      <HeroSection/>
      <About/>
      <Services/>
      <Experience/>
      <Portfolio/>
    </>
  )  
}

export default Layout;
import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import Services from '../Services/Services';
import Experience from '../Experience/Experience';

const Layout = () => {
  return(
    <> 
      <Header/>
      <HeroSection/>
      <About/>
      <Services/>
      <Experience/>
    </>
  )  
}

export default Layout;
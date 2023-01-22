import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import Services from '../Services/Services';

const Layout = () => {
  return(
    <> 
      <Header/>
      <HeroSection/>
      <About/>
      <Services/>
    </>
  )  
}

export default Layout;
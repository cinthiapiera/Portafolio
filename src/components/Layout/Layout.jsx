import React, { Fragment } from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';

const Layout = () => {
  return(
    <Fragment> 
      <Header/>
      <HeroSection/>
      <About/>
    </Fragment>
  )
  
}

export default Layout;
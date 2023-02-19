import React from 'react';
import './Footer.css';
import { Container } from 'reactstrap';

const Footer = () => {
  return (
    <footer className='pb-4'>
      <Container className='text-center footer'>
      <div className="social__links_footer">
                <span><a href="https://www.facebook.com/Cinthia.Maldonado.R/" target="_blank" rel="noopener noreferrer"><i className="ri-facebook-box-fill"></i></a></span>
                <span><a href="https://github.com/cinthiapiera" target="_blank" rel="noopener noreferrer"><i className="ri-github-line"></i></a></span>
                <span><a href="https://www.linkedin.com/in/cinthia-maldonado-rafael/" target="_blank" rel="noopener noreferrer"><i className="ri-linkedin-box-fill"></i></a></span>
        </div>
        <p><i className="ri-copyright-line"></i> Copyright 2023 - Todos los Derechos Reservados <br/> Desarrollado por Cinthia Maldonado ✨</p>
      </Container>
    </footer>
  );
};

export default Footer;
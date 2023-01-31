import React from 'react';
import './Footer.css';
import { Container } from 'reactstrap';

const Footer = () => {
  return (
    <footer className='pb-4'>
      <Container className='text-center footer'>
        <p><i className="ri-copyright-line"></i> Copyright 2023 - Todos los Derechos Reservados <br/> Desarrollado por Cinthia Maldonado ✨</p>
      </Container>
    </footer>
  );
};

export default Footer;
import React from 'react';
import './HeroSection.css';
import { Container, Row, Col } from 'reactstrap';
import perfil from '../../assests/foto_perfil.png';

const HeroSection = () => {
  return (
    <section className='hero__section' id='home'>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="hero__content">
                        <p className='mb-3'>Bienvenido a mi portafolio</p>
                        <h5 className='mb-4'>Hola</h5>
                        <h2 className='hero__title mb-4'>Soy <span>Cinthia Maldonado</span></h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="mt-4 hero__btns d-flex align-items-center gap-4">
                            <button className="btn hire__btn"><a href="#a">Contrátame</a></button>
                            <button className="btn">Contactame</button>
                        </div>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className="hero__img">
                        <img src={perfil} alt="" className='w-100'/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default HeroSection
import React, { useEffect, useRef } from 'react';
import './HeroSection.css';
import { Container, Row, Col } from 'reactstrap';
import { init } from 'ityped';
import foto from '../../assests/foto.png';

const HeroSection = () => {
  const textRef = useRef();
  useEffect(()=>{
    init(textRef.current,{
      backDelay: 1500,
      showCursor: false,
      strings:['Cinthia Maldonado','Full Stack Web Developer','Ingeniera Informática']
    })
  },[])

  return (
    <section className='hero__section' id='inicio'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <p className='mb-3'>Bienvenido a mi portafolio</p>
              <h2 className='hero__title mb-4'>
                Soy <span ref={textRef}></span></h2>
              <p>Mis competencias principales abarcan una amplia variedad de lenguajes de programación, bases de datos, frameworks web, herramientas de desarrollo y tecnologías relacionadas. He estado trabajando en proyectos desde pequeñas aplicaciones hasta sitios web complejos. Me esfuerzo por mantenerme al día con las últimas tendencias en tecnologías web.</p>
              <div className="mt-4 hero__btns d-flex align-items-center gap-4">
                <button className="btn hire__btn"><a href="#a">Contrátame</a></button>
                <button className="btn">Contactame</button>
              </div>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src={foto} alt="" className='w-100'/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection;
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
      strings:[
        'Cinthia Maldonado',
        'Full Stack Web Developer',
      ]
    })
  },[])

  return (
    <section className='hero__section' id='inicio'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <p className='mb-3'>¡Hola!👋, bienvenido a mi portafolio </p>
              <h2 className='hero__title mb-3'>
                Soy <span ref={textRef}></span>
              </h2>
              <p>Descubre mis trabajos recientes, habilidades y experiencia laboral. Si estás buscando una desarrolladora web para tus próximos proyectos, estoy aquí para ayudarte. Revisa mi portafolio y contáctame para más detalles.</p>

              <div className="mt-4 hero__btns d-flex align-items-center gap-4">
                <button className="btn hire__btn">
                  <a href='assests\CV\Cinthia Maldonado.pdf' download='Cinthia Maldonado.pdf'>Descargar CV</a>
                </button>
              </div>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src={foto} alt="foto-Cinthia-Maldonado" className='w-100'/>
            </div>
            <div className="hero__experience d-flex align-items-center gap-3">
              <span>
                <i className="ri-code-view"></i>
              </span>
              <div className="bg-transparent">
                <h6 className="mb-0">'Aprende, codifica, crea' </h6>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection;
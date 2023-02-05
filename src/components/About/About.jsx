import React, { useState} from 'react';
import './About.css';
import { Container, Row, Col } from 'reactstrap';
import perfil from '../../assests/perfil.png';
import Education from './Education';
import Skills from './Skills';
import Award from './Award';

const About = () => {
  const [perfilFilter, setPerfilFilter] = useState('PERFIL');
  return (
    <section id='perfil'>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <h2>Perfil</h2>
          </Col>
          <Col lg='4' md='3'>
            <div className="perfil__btns d-flex flex-column align-items-center">
              <button className={`perfil__btn ${perfilFilter === 'PERFIL' ? 'perfil__btn-active':''}`} onClick={()=>setPerfilFilter('PERFIL')}>Acerca de mí</button>
              <button className={`perfil__btn ${perfilFilter === 'EDUCACION' ? 'perfil__btn-active':''}`} onClick={()=>setPerfilFilter('EDUCACION')}>Educación</button>
              <button className={`perfil__btn ${perfilFilter === 'SKILLS' ? 'perfil__btn-active':''}`} onClick={()=>setPerfilFilter('SKILLS')}>Habilidades</button>
              <button className={`perfil__btn ${perfilFilter === 'AWARD' ? 'perfil__btn-active':''}`} onClick={()=>setPerfilFilter('AWARD')}>Certificaciones</button>
            </div>
          </Col>
          <Col lg='8' md='9'>
            {
              perfilFilter === 'PERFIL' && 
                <div className="perfil__content__wrapper d-flex gap-5">
                  <div className="perfil__img w-25">
                    <img src={perfil} alt="" className='w-100'/>
                  </div>
                  <div className="perfil__content w-75">
                    <p>Mi interés por el desarrollo web comenzó cuando descubrí que podía combinar mis conocimientos en informática con mi habilidad para resolver problemas en un solo trabajo. Creando soluciones digitales tanto creativas como funcionales, ayudando a las personas y a las empresas.</p>
                    <p>Como programadora, puedo desempeñarme tanto en el lado del cliente como en el lado del servidor, permitiéndome tener una visión completa de los proyectos en los que trabajo. Además, siempre estoy buscando nuevas formas de mejorar mis habilidades y estar al día con las últimas tendencias tecnológicas en desarrollo web.</p>
                  </div>
            </div>
            }
            {
              perfilFilter === 'EDUCACION' && <Education/>
            }
            {
              perfilFilter === 'SKILLS' && <Skills/>
            }
            {
              perfilFilter === 'AWARD' && <Award/>
            }
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About;
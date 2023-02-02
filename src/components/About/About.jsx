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
              <button className={`perfil__btn ${perfilFilter === 'PERFIL' ? 'perfil__btn-active':''}`} onClick={()=>setPerfilFilter('PERFIL')}>Acerca de mi</button>
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
                    <p>Como Full Stack Developer, tengo experiencia en programación web, bases de datos, diseño y desarrollo. Puedo trabajar tanto en el lado del servidor como en el lado del cliente. Utilizo herramientas de desarrollo como Git y GitHub. Para la administración de proyectos me gusta usar Trello o Miro, aplicando metodologías ágiles como SCRUM.</p>
                    <div className="social__links">
                      <h6 className='mb-3'>Contactame por:</h6>
                      <span><a href="https://www.facebook.com/Cinthia.Maldonado.R/"><i className="ri-facebook-box-fill"></i></a></span>
                      <span><a href="https://github.com/cinthiapiera"><i className="ri-github-line"></i></a></span>
                      <span><a href="https://www.linkedin.com/in/cinthia-maldonado-rafael/"><i className="ri-linkedin-box-fill"></i></a></span>
                    </div>
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
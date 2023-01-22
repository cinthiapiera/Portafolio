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
            <h2>Perfil</h2>{' '}
          </Col>
          <Col lg='4' md='3'>
            <div className="perfil__btns d-flex flex-column align-items-center">
              <button className={`perfil__btn ${perfilFilter === 'PERFIL' ? 'perfil__btn-active':''}`} onClick={()=>setPerfilFilter('PERFIL')}>Perfil</button>
              <button className={`perfil__btn ${perfilFilter === 'EDUCACION' ? 'perfil__btn-active':''}`} onClick={()=>setPerfilFilter('EDUCACION')}>Educación</button>
              <button className={`perfil__btn ${perfilFilter === 'SKILLS' ? 'perfil__btn-active':''}`} onClick={()=>setPerfilFilter('SKILLS')}>Habilidades Blandas</button>
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
                    {/* <h4>Cinthia Maldonado</h4> */}
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas amet quis ut modi commodi nemo incidunt! Maiores, voluptates? Aut doloremque ipsam nesciunt excepturi corporis atque labore.</p>
                    <div className="social__links">
                      <h6 className='mb-3'>Contactame por:</h6>
                      <span><a href="#f"><i class="ri-facebook-box-fill"></i></a></span>
                      <span><a href="#g"><i class="ri-github-line"></i></a></span>
                      <span><a href="#l"><i class="ri-linkedin-box-fill"></i></a></span>
                      <span><a href="#e"><i class="ri-mail-fill"></i></a></span>
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
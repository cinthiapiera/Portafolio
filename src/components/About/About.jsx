import React from 'react';
import './About.css';
import { Container, Row, Col } from 'reactstrap';
import perfil from '../../assests/perfil.png';

const About = () => {
  return (
    <section id='perfil'>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                    <h2>Perfil</h2>{' '}
                </Col>
                <Col lg='4' md='3'>
                    <div className="perfil__btns d-flex flex-column align-items-center">
                        <button className="perfil__btn perfil__btn-active ">Perfil</button>
                        <button className="perfil__btn">Educación</button>
                        <button className="perfil__btn">Habilidades Blandas</button>
                        <button className="perfil__btn">Certificaciones</button>
                    </div>
                </Col>
                <Col lg='8' md='9'>
                    <div className="perfil__content__wrapper d-flex gap-5">
                        <div className="perfil__img w-25">
                            <img src={perfil} alt="" className='w-100'/>
                        </div>
                        <div className="perfil__content w-75">
                            <h3>Cinthia Maldonado</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas amet quis ut modi commodi nemo incidunt! Maiores, voluptates? Aut doloremque ipsam nesciunt excepturi corporis atque labore.</p>
                            <div className="social__links">
                                <h6 className='mb-4'>Contactame por:</h6>
                                <span><a href="#f"><i class="ri-facebook-box-fill"></i></a></span>
                                <span><a href="#g"><i class="ri-github-line"></i></a></span>
                                <span><a href="#l"><i class="ri-linkedin-box-fill"></i></a></span>
                                <span><a href="#e"><i class="ri-mail-fill"></i></a></span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default About
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
                    <div className="perfil__content_wrapper d-flex gap-5">
                        <div className="perfil__img w-25">
                            <img src={perfil} alt="" className='w-100'/>
                        </div>
                        <div className="perfil__content w-75">
                            <h2>Cinthia Maldonado</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas amet quis ut modi commodi nemo incidunt! Maiores, voluptates? Aut doloremque ipsam nesciunt excepturi corporis atque labore. Animi optio eius nulla!</p>
                            <div className="social__links">
                                <h6>Contactame por:</h6>
                                <span><a href="#f"><i class="ri-facebook-circle-line"></i></a></span>
                                <span><a href="#g"><i class="ri-github-fill"></i></a></span>
                                <span><a href="#l"><i class="ri-linkedin-box-fill"></i></a></span>
                                <span><a href="#e"><i class="ri-mail-line"></i></a></span>
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
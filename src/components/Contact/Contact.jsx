import React from 'react';
import './Contact.css';
import { Container, Row, Col } from 'reactstrap';
import Form from '../Form/Form';

const Contact = () => {

  return (
    <section id="contacto">
      <Container>
        <Row>
          <Col lg="12" className='mb-5'>
            <h2>Contacto</h2>
          </Col>
          <Col lg="6" md="6">
          <div className="contact__info-container d-flex align-items-center gap-5">
            <div className="single__info-box w-50">
              <h6>Ciudad</h6>
              <p>Lima-Perú</p>
            </div>
            <div className="single__info-box w-50">
              <h6>Teléfono</h6>
              <p>984296197</p>
            </div>
          </div>
          <div className="contact__info-container d-flex align-items-center gap-5">
            <div className="single__info-box w-50">
              <h6>E-mail</h6>
              <p>cinthia.maldonado@upch.pe</p>
            </div>
            <div className="single__info-box w-50">
              <h6>Location</h6>
              <p>Narnia 123, SMP</p>
            </div>
          </div>
          </Col>
          <Col g="6" md="6">
            <Form/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact;
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
          <div className="contact__info-container d-flex align-items-center gap-4">
            <div className="single__info-box w-50">
              <h6>Dirección</h6>
              <p>Lima 15103 | Lima, Perú</p>
            </div>
            <div className="single__info-box w-50">
              <h6>Email</h6>
              <p>cinthia.maldonado@upch.pe</p>
            </div>
          </div>
          <div className="contact__info-container d-flex align-items-center gap-4">
            <div className="single__info-box w-50">
              <h6>Dirección</h6>
              <p>Lima 15103 | Lima, Perú</p>
            </div>
            <div className="single__info-box w-50">
              <h6>Email</h6>
              <p>cinthia.maldonado@upch.pe</p>
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
import React from 'react';
import {Container, Row, Col} from 'reactstrap';

const Services = () => {
  return (
    <section id="experiencia">
      <Container>
        <Row>
          <Col lg='12'>
            <h6>Features</h6>
            <h2>services</h2>
          </Col>
          <Col lg='4' md='6' sm='6'>
            <div className="single__service">
              <span className="service__icon">
                <i class="ri-code-line"></i>
              </span>
              <h2>Diseño de Web</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, ad, accusamus a, pariatur dolore iure molestias placeat magnam excepturi velit perferendis reiciendis. Saepe rerum inventore labore quidem voluptatem, aut magnam.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Services;

//<i class="ri-code-line"></i>
//<i class="ri-code-s-slash-line"></i>
//<i class="ri-qr-code-line"></i>
//<i class="ri-search-line"></i>
//<i class="ri-landscape-line"></i>
//<i class="ri-gallery-line"></i>
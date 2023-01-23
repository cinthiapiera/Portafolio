import React from 'react';
import {Container, Row, Col} from 'reactstrap';

import './Services.css';

const servicesData =[
  {
    icon: 'ri-code-line',
    title: 'web Design',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae in modi hic iste nisi, molestias maiores inventore corrupti, vero, sint ad sit.',
  },
  {
    icon: 'ri-code-s-slash-line',
    title: 'web Development',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae in modi hic iste nisi, molestias maiores inventore corrupti, vero, sint ad sit.',
  },
  {
    icon: 'ri-qr-code-line',
    title: 'App Development',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae in modi hic iste nisi, molestias maiores inventore corrupti, vero, sint ad sit.',
  },
  {
    icon: 'ri-search-line',
    title: 'SEO',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae in modi hic iste nisi, molestias maiores inventore corrupti, vero, sint ad sit.',
  },
  {
    icon: 'ri-landscape-line',
    title: 'Graphics Design',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae in modi hic iste nisi, molestias maiores inventore corrupti, vero, sint ad sit.',
  },
  {
    icon: 'ri-gallery-line',
    title: 'UI/UX',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae in modi hic iste nisi, molestias maiores inventore corrupti, vero, sint ad sit.',
  },
  
]

const Services = () => {
  return (
    <section id="experiencia">
      <Container>
        <Row>
          <Col lg='12' className='services__top mb-5'>
            <h6>Features</h6>
            <h2>services</h2>
          </Col>
            {
              servicesData.map((item,index)=>(
                <Col lg='4' md='6' sm='6' key={index} className='mb-4'>
                  <div className="single__service">
                    <span className="service__icon" >
                      <i class={item.icon}></i></span>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                  </div>
              </Col>
              ))
            }
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
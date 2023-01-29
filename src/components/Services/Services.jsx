import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import img1 from '../../assests/proyecto01.png';
import img2 from '../../assests/proyecto2.png';

import './Services.css';

const servicesData =[
  {
    imgUrl: img1,
    // icon: 'ri-code-line',
    title:'SPA Pokémon',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae in modi hic iste nisi, molestias maiores inventore corrupti, vero, sint ad sit.',
  },
  {
    imgUrl: img2,
    title: 'web Development',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae in modi hic iste nisi, molestias maiores inventore corrupti, vero, sint ad sit.',
  },
  {
    imgUrl: img1,
    title: 'App Development',
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
                    <img src={item.imgUrl} alt={item.title} className='w-100'/>
                    {/* <span className="service__icon" >
                      <i class={item.icon}></i>
                      </span> */}
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
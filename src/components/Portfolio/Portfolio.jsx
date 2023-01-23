import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Portfolio.css';
import img01 from '../../assests/proyecto01.png';
import img02 from '../../assests/proyecto2.png';

const portfolioData =[
  {
    imgUrl: img01,
    title: 'SPA Pokémon',
    url: 'https://pi-pokemon.netlify.app/'
  },
  {
    imgUrl: img02,
    title: 'E-commerce Chilly',
    url: 'https://chilly-production.up.railway.app/'
  }
]

const Portfolio = () => {
  return (
    <section id="proyectos">
      <Container>
        <Row>
          <Col lg="12" className='portfolio__top mb-5'>
            <h6>Explora mi  trabajo y dame tu feedback</h6>
            <h2>Proyectos</h2>
          </Col>
          {
            portfolioData.map((item,index)=>(
              <Col lg="4" md="6" sm="6" key={index}>
                <div className="portfolio__card">
                  <div className="portfolio__img">
                    <img src={item.imgUrl} alt={item.title} className='w-100'/>
                  </div>
                  <div className="portfolio__content">
                    <h5>{item.title}</h5>
                    <a href={item.url}>view live</a>
                  </div>
                </div>
              </Col>
            ))
          }
          
        </Row>
      </Container>
    </section>
  )
}

export default Portfolio;
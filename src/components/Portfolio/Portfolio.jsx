import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Portfolio.css';
import img01 from '../../assests/proyecto01.png';
import img02 from '../../assests/proyecto2.png';

const portfolioData =[
  {
    imgUrl: img02,
    title: 'E-commerce Chilly',
    url: 'https://chilly-production.up.railway.app/',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae in modi hic iste nisi, molestias maiores inventore corrupti, vero, sint ad sit.',
  },
  {
    imgUrl: img01,
    title: 'SPA Pokémon',
    url: 'https://pi-pokemon.netlify.app/',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae in modi hic iste nisi, molestias maiores inventore corrupti, vero, sint ad sit.',
  }
  // {
  //   imgUrl: img01,
  //   title: 'SPA Pokémon',
  //   url: 'https://pi-pokemon.netlify.app/',
  //   desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae in modi hic iste nisi, molestias maiores inventore corrupti, vero, sint ad sit.',
  // },
]

const Portfolio = () => {
  return (
    <section id="proyectos">
      <Container>
        <Row>
          <Col lg='12' className='services__top mb-5'>
            <h6>Explora mi  trabajo y dame tu feedback</h6>
            <h2>Proyectos</h2>
          </Col>
          {
              portfolioData.map((item,index)=>(
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

export default Portfolio;
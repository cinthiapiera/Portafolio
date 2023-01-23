import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Experience.css';

const experienceData = [
  {
    year: '2020 -actualmente',
    title: 'Sr.Devloper',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ex illum quis! Nemo, blanditiis voluptatem illum, et esse dolores iure cum natus.'
  },
  {
    year: '2020 -2021',
    title: 'Sr.Devloper',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ex illum quis! Nemo, blanditiis voluptatem illum, et esse dolores iure cum natus.'
  },
  {
    year: '2020 -2021',
    title: 'Sr.Devloper',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ex illum quis! Nemo, blanditiis voluptatem illum, et esse dolores iure cum natus.'
  },
]

const backexperienceData = [
  {
    year: '2020 -antes',
    title: 'Sr.Devloper',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ex illum quis! Nemo, blanditiis voluptatem illum, et esse dolores iure cum natus.'
  },
  {
    year: '2020 -2021',
    title: 'Sr.Devloper',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ex illum quis! Nemo, blanditiis voluptatem illum, et esse dolores iure cum natus.'
  },
  {
    year: '2020 -2021',
    title: 'Sr.Devloper',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ex illum quis! Nemo, blanditiis voluptatem illum, et esse dolores iure cum natus.'
  },
]

const Experience = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className='mb-5'>
            <h2>Experiencia</h2>
          </Col>
          <Col lg="6" md="6">
            <div className="single__experience-container" >
              {
                experienceData.map((item,index)=>(
                  <div className="single__experience" key={index}>
                    <span className='experience__icon'>
                      <i class="ri-briefcase-line"></i>
                    </span>
                    <h6>{item.year}</h6>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                ))
              }
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="single__experience-container" >
              {
                backexperienceData.map((item,index)=>(
                  <div className="single__experience" key={index}>
                    <span className='experience__icon'>
                      <i class="ri-briefcase-line"></i>
                    </span>
                    <h6>{item.year}</h6>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                ))
              }
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Experience;
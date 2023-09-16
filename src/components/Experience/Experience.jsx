import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Experience.css';

const experience1Data = [
  {
    year: 'Jun, 2023 - Ago, 2023',
    title: 'Desarrollador Front-end y Marketing Digital - Freelance, Lima, Perú',
    desc: 'Creación, desarrollo integral de la identidad de la marca y estrategias de marketing en redes sociales. Diseño, gestión de una landing page y supervisión del despliegue en línea para un consultorio dental.'
  },
  {
    year: 'Ago, 2022 - Oct, 2022',
    title: 'Full Stack Teaching Assistant - Henry Bootcamp, Buenos Aires, Argentina',
    desc: 'Coordinar a un grupo de estudiantes para lograr la integración al grupo de estudio. Orientar a los estudiantes en los primeros pasos de la cursada. Asistir la resolución de ejercicios y promover la colaboración grupal (Pair Programming). Proponer ideas para la mejora de los procesos del Bootcamp.'
  },
  {
    year: 'Ene, 2022 - Mar, 2022',
    title: 'Asesoramiento Académico - Freelance, Lima, Perú',
    desc: 'Asesoramiento académico grupal teórico-práctico no presencial en la asignatura de computación, promoviendo la abstracción y resolución lógica de problemas en Python.'
  },
  
]

const experience2Data = [
  {
    year: 'May, 2021 - Nov, 2021',
    title: 'Desarrollador web y Coordinadora CISAN - UPCH | PRISMA ONG, Lima, Perú',
    desc: 'Diseño, desarrollo, implementación y mantenimiento de landing page del I Congreso Internacional de Seguridad Alimentaria Nutricional 2021. Diseño gráfico, edición de videos, marketing del pre congreso y congreso. Administración de la base de datos, y coordinación de sesiones en vivo (ZOOM - Meet).'
  },
  {
    year: 'Abr, 2017 - Abr, 2021',
    title: 'Web Máster en la  Facultad de Ciencias y Filosofía - UPCH, Lima, Perú',
    desc: 'Desarrollo, implementación y mantenimiento del sitio web FACIEN. Sub coordinación en la Unidad de Fidelización Estudiantil y gestión de redes sociales en la Unidad de Imagen. Coordinación del Programa de nivelación universitario (Ciclo Alpha).'
  },
  {
    year: 'Mar, 2014 - Feb, 2017',
    title: 'Asistente en el Departamento de Ciencias Exactas - UPCH, Lima, Perú',
    desc: 'Consultas y resolución de las prácticas de laboratorio y clases teóricas. Revisión y calificación de tareas, proyectos, cuestionarios, participación activa en clases, y reportes semanales a los Docentes coordinadores.'
  }
]

const Experience = () => {
  return (
    <section  id="experiencia">
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <h2>Experiencia</h2>
          </Col>
          <Col lg='6' md='6'>
            <div className="single__experience-container" >
              {
                experience1Data.map((item,index)=>(
                  <div className="single__experience" key={index}>
                    <span className='experience__icon'>
                      <i className="ri-briefcase-line"></i>
                    </span>
                    <h6>{item.year}</h6>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                ))
              }
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="single__experience-container" >
              {
                experience2Data.map((item,index)=>(
                  <div className="single__experience" key={index}>
                    <span className='experience__icon'>
                      <i className="ri-briefcase-line"></i>
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
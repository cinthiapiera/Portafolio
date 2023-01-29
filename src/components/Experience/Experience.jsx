import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Experience.css';

const experience1Data = [
  {
    year: 'Ago, 2022 - Oct, 2022',
    title: 'Full Stack Teaching Assistant, Henry Bootcamp, Buenos Aires, Argentina.',
    desc: 'Coordinar a un grupo de estudiantes para lograr la integración al grupo de estudio. Orientar a los estudiantes en los primeros pasos de la cursada. Asistir la resolución de ejercicios y promover la colaboración grupal (Pair Programming). Proponer ideas para la mejora de los procesos del Bootcamp.'
  },
  {
    year: 'Ene, 2022 - Mar, 2022',
    title: 'Asesoramiento Académico, Freelance, Lima, Perú',
    desc: 'Asesoramiento académico grupal teórico-práctica no presencial en la asignatura "Introduccion a la computación". Desarrollar la capacidad de abstracción y plantear soluciones a problemas de una manera lógica y algorítmica en un lenguaje de programación orientado a objetos con Python.'
  },
  {
    year: 'Mayo, 2021 - Nov, 2021',
    title: 'Desarrolladora web y Coordinadora  - CISAN 2021, PRISMA ONG y Universidad Peruana Cayetano Heredia FACIEN, Lima, Perú',
    desc: 'Diseño, desarrollo, implementación y mantenimiento de landing page (CMS: Joomla) del I Congreso Internacional de Seguridad Alimentaria Nutricional 2021. Diseño gráfico, edición de videos, marketing del pre congreso y congreso. Administración y soporte logístico en la base de datos. Coordinación y organización en las sesiones en vivo (ZOOM - Meet).'
  },
]

const experience2Data = [
  {
    year: 'Abr, 2017 - Abr, 2021',
    title: 'Web Máster FACIEN, Universidad Peruana Cayetano Heredia, Lima, Perú',
    desc: 'Desarrollo, implementación y mantenimiento de la página web y Web Máster de la Facultad de Ciencias y Filosofía de la UPCH. Sub coordinación en la Unidad de Fidelización Estudiantil y Gestor de redes sociales en Unidad de Imagen. Coordinación del Programa de nivelación universitario (Ciclo Alpha).'
  },
  {
    year: 'Mar, 2014 - Feb, 2017',
    title: 'Asistente en el Departamento de Ciencias Exactas (Sección Física, Informática y Matemática), Universidad Peruana Cayetano Heredia, Lima, Perú',
    desc: 'Consultas y resolución de las prácticas de laboratorio y clases teóricas en el aula interactiva. Revisión y calificación de tareas, proyectos, cuestionarios, participación en clases, y reporte semanales de los estudiantes al Docente Coordinador.'
  },
  // {
  //   year: '2020 -2021',
  //   title: 'Sr.Devloper',
  //   desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ex illum quis! Nemo, blanditiis voluptatem illum, et esse dolores iure cum natus.'
  // },
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
          <Col lg='6' md='6'>
            <div className="single__experience-container" >
              {
                experience2Data.map((item,index)=>(
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
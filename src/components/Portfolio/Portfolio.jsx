import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Portfolio.css';
import img01 from '../../assests/proyecto1.png';
import img02 from '../../assests/proyecto2.png';
import img03 from '../../assests/proyecto3.png';
import img04 from '../../assests/proyecto4.png';
import img05 from '../../assests/proyecto5.png';

const portfolioData =[
  {
    imgUrl: img01,
    title: 'SPA Pokémon',
    url: 'https://pi-pokemon.netlify.app/',
    desc: 'Aplicación de Pokémon con página de inicio con una lista de 150 cards de personajes con paginación, búsqueda, filtros, ordenamiento, sección de detalles, y sección de creación con formulario controlado y validaciones. Modelo responsivo.',
  },
  {
    imgUrl: img02,
    title: 'E-commerce Chilly',
    url: 'https://ecommerce-chilly.github.io/PF-Chilly/',
    desc: 'Plataforma en línea para la venta y armado de PC con características como UI amigable, catálogo de productos, carrito de compras, armado personalizado, pasarela de pago, chatbot y dashboard para administrador y usuarios registrados.',
  },
  {
    imgUrl: img04,
    title: 'Portafolio',
    url: 'https://cinthiapiera.github.io/Portafolio/',
    desc: 'Sitio web personal que funciona como portafolio para mostrar habilidades y experiencia. Cuenta con una estructura clara y bien organizada, con secciones que ofrecen información detallada, proyectos destacados y datos de contacto. Modelo responsivo.',
  },
  {
    imgUrl: img03,
    title: 'Encriptador de texto',
    url: 'https://cinthiapiera.github.io/encriptador/',
    desc: 'Aplicación que permite encriptar y desencriptar mensajes para proteger la privacidad de la información. Además, la interfaz es clara e intuitiva sin la necesidad de conocimientos técnicos avanzados. Modelo responsivo. ',
  },
  {
    imgUrl: img05,
    title: 'Consultorio Dental',
    url: 'https://drcarlosmaldonado.site/',
    desc: 'Landing page de odontología que destaca la amplia experiencia del profesional, ofrece una variedad de servicios dentales, testimonios de pacientes satisfechos y datos de contacto del consultorio. Modo nocturno/diurno. Modelo responsivo.',
  },
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
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <img src={item.imgUrl} alt={item.title} className='w-100'/>
                    </a>
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
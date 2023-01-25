import React from 'react';
import './Carrusel.css';
import {Container, Row, Col } from 'reactstrap';
import Slider from 'react-slick';
import img1 from '../../assests/logo/1.png';
import img2 from '../../assests/logo/2.png';
import img3 from '../../assests/logo/3.png';
import img4 from '../../assests/logo/4.png';
import img5 from '../../assests/logo/5.png';
import img6 from '../../assests/logo/6.png';
import img7 from '../../assests/logo/7.png';
import img8 from '../../assests/logo/8.png';
import img9 from '../../assests/logo/9.png';

const Carrusel = () => {
  const settings= {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay:true,
    autoplaySpeed: 3000,
    swipeToSlide:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" className='w-100'>
            <Slider {...settings}>
            <div>
              <h3><img src={img1} alt="logo_html5" className='carrusel__img'/></h3>
            </div>
            <div>
              <h3><img src={img2} alt="logo_CSS3" className='carrusel__img'/></h3>
            </div>
            <div>
              <h3><img src={img3} alt="logo_JavaScript" className='carrusel__img'/></h3>
            </div>
            <div>
              <h3><img src={img4} alt="logo_React" className='carrusel__img'/></h3>
            </div>
            <div>
              <h3><img src={img5} alt="logo_Redux" className='carrusel__img'/></h3>
            </div>
            <div>
              <h3><img src={img6} alt="logo_NodeJs" className='carrusel__img'/></h3>
            </div>
            <div>
              <h3><img src={img7} alt="logo_ExpressJS" className='carrusel__img'/></h3>
            </div>
            <div>
              <h3><img src={img8} alt="logo_Sequelize" className='carrusel__img'/></h3>
            </div>
            <div>
              <h3><img src={img9} alt="logo_PostgreSQL" className='carrusel__img'/></h3>
            </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Carrusel;

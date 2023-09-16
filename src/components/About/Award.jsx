import React from 'react';
import './Award.css';

const Award = () => {
  return (
    <div className="award__container d-flex align-items-center flex-wrap justify-content-between">
      <div className="award__item">
        <AwardItem 
          year='2023'
          title="Upskilling Java"
          text='Henry Bootcamp'
          url='https://drive.google.com/file/d/1F3TARj8IaHgHzE6omrn92bCvtrRiRE9o/view?usp=sharing'
        />
      </div>
      <div className="award__item">
        <AwardItem 
          year='2023'
          title="Programa Oracle Next Education Back-end Java"
          text='Oracle Next Education - Alura Latam'
          url='https://app.aluracursos.com/user/cinthia-maldonado/fullCertificate/421da98a9d11f36a3b3af78184cc0aac'
        />
      </div>
      <div className="award__item">
        <AwardItem 
          year='2023'
          title='Curso Profesional de Java'
          text='Código Facilito'
          url='https://drive.google.com/file/d/13rjwSTh6JU-PPpboDjXyItS7bUAoqNMs/view?usp=sharing'
        />
      </div>
      <div className="award__item">
        <AwardItem 
          year='2023'
          title='Curso Profesional de Angular'
          text='Código Facilito'
          url='https://drive.google.com/file/d/1Obfn1WhibbXnOkGSNoK_Kf_n9VvixgWj/view?usp=sharing'
        />
      </div>
      <div className="award__item">
        <AwardItem 
          year='2023'
          title='Curso Profesional de React'
          text='Código Facilito'
          url='https://drive.google.com/file/d/1P-erlOOMSt_wPOnOkBURuq_OF27zPSvh/view?usp=sharing'
        />
      </div>
      <div className="award__item">
        <AwardItem 
          year='2023'
          title='Full Stack Web Developer'
          text='Henry Bootcamp'
          url='https://drive.google.com/file/d/1yNzP-33PBqMN0WHFT-8UDVU8_88pKsCN/view?usp=sharing'
        />
      </div>
      <div className="award__item">
        <AwardItem 
          year='2022'
          title='Coordinación CISAN'
          text='UPCH FACIEN | PRISMA ONG'
          url='https://drive.google.com/file/d/19N-0q9SfNpPdv8buI6THPuFhPZfb7NSi/view?usp=sharing'
        />
      </div>
      <div className="award__item">
        <AwardItem 
          year='2021'
          title='Certificado de Trabajo'
          text='Universidad Peruana Cayetano Heredia - FACIEN'
          url='https://drive.google.com/file/d/1R8QU_HD45vhtZukeYQ0yIQnrfA9LMQoy/view?usp=sharing'
        />
      </div>
      <div className="award__item">
        <AwardItem 
          year='2021'
          title='Curso Design Thinking'
          text='Instituto Europeo de Posgrado - IEP'
          url='https://drive.google.com/file/d/1BqgShpKp0ti7AGI51aF1wan7rG6_sLa1/view?usp=sharing'
        />
      </div>
      <div className="award__item">
        <AwardItem 
          year='2017'
          title='Curso Especialización "CMS JOOMLA"'
          text='CTIC - UNI'
          url='https://drive.google.com/file/d/1J367JHYgfIlADPsHhxNlObtN8rx7uGpW/view?usp=sharing'
        />
      </div>
    </div>
  )
}

const AwardItem = ({year, title, text, url}) => {
  return(
    <div className="single__award">
      <div className="award__year">{year}</div>
      <h6 className="award__title">
        {title}<br></br>
        <span>{text}<br></br>
        <a href={url} className="award__url" target="_blank" rel="noopener noreferrer">Mostrar credencial </a><i className="ri-external-link-line"></i></span>
      </h6>
    </div>
  )
}

export default Award;
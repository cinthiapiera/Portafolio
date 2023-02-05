import React from 'react';
import './Award.css';

const Award = () => {
  return (
    <div className="award__container d-flex align-items-center flex-wrap justify-content-between">
      <div className="award__item">
        <AwardItem 
          year='2023'
          title="Formación en Programación"
          text='Oracle Next Education - Alura Latam'
          url='https://app.aluracursos.com/degree/certificate/e6e53eb0-9b58-4fee-a630-c860e68f3b15'
        />
      </div>
      <div className="award__item">
        <AwardItem 
          year='2022'
          title='Curso Profesional de React'
          text='Código Facilito'
          url='https://drive.google.com/file/d/1P-erlOOMSt_wPOnOkBURuq_OF27zPSvh/view?usp=share_link'
        />
      </div>
      <div className="award__item">
        <AwardItem 
          year='2021'
          title='Curso Design Thinking'
          text='Instituto Europeo de Posgrado - IEP'
          url='https://drive.google.com/file/d/1BqgShpKp0ti7AGI51aF1wan7rG6_sLa1/view?usp=share_link'
        />
      </div>
      <div className="award__item">
        <AwardItem 
          year='2017'
          title='Curso online de "CMS JOOMLA"'
          text='CTIC - UNI'
          url='https://drive.google.com/file/d/1J367JHYgfIlADPsHhxNlObtN8rx7uGpW/view?usp=share_link'
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
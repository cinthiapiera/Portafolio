import React from 'react';
import './Skills.css';

const hardSkills = [
  {
    title: 'HTML5',
    percentage: '70%',
  },
  {
    title: 'CSS3',
    percentage: '70%',
  },
  {
    title: 'JavaScript',
    percentage: '65%',
  },
  {
    title: 'React',
    percentage: '65%',
  },
  {
    title: 'Redux',
    percentage: '60%',
  },
  {
    title: 'Node.js',
    percentage: '60%',
  },
  {
    title: 'Express',
    percentage: '65%',
  },
  {
    title: 'Sequelize (ORM)',
    percentage: '65%',
  },
  {
    title: 'Java POO',
    percentage: '45%',
  },
  {
    title: 'Spring Boot',
    percentage: '40%',
  },
  {
    title: 'PostgreSQL',
    percentage: '50%',
  },
  {
    title: 'MySQL',
    percentage: '40%',
  },
  {
    title: 'H2',
    percentage: '50%',
  },
  {
    title: 'Git',
    percentage: '50%',
  },
  {
    title: 'Github',
    percentage: '50%',
  },
  {
    title: 'Eclipse',
    percentage: '50%',
  },
  {
    title: 'IntelliJ IDEA',
    percentage: '50%',
  },
  {
    title: 'Visual Studio Code',
    percentage: '50%',
  }
]

const softSkills = [
  {
    title: 'Puntualidad',
    percentage: '90%',
  },
  {
    title: 'Confianza',
    percentage: '85%',
  },
  {
    title: 'Organización',
    percentage: '90%',
  },
  {
    title: 'Empatía',
    percentage: '85%',
  },
  {
    title: 'Sociable',
    percentage: '85%',
  },
  {
    title: 'Trabajo en equipo',
    percentage: '90%',
  },
  {
    title: 'Comunicación',
    percentage: '90%',
  },
  {
    title: 'Proactiva',
    percentage: '85%',
  },
  {
    title: 'Liderazgo',
    percentage: '85%',
  },
  {
    title: 'Creatividad',
    percentage: '90%',
  } 
]

const Skills = () => {
  return (
    <div className="skills__wrapper d-flex gap-5">
      <div className="hard__skill w-50">
        <p><i className="ri-user-settings-line"></i> Técnicas</p>
        {
          hardSkills.map((item,index)=>(
            <SkillItem key={index} title={item.title} percentage={item.percentage}/>
          ))
        }
      </div>
      <div className="soft__skill w-50">
      <p><i className="ri-user-heart-line"></i> Blandas</p>
        {
          softSkills.map((item,index)=>(
            <SkillItem key={index} title={item.title} percentage={item.percentage}/>
          ))
        }
      </div>
    </div>
  )
}

const SkillItem = ({title, percentage}) => {
  return(
    <div className="skill__data mb-3">
      <div className="skill__title d-flex align-items-center justify-content-between">
        <h6>{title}</h6>
        {/* <span>{percentage}</span> */}
      </div>
      <div className="skill__bar">
        <span className="skill__bar-percentage" style={{width:`${percentage}`}}></span>
      </div>
    </div>
  )
}

export default Skills;
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
    title: 'React.js',
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
    title: 'Express.js',
    percentage: '65%',
  },
  {
    title: 'Sequelize',
    percentage: '65%',
  },
  {
    title: 'PostgreSQL',
    percentage: '70%',
  }
]

const softSkills = [
  {
    title: 'Liderazgo',
    percentage: '85%',
  },
  {
    title: 'Comunicación',
    percentage: '90%',
  },
  {
    title: 'Trabajo en equipo',
    percentage: '80%',
  },
  {
    title: 'Proactiva',
    percentage: '85%',
  },
  {
    title: 'Organización',
    percentage: '85%',
  },
  {
    title: 'Creatividad',
    percentage: '85%',
  },
  {
    title: 'Puntualiadad',
    percentage: '90%',
  },
  {
    title: 'Empatía',
    percentage: '85%',
  },
  {
    title: 'Sociable',
    percentage: '85%',
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
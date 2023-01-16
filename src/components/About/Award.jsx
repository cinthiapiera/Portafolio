import React from 'react';
import './Award.css';

const Award = () => {
  return (
    <div className="award__container d-flex align_items_center flex-wrap">
      <div className="award__item">
        <AwardItem 
          year='2020'
          title='Best Frontend Developer'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        />
        <div className="award__item">
        <AwardItem 
          year='2020'
          title='Best Frontend Developer'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        />
      </div>
      <div className="award__item">
        <AwardItem 
          year='2020'
          title='Best Frontend Developer'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        />
      </div>
      <div className="award__item">
        <AwardItem 
          year='2020'
          title='Best Frontend Developer'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        />
      </div>
      </div>
    </div>
  )
}

const AwardItem = ({year, title, text}) => {
  return(
    <div className="single__award">
      <div className="award__year">{year}</div>
      <h6 className="award__title">
        {title} -  {" "}
        <span>
          {text}
        </span>
      </h6>
    </div>
  )
}

export default Award
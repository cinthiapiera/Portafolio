import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className="table-responsive">
      <table className='table'>
        <thead>
            <tr>
              <th>Grado</th>
              <th>Tiempo</th>
              <th>Entidad</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td>Java Developer</td>
            <td>En Formación</td>
            <td>Oracle Next Education - Alura Latam</td>
          </tr>
          <tr>
            <td>Full Stack Web Developer</td>
            <td>700 Horas</td>
            <td>Henry Bootcamp</td>
          </tr>
          <tr>
            <td>Ingeniería Informática</td>
            <td>175 Créditos</td>
            <td>Universidad Peruana Cayetano Heredia</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Education;
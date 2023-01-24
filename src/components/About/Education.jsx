import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <table className='table'>
        <thead>
            <tr>
                <th>Grado</th>
                <th>Creditos/horas</th>
                <th>Universidad/Instituto</th>
                <th>Año</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>En Formación</td>
                <td>Developer</td>
                <td>Oracle Next Education - Alura, LATAM</td>
                <td>2023 - presente</td>
            </tr>
            <tr>
                <td>Full Stack Web Developer</td>
                <td>700 H</td>
                <td>Henry Bootcamp</td>
                <td>2022 - 2023</td>
            </tr>
            <tr>
                <td>Ingeniería Informática</td>
                <td>250 C.A</td>
                <td>Universidad Peruana Cayetano Heredia (UPCH)</td>
                <td>2015 - 2020</td>
            </tr>
        </tbody>
    </table>
  )
}

export default Education
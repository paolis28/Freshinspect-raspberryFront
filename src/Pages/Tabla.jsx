import React from 'react';
import '../assets/Tabla.css';

const Tabla = ({ titulo, data }) => {
  return (
    <div className="tabla-container">
      <h2>{titulo}</h2>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Temperatura</th>
            <th>Humedad</th>
            <th>Peso</th>
            <th>Probabilidad</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>{item.temperature}</td>
              <td>{item.humidity}</td>
              <td>{item.weight}</td>
              <td>{item.probabilidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;

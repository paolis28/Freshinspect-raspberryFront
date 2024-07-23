import React, { useEffect, useRef } from 'react';
import Legend from '../Pages/LegendComponent.jsx';
import '../assets/graficaCirculo.css';
import Navbar from '../Pages/Navbar.jsx';

const Graficacircular = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const data = [25, 62.5, 12.5];
    const colors = ['#00FF00', '#FFFF00', '#000000']; // Verde, Amarillo, Negro
    const labels = ['Verdes', 'Maduros', 'Pasados'];

    const total = data.reduce((acc, val) => acc + val, 0);
    let startAngle = 0;

    data.forEach((value, index) => {
      const sliceAngle = (value / total) * 2 * Math.PI;
      ctx.beginPath();
      ctx.moveTo(150, 150);
      ctx.arc(150, 150, 150, startAngle, startAngle + sliceAngle);
      ctx.closePath();
      ctx.fillStyle = colors[index];
      ctx.fill();

      // Definir el color del texto basado en el color del segmento
      let textColor;
      switch (colors[index]) {
        case '#FFFF00': // Amarillo
          textColor = 'black';
          break;
        case '#000000': // Negro
          textColor = 'white';
          break;
        case '#00FF00': // Verde
          textColor = 'black';
          break;
        default:
          textColor = 'black'; // Por defecto, usa negro
      }

      // Dibujar las etiquetas
      const labelX = 150 + (150 / 2) * Math.cos(startAngle + sliceAngle / 2);
      const labelY = 150 + (150 / 2) * Math.sin(startAngle + sliceAngle / 2);

      ctx.fillStyle = textColor;
      ctx.font = 'bold 16px Arial';
      ctx.fillText(`${value}%`, labelX - 10, labelY + 5);

      startAngle += sliceAngle;
    });
  }, []);

  const legendItems = [
    { color: '#00FF00', label: 'Verdes' },
    { color: '#FFFF00', label: 'Maduros' },
    { color: '#000000', label: 'Pasados' },
  ];

  return (
    <><Navbar/>
    <div className="canvas-pie-chart-wrapper">
      <canvas ref={canvasRef} width="300" height="300"></canvas>
      <Legend items={legendItems} />
    </div></>
  );
};

export default Graficacircular;

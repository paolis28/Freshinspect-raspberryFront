import React, { useRef, useState } from 'react';
import Navbar from '../Pages/Navbar.jsx';
import Tabla from './Tabla.jsx';
import '../assets/monitoreo.css';

const Monitoreo = () => {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);

  const handleStartCamera = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setStream(stream);
      })
      .catch((err) => {
        console.error("Error accessing camera: ", err);
      });
  };

  const handleStopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setStream(null);
    }
  };

  const datosVerdes = [
    { date: '2024-07-20', time: '10:00', temperature: 25, humidity: 60, weight: '30 gr', probabilidad: "3%" },
    { date: '2024-07-21', time: '11:00', temperature: 26, humidity: 62, weight: '32 gr', probabilidad: "5%" },
  ];

  const datosMaduros = [
    { date: '2024-07-20', time: '10:00', temperature: 28, humidity: 65, weight: '35 gr', probabilidad: "30%" },
    { date: '2024-07-21', time: '11:00', temperature: 29, humidity: 67, weight: '36 gr', probabilidad: "1%" },
  ];

  return (
    <div>
      <Navbar />
      <div className="monitoreo">
        <button onClick={handleStartCamera}>Ver</button>
        <button onClick={handleStopCamera}>Detener</button>
        <video ref={videoRef} style={{ width: '100%', height: 'auto' }} autoPlay></video>
      </div>
      <Tabla titulo="Verdes" data={datosVerdes} />
      <Tabla titulo="Maduros" data={datosMaduros} />
    </div>
  );
};

export default Monitoreo;

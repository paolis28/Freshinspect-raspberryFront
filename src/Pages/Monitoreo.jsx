import { useRef, useState,useEffect } from 'react';
import Navbar from './Navbar';
import '../assets/monitoreo.css';
import io from "socket.io-client";
import axios from "axios";
import moment from 'moment-timezone';

const Monitoreo = () => {
  const [verdesData, setVerdesData] = useState([]);
  const [madurosData, setMadurosData] = useState([]);

  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);

  const getAllMonitorings = async() => {
    try {
      const date = getDate();
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: token,
        }
      };
      const url = `http://localhost:3000/monitorings/${date}`
      const response = await axios.get(url, config);
      const monitoringsData = response.data.data;

      const maduros = monitoringsData.filter(item => item.box === "Maduros");
      const verdes = monitoringsData.filter(item => item.box === "Verdes");

      setMadurosData(maduros);
      setVerdesData(verdes);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const getDate = () => {
    const timezone = 'America/Mexico_City';
    return moment().tz(timezone).format('YYYY-MM-DD');
  };

  useEffect(() => {
    getAllMonitorings();

    const socket = io("http://localhost:3001");

    socket.on("monitorings", (data) => {
      console.log(data);
      if (data.box === "Maduros") {
        console.log("añadido");
        setMadurosData(prevData => [...prevData, data]);
      } else if (data.box === "Verdes") {
        setVerdesData(prevData => [...prevData, data]);
      }
    });

    return () => {
      socket.disconnect();
    };
  }, []);

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

  const formatData = (data) => {
    return data.map(item => {
      return `Date: ${item.date}:${item.time}, Temperature: ${item.temperature}, Humidity: ${item.humidity}, Weight: ${item.weight}`;
    }).join('\n');
  };

  return (
    <div>
      <Navbar />
      <div className="monitoreo">
        <button onClick={handleStartCamera}>Ver</button>
        <button onClick={handleStopCamera}>Detener</button>
        <video ref={videoRef} style={{ width: '100%', height: 'auto' }} autoPlay></video>
      </div>
      <div className='tablas'>
        <div className='tablaMonitoreo'>
          <h1>Maduros</h1>
          <textarea className='inputTabla' readOnly value={formatData(madurosData)} />
        </div>
        <div className='tablaMonitoreo'>
          <h1>Verdes</h1>
          <textarea className='inputTabla' readOnly value={formatData(verdesData)} />
        </div>
      </div>
    </div>
  );
};

export default Monitoreo;
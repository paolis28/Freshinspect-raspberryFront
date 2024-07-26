import '../assets/Login.css';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();
  const [body, setBody] = useState({phone_number:'', password: ''})

  const handleChange = ({target}) => {
    const {name, value} = target;
    setBody({
      ...body,
      [name]:value
    });
  }

  const toAccess = async(event) => {
    event.preventDefault();
    try {
      const {phone_number, password} = body;
      const url = `http://localhost:3000/users/${phone_number}/${password}`;
      const response = await axios.get(url);
      if (response.status == 200) {
        alert("Datos correctos");
        navigate("/menu");
      }else if(response.status != 200){
        alert("Número o contraseña incorrecta");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='loginComponent'>
      <div className='datosLogin'>
        <h1>Bienvenido a <span className='highlight'>Fresh-Inspect</span></h1>
        <form onSubmit={toAccess}>
          <div className='inputGroup'>
            <input type='text' placeholder='Número de celular' value={body.phone_number} name='phone_number' onChange={handleChange}/>
          </div>
          <div className='inputGroup'>
            <input type='password' placeholder='Contraseña' value={body.password} name='password' onChange={handleChange}/>
          </div>
          <a href='/contraseniaOlvidada' className='forgotPassword'>¿Olvidaste tu contraseña?</a>
          <button type='submit' className='loginButton'>Iniciar sesión</button>
        </form>
        <a href='/crearUsuario' className='createAccount'>Crear cuenta</a>
      </div>
    </div>
  );
};

export default Login;
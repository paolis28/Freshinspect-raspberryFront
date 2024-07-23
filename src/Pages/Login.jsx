import '../assets/Login.css';
import { useState } from 'react';
// import { useNavigate } from 'react-router';
//import Platanos from '../assets/img/Rectangle.png'; 

const Login = () => {
  // const navigate = useNavigate();
  const [body, setBody] = useState({phone_number:'', password: ''})

  const handleChange = ({target}) => {
    const {name, value} = target;
    setBody({
      ...body,
      [name]:value
    });
  }

  const toAccess = async (event) => {
    event.preventDefault(); // Evita que el formulario se envíe y la página se recargue
    try {
      console.log(body);
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
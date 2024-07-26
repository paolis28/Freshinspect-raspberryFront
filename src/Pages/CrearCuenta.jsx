import { useState } from 'react';
import '../assets/creaCuenta.css';
import axios from "axios";

const CrearCuenta = () => {
  const [body, setBody] = useState({name:'', last_name: '', sur_name: '', phone_number: '', email: '', password: ''});

  const handleChange = ({target}) => {
    const {name, value} = target;
    setBody({
      ...body,
      [name]:value
    });
  }

  const createAccount = async() => {
    event.preventDefault();
    try {
      const url = `http://localhost:3000/users`;
      const response = await axios.post(url, body);
      if (response) {
        alert("Cuenta creada exitosamente");
      }else{
        console.log("No se ha creaod la cuenta");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="contenedorCrear">
      <div className="circulo-superiorCrear"></div>
      <div className="circulo-inferiorCrear"></div>
      <h2>Crear cuenta:</h2>
      <form onSubmit={createAccount}>
      <div className="input-groupCrear">
          <input type="text" placeholder="Nombre" className="inputCrear" 
          value={body.name} name='name' onChange={handleChange}/>
          <input type="text" placeholder="Apellido paterno" className="inputCrear" 
          value={body.last_name} name='last_name' onChange={handleChange}/>
        </div>
        <div className="input-groupCrear">
          <input type="text" placeholder="Apellido materno" className="inputCrear"
          value={body.sur_name} name='sur_name' onChange={handleChange}/>
          <input type="tel" placeholder="Telefóno" className="inputCrear"
          value={body.phone_number} name='phone_number' onChange={handleChange}/>
        </div>
        <div className="input-groupCrear">
          <input type="email" placeholder="Correo" className="inputCrear"
          value={body.email} name='email' onChange={handleChange}/>
          <input type="password" placeholder="Contraseña" className="inputCrear"
          value={body.password} name='password' onChange={handleChange}/>
        </div>

        <button type="submit" className="botonCrear">Crear</button>
      </form>
    </div>
  );
};

export default CrearCuenta;

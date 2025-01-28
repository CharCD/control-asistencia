import React, { useState } from 'react';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import './Login.css';

function FormLogin({ setUser}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username != 'Admin' || password != 'admin'){
      setError(true);
      return;
    }
    setError(false);
    setUser([username]);
  }

  return (

    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      <FloatLabel>
        <InputText id="username" value={username} onChange={e => setUsername(e.target.value)} />
        <label htmlFor="username">Nombre de usuario</label>
      </FloatLabel>
      <FloatLabel>
        <Password id='password' value={password} onChange={e => setPassword(e.target.value)} feedback={false}  />
        <label htmlFor="password" >Contraseña</label>
      </FloatLabel>
      <Button label="Entrar" className="p-button-success" type="submit" />
      {error && <p className="error-message">Nombre de usuario o contraseña incorrectos</p> }
    </form>
  );
}



export default FormLogin;

import React, { useState } from 'react';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import './Login.css';

function FormLogin({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setErrorMessage('');

    try {
      const response = await fetch('https://eroi.com.mx/pro/index.php?r=api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!data.auth) {
        // Si la autenticación falla, mostrar el mensaje de error de la API
        setError(true);
        setErrorMessage(data.message);
        return;
      }

      // Si la autenticación es exitosa, actualizar el estado del usuario
      setUser([username]); // Puedes ajustar esto según lo que devuelva la API
    } catch (error) {
      setError(true);
      setErrorMessage('Error de conexión con el servidor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      <FloatLabel>
        <InputText id="username" value={username} onChange={e => setUsername(e.target.value)} />
        <label htmlFor="username">Nombre de usuario</label>
      </FloatLabel>
      <FloatLabel>
        <Password id='password' value={password} onChange={e => setPassword(e.target.value)} feedback={false} />
        <label htmlFor="password">Contraseña</label>
      </FloatLabel>
      <Button label="Entrar" className="p-button-success" type="submit" disabled={loading} />
      {loading && <p>Cargando...</p>}
      {error && <p className="error-message">{errorMessage}</p>}
    </form>
  );
}

export default FormLogin;
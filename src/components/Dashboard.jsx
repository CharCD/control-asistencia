import React from 'react';
import './Dashboard.css';
import { Button } from 'primereact/button';

function Dashboard({ user, setUser }) {
  const handleLogout = () => {
    setUser([]);
  }
  return (
    <div className="dashboard-container">
      <h1>Bienvenido a tu Dashboard, {user}</h1>
      <Button onClick={handleLogout}>Cerrar Sesión</Button>
    </div>
  );
}

export default Dashboard;
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { 
  LogIn,
  Feed,
  LogBookForm,
  Dashboard,
  UserProfile,
  Recomendations
} from './routes';

import {
  Topbar
} from './components'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Comprueba si hay un estado de inicio de sesión almacenado en el almacenamiento local
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    // Realiza la lógica de inicio de sesión exitosa
    setIsLoggedIn(true);
    // Almacena el estado de inicio de sesión en el almacenamiento local
    localStorage.setItem('isLoggedIn', 'true');
  };

  return (
    <BrowserRouter>
      <div>
        <Topbar isLoggedIn={isLoggedIn} />
        
        <Routes>
          <Route
            path="/login"
            element={<LogIn onLogin={handleLogin} />}
          />
          <Route
            path="/"
            element={isLoggedIn ? <Feed /> : <Navigate to="/login" />}
          />
          <Route path="/logbookform" element={<LogBookForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/business_wizard" element={<Recomendations />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;


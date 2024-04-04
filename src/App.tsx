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
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    const currentPath = window.location.pathname;

    if (currentPath != '/login'){
      setIsLoggedIn(true);
    }

    // Establecer isLoggedIn como true solo si el usuario está en la página de login
    if (loggedInStatus === 'true' && currentPath === '/login') {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  return (
    <BrowserRouter>
      <div>
        <Topbar isLoggedIn={isLoggedIn} />
        
        <Routes>
          <Route
            path="/login"
            element={
              <LogIn
                onLogin={() => {
                  handleLogin();
                }}
              />
            }
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

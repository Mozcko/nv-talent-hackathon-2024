import { useState, useEffect } from 'react';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { coppel_emprende } from '../assets';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader'; // Importa el componente Loader

const LogIn = ({ onLogin }) => {
  const [creatingAccount, setCreatingAccount] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleToggleCreateAccount = () => {
    setCreatingAccount(!creatingAccount);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
      navigate('/');
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Por favor, complete todos los campos");
      return;
    }

    if (creatingAccount && password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    handleLogin();
  };

  return (
    <div className="mt-10 flex justify-center">
      {isLoading && <Loader />} {/* Renderiza el componente Loader si isLoading es true */}
      <form onSubmit={handleSubmit} className={`flex max-w-md flex-col gap-4 bg-white-200 p-10 shadow-2xl ${isLoading ? 'opacity-50 pointer-events-none' : ''}`}>
        <div className="mt-2 flex justify-center items-center gap-2">
          <FaFacebook size={24} className="text-blue-700 cursor-pointer" onClick={handleLogin} />
          <FaGoogle size={24} className="text-red-600 cursor-pointer" onClick={handleLogin} />
          <img src={coppel_emprende} alt="Iniciar sesión con Coppel Emprende" className="cursor-pointer w-7 h-7 rounded-full" onClick={handleLogin} />
        </div>
        <div>
          <div className="mb-2 block text-black-100">
            <Label htmlFor="email1" value="Correo:" />
          </div>
          <TextInput id="email1" type="email" value={email} onChange={handleEmailChange} placeholder="ejemplo@dominio.com" required />
        </div>
        <div>
          <div className="mb-2 block text-black-100">
            <Label htmlFor="password1" value="Contraseña" />
          </div>
          <TextInput id="password1" type="password" value={password} onChange={handlePasswordChange} required />
        </div>
        {creatingAccount && (
          <div>
            <div className="mb-2 block text-black-100">
              <Label htmlFor="confirmPassword" value="Confirmar Contraseña" />
            </div>
            <TextInput id="confirmPassword" type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
          </div>
        )}
        {!creatingAccount && (
          <div className="flex items-center gap-2">
            <Checkbox id="remember" className="bg-white-100 accent-accent" />
            <Label htmlFor="remember" className="text-black-100">Recordarme</Label>
          </div>
        )}
        <Button type="submit" className="bg-primary text-white-100 hover:bg-accent-200">Enviar</Button>
        {!creatingAccount && (
          <div className="mt-2 flex justify-center items-center gap-2">
            <span className="text-accent-100 cursor-pointer" onClick={handleToggleCreateAccount}>
              ¿No tienes una cuenta? Crear una
            </span>
          </div>
        )}
      </form>
    </div>
  );
};

export default LogIn;

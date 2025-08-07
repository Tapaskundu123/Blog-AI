import React from 'react';
import LogoImg from '../assets/logo.svg';
import arrowImg from '../assets/arrow.svg';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { token } = useAppContext();

  return (
    <div className="flex justify-between items-center px-4 py-4 sm:px-16 border-b border-b-gray-400">
      <img
        src={LogoImg}
        alt="Logo"
        onClick={() => navigate('/')}
        className="h-8 sm:h-10 cursor-pointer"
      />
      <button
        className="bg-primary text-white px-6 py-3 rounded-3xl flex items-center"
        onClick={() => navigate(token ? '/Admin' : '/Login')}
      >
        <p className="pl-2">{token ? 'Dashboard' : 'Login'}</p>
        <img src={arrowImg} alt="Arrow" className="pl-2" />
      </button>
    </div>
  );
};

export default Navbar;

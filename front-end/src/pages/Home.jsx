import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import { getLocalStorage } from '../service/serviceLocalStorage';

export default function Home() {
  const navigate = useNavigate();

  const selectRender = () => {
      return (
        <div className="min-h-screen bg-slate-500">
          <Header />
          <h1>Home</h1>
        </div>
      );
  };

  useEffect(() => {
    const dataApi = getLocalStorage('Token');
  
    if (!dataApi) {
      navigate('/login');
    }
}, []);

  return selectRender();
}
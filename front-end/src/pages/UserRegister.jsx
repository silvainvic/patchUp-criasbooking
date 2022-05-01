import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { setLocalStorage } from '../service/serviceLocalStorage';
import { fetchRegister } from '../service/fetchApi';
import Forms from '../components/Forms';
import { getLocalStorage } from '../service/serviceLocalStorage';

import imgLogo from '../img/criasbookingimg.png';
import Footer from '../components/Footer';

export default function UserRegister() {
  const [registerState, setRegisterState] = useState('');
  const history = useLocation();
  const navigate = useNavigate();

  const getDataForm = async (event, data) => {
    setRegisterState();
    event.preventDefault();

    const { registerInputName, registerInputEmail, registerInputPassword } =
      data;
    const dataFetchApi = await fetchRegister(
      registerInputName,
      registerInputEmail,
      registerInputPassword
    );

    if (dataFetchApi.token) {
      setRegisterState(dataFetchApi.message);
      setLocalStorage('Token', dataFetchApi.token);
    }
    if (dataFetchApi.length === 1) {
      setRegisterState(dataFetchApi[0]);
    }
  };

  useEffect(() => {
    const dataApi = getLocalStorage('Token');

    if (dataApi) {
      navigate('/');
    }
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div id="div-img-login">
          <img src={imgLogo} alt="imagem-logo-criasbooking" />
        </div>
        <Forms history={history.pathname} getDataForm={getDataForm} />
        {registerState && <h1>{registerState}</h1>}
      </div>
      <Footer />
    </>
  );
}

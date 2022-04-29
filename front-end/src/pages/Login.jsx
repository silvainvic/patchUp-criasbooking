import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Forms from '../components/Forms';
import Footer from '../components/Footer';

import { setLocalStorage } from '../service/serviceLocalStorage';
import { fetchLogin } from '../service/fetchApi';
import { getLocalStorage } from '../service/serviceLocalStorage';

import imgLogo from '../img/criasbookingimg.png';

export default function Login() {
  const navigate = useNavigate();
  const history = useLocation();

  const getDataForm = async (event, data) => {
    event.preventDefault();

    const { email, password } = data;
    const dataFetchApi = await fetchLogin(email, password);

    if (dataFetchApi.token) {
      setLocalStorage('Token', dataFetchApi.token);
    } else {
      alert('Usuário ou senha incorretos');
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
      <div
        id="div-main-login"
        className="
        min-h-screen w-full
        bg-white
        but
        flex flex-col
        items-center
        justify-center
        space-y-6
    "
      >
        <div id="div-img-login">
          <img src={imgLogo} alt="imagem-logo-criasbooking" />
        </div>
        <main
          id="main-login"
          className="
          bg-green-500
          w-1/2 h-72
          flex flex-col items-center justify-center
      "
        >
          <div
            id="div-form-login"
            className="
          flex flex-col items-center justify-center space-y-12
          w-full
          h-full"
          >
            <Forms history={history.pathname} getDataForm={getDataForm} />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

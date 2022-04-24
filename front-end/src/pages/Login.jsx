import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Forms from "../components/Forms";
import { setLocalStorage } from "../service/serviceLocalStorage";
import { fetchLogin } from "../service/fetchApi";
import { getLocalStorage } from "../service/serviceLocalStorage";

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
    <div>
      <h1>Login</h1>
      <div>
        <Forms history={history.pathname} getDataForm={getDataForm} />
        <button onClick={() => navigate("/userRegister")}>Cadastre-se</button>
      </div>
    </div>
  );
}
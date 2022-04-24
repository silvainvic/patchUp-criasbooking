import React from "react";
import { useLocation } from "react-router-dom";

import Forms from "../components/Forms";
import { setLocalStorage } from "../service/serviceLocalStorage";
import { fetchLogin } from "../service/fetchApi";

export default function Login() {
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

  return (
    <div>
      <h1>Login</h1>
      <div>
        <Forms history={history.pathname} getDataForm={getDataForm} />
      </div>
    </div>
  );
}
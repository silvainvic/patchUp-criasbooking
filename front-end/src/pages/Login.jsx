import React from "react";
import { useLocation } from "react-router-dom";

import Forms from "../components/Forms";
import { setLocalStorage } from "../service/serviceLocalStorage";

export default function Login() {
  const history = useLocation();

  const getDataForm = (event, data) => {
    event.preventDefault();
    const { email, password } = data;

    const URL_CRIAS = 'http://localhost:3001/login';

    fetch(URL_CRIAS, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => {
        return response.json()
      })
      .then((token) => {
        // console.log('Dentro do segundo "then" no arquivo "/pages/Login.jsx" ', token);
        setLocalStorage('Token', token);
      });
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
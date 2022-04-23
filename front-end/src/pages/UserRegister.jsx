import React from "react";
import { useLocation } from "react-router-dom";

import { setLocalStorage } from "../service/serviceLocalStorage";
import Forms from "../components/Forms";

export default function UserRegister() {
  const history = useLocation();

  const getDataForm = (event, data) => {
    event.preventDefault();
    const { registerInputName, registerInputEmail, registerInputPassword } = data;

    const URL_CRIAS = 'http://localhost:3001/register';

    fetch(URL_CRIAS, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: registerInputName,
        email: registerInputEmail,
        password: registerInputPassword,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((d) => {
        console.log('Dentro do segundo "then" no arquivo "/pages/UserRegister.jsx" ', d);
        setLocalStorage('Message', d);
      });
  };

  return (
      <div>
      <h1>UserRegister</h1>
      <Forms history={ history.pathname } getDataForm={ getDataForm }/>
      </div>
  );
}
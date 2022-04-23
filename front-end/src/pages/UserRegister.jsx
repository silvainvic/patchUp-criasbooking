import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Forms from "../components/Forms";

export default function UserRegister() {
  const history = useLocation();
  const [dataForm, setDataForm] = useState({});

  const getDataForm = (event) => {
    const { registerInputName, registerInputEmail, registerInputPassword } = event;

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
        return response.json()
      })
      .then((data) => {
        console.log('Dentro do then: ', data);
        setDataForm(JSON.parse(data));
      });
  };

  return (
      <div>
      <h1>UserRegister</h1>
      <Forms history={ history.pathname } getDataForm={ getDataForm }/>
      <h2>Retorno da API: { console.log(dataForm) }</h2>
      </div>
  );
}
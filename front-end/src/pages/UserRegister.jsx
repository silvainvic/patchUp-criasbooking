import React from "react";
import { useLocation } from "react-router-dom";

import Forms from "../components/Forms";

import setLocalStorage from "../service";

export default function UserRegister() {
  const history = useLocation();

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
        // console.log(data); //{ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc0Bhc2RmLmNvbSIsImlhdCI6MTY1MDQ5MjU0NSwiZXhwIjoxNjUwNTc4OTQ1fQ.T-D4haOVJNW7lejUJ6iLyxF7dXDDXnG8KzY4bNUXmrU" }
        setLocalStorage('token', data);
      });
  };

  return (
      <div>
      <h1>UserRegister</h1>
      <Forms history={ history.pathname } getDataForm={ getDataForm }/>
      </div>
  );
}
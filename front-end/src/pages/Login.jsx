import React from "react";
import { useLocation } from "react-router-dom";

import Forms from "../components/Forms";
// import setLocalStorage from "../service";

export default function Login() {
  const history = useLocation();

  const getDataForm = (event) => {
    // const { email, password } = event;

    // const URL_CRIAS = 'http://localhost:3001/login';

    // fetch(URL_CRIAS, {
    //   method: "POST",
    //   mode: "cors",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email,
    //     password,
    //   }),
    // })
    //   .then((response) => {
    //     return response.json()
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     // setLocalStorage(data);
    //   });
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <Forms history={ history.pathname } getDataForm={ getDataForm }/>
      </div>  
    </div>
  );
}
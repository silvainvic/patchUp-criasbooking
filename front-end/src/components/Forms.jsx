import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Forms({ history, getDataForm }) {
  const [dataForm, setDataForm] = useState({});
  const navigate = useNavigate()

  const handleChange = ({ target }) => {
    setDataForm({
      ...dataForm,
      [target.name]: target.value,
    });
  };

  const selectForm = (pathname) => {
    switch (pathname) {
      case "/login":
        return (
          <form className="flex flex-col space-y-2" onSubmit={ (event) => getDataForm(event, dataForm) }>
            <label htmlFor="registerEmail">
              Email:
            </label>
            <input id="registerEmail" name="email" type="email" onChange={ handleChange } placeholder="Digite seu email" />
            <label htmlFor="registerPassword">
              Password:
            </label>
            <input id="registerPassword" name="password" type="password" onChange={ handleChange } placeholder="Digite sua senha" />
            <div id="id-button-form-login" className="flex justify-center space-x-12">
              <input type="submit" value="Enter" />
              <button onClick={() => navigate("/userRegister")}>Cadastre-se</button>
            </div>
          </form>
        );
       default:
        return (
          <form onSubmit={ (event) => getDataForm(event, dataForm) }>
            <label htmlFor="registerName">
              Name:
              <input id="registerName" name="registerInputName" type="text" onChange={ handleChange } placeholder="Digite seu nome completo" />
            </label>
            <label htmlFor="registerEmail">
              Email:
              <input id="registerEmail" name="registerInputEmail" type="email" onChange={ handleChange } placeholder="Digite seu email" />
            </label>
            <label htmlFor="registerPassword">
              Password:
              <input id="registerPassword" name="registerInputPassword" type="password" onChange={ handleChange } placeholder="Digite sua senha" />
             </label>
              <input type="submit" value="Cadastrar" />
          </form>
        );
    };
  };

  return (
    <div>
      { selectForm(history) }
    </div>
  );
}
import React, { useState } from "react";

export default function Forms({ history, getDataForm }) {
  const [dataForm, setDataForm] = useState({});

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
          <form>
            <label htmlFor="registerEmail">
              Email:
              <input id="registerEmail" name="email" type="email" onChange={ handleChange } placeholder="Digite seu email" />
            </label>
            <label htmlFor="registerPassword">
              Password:
              <input id="registerPassword" name="password" type="password" onChange={ handleChange } placeholder="Digite sua senha" />
            </label>
            <button type="button" onClick={ () => getDataForm(dataForm) }>Entrar</button>
          </form>
        );
       default:
        return (
          <form>
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
              <button type="button" onClick={ () => getDataForm(dataForm) }>Cadastrar</button>
          </form>
        );
    };
  };

  return (
    <form>
      { selectForm(history) }
    </form>
  );
}
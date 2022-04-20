import React from "react";

export default function Forms({ history }) {
  const selectForm = (pathname) => {
    switch (pathname) {
      case "/login":
        return (
          <div>
            <form >
              <label htmlFor="registerEmail">
                Email:
                <input id="registerEmail" type="email" placeholder="Digite seu email" />
              </label>
              <label htmlFor="registerPassword">
                Password:
                <input id="registerPassword" type="password" placeholder="Digite sua senha" />
               </label>
            </form>
          </div>
        );
       default:
        return (
          <div>
            <form >
              <label htmlFor="registerName">
                Name:
                <input id="registerName" type="text" placeholder="Digite seu nome completo" />
              </label>
              <label htmlFor="registerEmail">
                Email:
                <input id="registerEmail" type="email" placeholder="Digite seu email" />
              </label>
              <label htmlFor="registerPassword">
                Password:
                <input id="registerPassword" type="password" placeholder="Digite sua senha" />
               </label>
            </form>
          </div>
        );
    };
  };

  return (
    <form>
      { selectForm(history) }
    </form>
  );
}
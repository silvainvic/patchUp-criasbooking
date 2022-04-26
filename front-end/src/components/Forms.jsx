import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Forms({ history, getDataForm }) {
  const [dataForm, setDataForm] = useState({});
  const navigate = useNavigate();

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
          <form
            className="flex flex-col space-y-2"
            onSubmit={(event) => getDataForm(event, dataForm)}
          >
            <label htmlFor="registerEmail">Email:</label>
            <input
              id="registerEmail"
              name="email"
              type="email"
              onChange={handleChange}
              placeholder="Digite seu email"
            />
            <label htmlFor="registerPassword">Password:</label>
            <input
              id="registerPassword"
              name="password"
              type="password"
              onChange={handleChange}
              placeholder="Digite sua senha"
            />
            <div
              id="id-button-form-login"
              className="flex justify-center space-x-12"
            >
              <input
                class="
                bg-green-900
                hover:bg-purple-900
                text-white
                font-semibold
                hover:text-white
                py-2 px-4 border
                border-white-500
                hover:border-transparent
                rounded"
                type="submit"
                value="Enter"
              />
              <button
                class="
                  bg-green-900
                  hover:bg-purple-900
                  text-white
                  font-semibold
                  hover:text-white
                  py-2 px-4 border
                  border-white-500
                  hover:border-transparent
                  rounded"
                onClick={() => navigate("/userRegister")}
              >
                Cadastre-se
              </button>
            </div>
          </form>
        );
      default:
        return (
          <div className="w-screen flex justify-center">
            <div className="md:w-full w-1/2 p-10 shadow-2xl bg-gray-50">
              <form
                onSubmit={(event) => getDataForm(event, dataForm)}
                // className="md:w-full w-1/2 p-10 shadow-2xl bg-gray-50"
              >
                <label htmlFor="registerName">
                  Name:
                  <input
                    id="registerName"
                    name="registerInputName"
                    type="text"
                    onChange={handleChange}
                    className="w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5"
                    placeholder="Digite seu nome completo"
                  />
                </label>
                <label htmlFor="registerEmail">
                  Email:
                  <input
                    id="registerEmail"
                    name="registerInputEmail"
                    type="email"
                    onChange={handleChange}
                    className="w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5"
                    placeholder="Digite seu email"
                  />
                </label>
                <label htmlFor="registerPassword">
                  Password:
                  <input
                    id="registerPassword"
                    name="registerInputPassword"
                    type="password"
                    onChange={handleChange}
                    className="w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5"
                    placeholder="Digite sua senha"
                  />
                </label>
                <input
                  type="submit"
                  // className="bg-red-500 rounded text-white px-5 py-1 mt-3"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 mt-3 rounded"
                  value="Cadastrar"
                />
              </form>
            </div>
          </div>
        );
    }
  };

  return <div>{selectForm(history)}</div>;
}

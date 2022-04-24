import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { setLocalStorage } from "../service/serviceLocalStorage";
import { fetchRegister } from "../service/fetchApi";
import Forms from "../components/Forms";
import { getLocalStorage } from "../service/serviceLocalStorage";

export default function UserRegister() {
  const [registerState, setRegisterState] = useState('');
  const history = useLocation();
  const navigate = useNavigate();

  const getDataForm = async (event, data) => {
    setRegisterState();
    event.preventDefault();

    const { registerInputName, registerInputEmail, registerInputPassword } = data;
    const dataFetchApi = await fetchRegister(registerInputName, registerInputEmail, registerInputPassword);
    
    if (dataFetchApi.length > 1) {
      setRegisterState(dataFetchApi[0]);
      setLocalStorage('Token', dataFetchApi[1]);
    }
    if (dataFetchApi.length === 1) {
      setRegisterState(dataFetchApi[0]);
    }
  };

  useEffect(() => {
    const dataApi = getLocalStorage('Token');
  
    if (dataApi) {
      navigate('/');
    }
}, []);

  return (
      <div>
      <h1>UserRegister</h1>
      <Forms history={ history.pathname } getDataForm={ getDataForm }/>
      { registerState && <h1>{ registerState }</h1> }
      </div>
  );
}
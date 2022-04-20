import React from "react";
import { useLocation } from "react-router-dom";
import Forms from "../components/Forms";

export default function Login() {
  const history = useLocation();

  return (
    <div>
      <h1>Login</h1>
      <div>
        <Forms history={ history.pathname }/>
      </div>  
    </div>
  );
}
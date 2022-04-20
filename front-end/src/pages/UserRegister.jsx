import React from "react";
import { useLocation } from "react-router-dom";
import Forms from "../components/Forms";

export default function UserRegister() {
  const history = useLocation();

  return (
      <div>
      <h1>UserRegister</h1>
      <Forms history={ history.pathname }/>
      </div>
  );
}
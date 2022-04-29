import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div id="main-div-notFound">
      <div id="message-div-notFound">
          <h1>Ops! "Algo de errado não está certo"</h1>
          <h2>Página não encontrada</h2>
      </div>
      <div id="button-return-notFound">
        <button onClick={ () => navigate('/') }>Voltar para Home</button>
      </div>
    </div>
  );
}
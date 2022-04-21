import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
          <h1>Ops! "Algo de errado não está certo"</h1>
          <h2>Página não encontrada</h2>
      </div>
      <div>
        <button onClick={ () => navigate('/') }>Voltar para Home</button>
      </div>
    </div>
  );
}
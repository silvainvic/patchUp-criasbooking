import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div id="main-div-notFound"
      className="
        w-full h-screen
        flex flex-col items-center justify-center
        bg-green-400
        text-red-700 text-4xl
        space-y-8"
    >
      <div id="message-div-notFound"
        className="flex flex-col items-center justify-center"
      >
          <h1>Ops! "Algo de errado não está certo"</h1>
          <h2>Página não encontrada</h2>
      </div>
      <div id="button-return-notFound"
        class="
        bg-green-900
        hover:bg-white
        text-white hover:text-green-500
        font-semibold
        py-2 px-4 border
        border-white-500 hover:border-black
        hover:border-transparent
        rounded"
      >
        <button onClick={ () => navigate('/') }>Voltar</button>
      </div>
    </div>
  );
}
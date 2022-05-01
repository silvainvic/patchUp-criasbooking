import React from "react";

export default function IntroHome() {
  return (
      <div className="flex flex-col items-center">
        <p>
          <h1
            className="
              pt-2
              text-4xl
              font-bold
              text-yellow-600"
          >
            Pesquise ofertas de hotéis e pousadas
          </h1>
        </p>
        <p>
          <h3
            className="
              text-xl
              text-gray-600"
          >
            O CriasBooking ajuda você a encontrar hotéis baratos, pousadas, resorts e muito mais.
          </h3>
        </p>
        <p>
          <h3
            className="
              text-xl
              text-gray-600"
          >
            Planeje sua viagem de forma rápida e fácil.
          </h3>
        </p>
      </div>
  );
}
import React from "react";

import { removeLocalStorage } from "../service/serviceLocalStorage";
import criasbooking2 from '../img/criasbooking2.png';
import Search from "./Search";

export default function Header() {
  return (
    <header
      className="
        bg-colorCriasBooking
        flex justify-between items-center
        h-20 w-full
        pr-10"
      >
      <div>
        <img className="h-20" src={criasbooking2} alt="" />
      </div>
      <div>
       <Search />
      </div>
      <div>
        <button
          type="button"
          className="btn btn-outline btn-accent"
          onClick={ () => removeLocalStorage('Token') }
        >
          Sair
        </button>
      </div>
    </header>
  );
}
import React from "react";

import { removeLocalStorage } from "../service/serviceLocalStorage";

export default function Header() {
  return (
    <header className="flex bg-blue-700 w-11 min-h-full ">
      <div>
        <h1>Header 01</h1>
      </div>
      <div>
        <h1>Header 02</h1>
      </div>
      <div>
        <h1>Header 03</h1>
      </div>
      <div>
        <button type="button" onClick={ () => removeLocalStorage('Token') } >Sair</button>
      </div>
    </header>
  );
}
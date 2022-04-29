import React from "react";

export default function Search() {
  return (
    <div>
      <input
        type="text"
        placeholder="Pesquise: Cidade - Estado - Hotel"
        className="input input-bordered input-warning w-full max-w-xs"
      />
    </div>
  );
}
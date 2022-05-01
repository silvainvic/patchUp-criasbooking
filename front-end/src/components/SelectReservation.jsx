import React, { useState }  from "react";

import arrStateAndCity from '../help/arrStateCity';
import arrHotel from "../help/arrHotel";

export default function SelectReservation() {
  const [stateCity, setStateCity] = useState('');
  const arr = arrStateAndCity();
  const arrH = arrHotel();

  const handleChange = ({ target: { value } }) => {
    const objStateCity = arr.find(item => item.state === value || item.city === value);

    setStateCity(objStateCity);
  };

  return (
    <div
      className="
        flex justify-center
        w-full h-20
        bg-colorCriasBooking"
    >
      <form
        className="
          flex justify-center items-center space-x-6
          w-full"
      >
        <select className="select select-success w-44 max-w-xs" name="state" >
          {arr && arr.map((item, index) => (
            <option
              key={ index }
              value={ item.state }
              onClick={ handleChange }
            >
              { item.state }
            </option>
          ))}
        </select>
        <select className="select select-success w-56 max-w-xs" name="city" >
          {stateCity
            ? ( <option value={ stateCity.city }>{ stateCity.city }</option> )
            : ( <option>Selecione um estado</option> )}
        </select>
        <select className="select select-success w-44 max-w-xs" name="hotel" >
          {arrH && arrH.map((item, index) => (
            <option key={ index } value={ item.hotel }>{ item.hotel }</option>
          ))}
        </select>
        <input
          type="date"
          name="dateStart"
          placeholder="Data de entrada"
          class="input input-bordered input-success w-full max-w-xs"
        />
        <input
          type="date"
          name="dateEnd"
          placeholder="Data de saída"
          class="input input-bordered input-success w-full max-w-xs"
        />
      </form>
    </div>
  );
}
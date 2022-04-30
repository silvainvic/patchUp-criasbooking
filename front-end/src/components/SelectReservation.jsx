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
        flex w-full h-12 bg-ccolorCriasBooking"
    >
      <form>
        <select name="state" >
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
        <select name="city" >
          {stateCity
            ? ( <option value={ stateCity.city }>{ stateCity.city }</option> )
            : ( <option>Selecione uma estado</option> )}
        </select>
        <select name="hotel" >
          {arrH && arrH.map((item, index) => (
            <option key={ index } value={ item.hotel }>{ item.hotel }</option>
          ))}
        </select>
        <select name="dateStart">
          <option value="dataStart">Data de início</option>
        </select>
        <select name="dateEnd">
          <option value="dataEnd">Data final</option>
        </select>
      </form>
    </div>
  );
}
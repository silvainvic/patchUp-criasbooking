import React, { useState, useEffect } from 'react';

import { fetchRooms, fetchHotelById } from '../service/fetchApi';

export default function CardRooms(props) {
  const [rooms, setRooms] = useState('');
  
  const getRooms = async () => {
    const rooms = await fetchRooms();

    const hotels = await Promise.all(rooms.map( async (room) => {
      const hotel = await fetchHotelById(room.hotelId);
      room.hotelId = hotel.name;
      return room;
    }));
    
    setRooms(hotels);
  };
  

  useEffect(() => {
    getRooms();
  }, []);

  return (
    <div
      id="main-div-cardRooms"
      className="
      flex flex-col justify-center items-center"
    >
      {rooms && rooms.map((room, index) => {
        return (
          <div
            key={index}
            className="
              flex
              w-2/4
              mt-4
              border-2
              bg-colorP02Green border-colorP05Dark"
          >
            <img src={room.img} alt="room" className="h-96 w-96" />
            <div
              className="
                flex flex-col justify-center
                pl-10
                text-colorP05Dark text-2xl
            ">
              <h2>{room.hotelId}</h2>
              <h3>Cama de casal: {room.qtDoubleBed}</h3>
              <p>Cama de solteiro: {room.qtSingleBed}</p>
              <p>Diária R$: {room.dailyPrice},00</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
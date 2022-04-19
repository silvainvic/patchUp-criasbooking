const axios = require('axios');

// axios
//   .post('http://140.238.186.141:3001/reservations', {
//     client: 'Homer Simpson',
//     room: 'Suite Master Super',
//     days: 4,
//     reservationDate: '2022-04-30',
//     totalPrice: 2000,
//   })
//   .then(function ({ data }) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

/**
 * Esta é uma funcao que chama api pelo axios
 *
 * @client {string} obrigatorio   Parametro obrigatório
 * @room {string} obrigatorio   Parametro obrigatório
 * @days {int} obrigatorio   Parametro obrigatório
 * @reservationDate {date} obrigatorio   Parametro obrigatório
 * @totalPrice {float} obrigatorio   Parametro obrigatório
 */
const useAxios = async ({ client, room, days, reservationDate, totalPrice }) => {
  const result = await axios.post('http://140.238.186.141:3001/reservations', {
    client: client,
    room: room,
    days: days,
    reservationDate: reservationDate,
    totalPrice: totalPrice,
  });

  return result.data;
};

module.exports = { useAxios };

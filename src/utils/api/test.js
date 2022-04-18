const axios = require('axios');

const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const token = jwt.sign({ email: "teste", }, "teste", jwtConfig);
console.log(" ---------::: ", token);

const verified = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlIiwiaWF0IjoxNjUwMzE0NDE4LCJleHAiOjE2NTA0MDA4MTh9.B4v-wyQoub-e-1CZC_JIqZI3_yT17dOCYXRSY6HeTbI", "teste");


console.log(" ---------::: ", verified);

axios.post('http://140.238.186.141:3001/reservations', {
    client: 'Homer Simpson', 
    room: 'Suite Master Super',
    days: 4, 
    reservationDate: '2022-04-30', 
    totalPrice: 2000
  })
  .then(function ({data}) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
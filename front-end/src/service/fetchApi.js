const URL_CRIAS_REGISTER = 'http://localhost:3001/register';
const URL_CRIAS_LOGIN = 'http://localhost:3001/login';
const URL_HOTEL = 'http://localhost:3001/hotels';
const URL_ROOM = 'http://localhost:3001/room';

export async function fetchRegister(name, email, password) {
  return fetch(URL_CRIAS_REGISTER,
           {
             method: "POST",
             mode: "cors",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify({
             name,
             email,
             password,
             }),
         })
         .then((response) => {
           return response.json();
         })
         .then((d) => {
           return d;
         });
}
 
export async function fetchLogin(email, password) {
    return fetch(URL_CRIAS_LOGIN, {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          })
            .then((response) => {
              if (response.status === 500) {
                return response;
              }
              
              return response.json()
            })
            .then((token) => {
              return token;
            });
}

export async function fetchHotels() {
  return fetch(URL_HOTEL, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((hotels) => {
      return hotels;
    });
}

export async function fetchRooms() {
  return fetch(URL_ROOM, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((rooms) => {
      return rooms;
    });
}
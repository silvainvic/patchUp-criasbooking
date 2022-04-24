const URL_CRIAS_REGISTER = 'http://localhost:3001/register';
const URL_CRIAS_LOGIN = 'http://localhost:3001/login';

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
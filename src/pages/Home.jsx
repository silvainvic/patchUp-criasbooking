import React from 'react';
import { useContext, useEffect } from 'react';
import context from '../context/context';

import Header from '../components/Header';

export default function Home() {
  const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const { dataApi, setDataApi } = useContext(context);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setDataApi(data.meals[0]);
      return data;
    };
    console.log(fetchData, 'Estou no "Home"');
    // fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    //   .then((response) => {
    //     // console.log(response);
    //     return response.json()
    //   })
    //   .then((data) => {
    //     console.log(data, 'Data completo');
    //     console.log(data.meals[0], 'Data apenas com os dados');
    //     setDataApi(data)
    //   });
  }, []);

  return (
    <div>
      <Header />
      <h1>Home</h1>
    </div>
  );
}
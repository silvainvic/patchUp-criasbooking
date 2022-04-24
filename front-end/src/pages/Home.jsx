import React from 'react';
import MyContext from '../context/context';
import { useContext, useEffect } from 'react';

import Header from '../components/Header';

export default function Home() {
  // const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const URL_CRIAS = 'http://localhost:3001';
  const { setDataApi } = useContext(MyContext);

  useEffect(() => {
    fetch(URL_CRIAS)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setDataApi(data);
      });
  }, [setDataApi]);

  return (
    <div>
      <Header />
      <h1>Home</h1>
    </div>
  );
}
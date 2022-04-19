import React, { useState } from 'react';

import context from './context';

export default function Contextprovide({ children }) {
  const [dataApi, setDataApi] = useState('');
  console.log(dataApi, 'Estou no "Contextprovide"');

  return (
    <context.Provider value={ { dataApi, setDataApi } }>
      { children }
    </context.Provider>
  );
}
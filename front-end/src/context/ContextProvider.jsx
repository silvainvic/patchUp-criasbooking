import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MyContext from './context';

export default function ContextProvider({ children }) {
  const [dataApi, setDataApi] = useState('');
  console.log(dataApi, 'Estou no "ContextProvider"');

  return (
    <MyContext.Provider value={ { dataApi, setDataApi } }>
      { children }
    </MyContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
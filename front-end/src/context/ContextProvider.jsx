import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MyContext from './context';
// import { getLocalStorage } from '../service/serviceLocalStorage';

export default function ContextProvider({ children }) {
  const [dataApi, setDataApi] = useState(''); 

  return (
    <MyContext.Provider value={ { dataApi, setDataApi } }>
      { children }
    </MyContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
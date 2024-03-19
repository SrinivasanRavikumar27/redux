import React from 'react';
import Header from '../src/components/Header';
import Store from '../src/Stores/ProductStores';
import { Provider } from 'react-redux';

function App() {

  return (
  <Provider store={Store}>
    <Header/>
  </Provider>
  )
}

export default App
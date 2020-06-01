import React from 'react';

import Header from './components/Header';
import Logo from './components/Logo';
import Hero from './components/Hero';
import OrderNow from './components/OrderNow';
import List from './components/List';

function App() {
  return (
    <React.Fragment>
      <Header>
        <OrderNow title={'Sipariş Hattı'} phone={'444 33 22'} />
        <Logo width={356} height={38} />
      </Header>
      <Hero />
      <List title={'Tüm Pizzalarımız'} />
    </React.Fragment>
  );
}

export default App;

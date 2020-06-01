import React from 'react';
import { withRouter } from 'react-router';

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
      </Header>
      <Hero />
      <List title={'Tüm Pizzalarımız'} showAllPizzas={true} />
    </React.Fragment>
  );
}

export default withRouter(App);

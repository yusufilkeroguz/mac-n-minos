import React from 'react';
import { withRouter } from 'react-router';

import List from './components/List';
import Logo from './components/Logo';
import Header from './components/Header';

function App() {
  return (
    <React.Fragment>
      <Header relative={true} />
      <List title={'Tüm Pizzalarımız'} showAllPizzas={false} />
    </React.Fragment>
  );
}

export default withRouter(App);

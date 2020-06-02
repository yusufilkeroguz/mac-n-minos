import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Hero from './components/Hero';
import OrderNow from './components/OrderNow';
import PizzaList from './components/PizzaList';

function App(props) {
  const { pizzas } = props;

  return (
    <React.Fragment>
      <Header />
      <OrderNow title={'Sipariş Hattı'} phone={'444 33 22'} />
      <Hero text={"Burası Hero'nun yazısı <br> HTML kabul eder..."} />
      <PizzaList title={'Tüm Pizzalarımız'} showAllPizzaButton={true} pizzas={pizzas} />
    </React.Fragment>
  );
}

const mapStateToProps = ({ pizzas }) => ({ pizzas });

App.propTypes = {
  pizzas: PropTypes.array,
};

export default withRouter(connect(mapStateToProps, {})(App));

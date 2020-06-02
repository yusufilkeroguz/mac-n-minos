import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PizzaList from './components/PizzaList';
import Header from './components/Header';

function ListPage(props) {
  const { pizzas } = props;

  return (
    <React.Fragment>
      <Header relative={true} />
      <PizzaList title={'Tüm Pizzalarımız'} showAllPizzaButton={false} pizzas={pizzas} />
    </React.Fragment>
  );
}

const mapStateToProps = ({ pizzas }) => ({ pizzas });

ListPage.propTypes = {
  pizzas: PropTypes.array,
};

export default withRouter(connect(mapStateToProps, {})(ListPage));

import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import ListBox from './ListBox';
import Button from './Button';
import Title from './Title';

const ListElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 1200px;
  margin: 0 auto;
`;

function renderPizzas(pizzas) {
  if (!pizzas.length) {
    return (
        <div />
    );
  }

  return pizzas.map((pizza, key) => (
      <ListBox pizzaId={key} pizza={pizza} key={key} />
  ));
}

function PizzaList({ title = false, showAllPizzaButton = false, pizzas = [] }) {
  return (
    <ListElement>
      {title && (<Title>{title}</Title>)}
      {renderPizzas(pizzas)}
      {showAllPizzaButton && (<Button as={NavLink} to={'/tum-liste'}>Tüm Pizzaları Görüntüle</Button>)}
    </ListElement>
  );
}

PizzaList.propTypes = {
  pizzas: PropTypes.array,
  title: PropTypes.string,
  showAllPizzaButton: PropTypes.bool,
};

export default PizzaList;

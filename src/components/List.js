import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetch } from 'whatwg-fetch';
import { connect } from 'react-redux';

import ListBox from './ListBox';
import Title from './Title';

import { setPizzas } from '../store/pizzaReducer';

const ListElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 1200px;
  margin: 0 auto;
`;

function renderPizzas(pizzas) {
  return pizzas.map((pizza, key) => (
      <ListBox pizza={pizza} key={key} />
  ));
}

function List(props) {
  const [pizzas, SetPizzas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/pizza-list')
      .then(res => res.json())
      .then((res) => {
        props.setPizzas(res);
        SetPizzas(res);
      });
  }, []);

  return (
    <ListElement>
      {props.title && (<Title>{props.title}</Title>)}
      {renderPizzas(pizzas)}
    </ListElement>
  );
}

const mapStateToProps = () => ({ });
const mapDispatchToProps = dispatch => ({
  setPizzas: pizzas => dispatch(setPizzas(pizzas)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);

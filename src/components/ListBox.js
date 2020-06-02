import React from 'react';
import styled from 'styled-components';
import { withRouter, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from './Button';

import { mdSize } from '../ui/responsive';

const ListBoxElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 50%;
  box-sizing: border-box;
  border-radius: .5rem;
  padding: .5rem;

  ${mdSize(`
    width: 25%;
  `)}
`;

const ListBoxImage = styled.a`
  border-top-left-radius: .5rem;
  border-top-right-radius: .5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex: 0 0 100%;
  box-sizing: border-box;

  img {
    width: 100%;
    height: auto;
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
  }
`;

const ListBoxDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex: 0 0 100%;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-top: 0;
  padding: .25rem;
  border-bottom-left-radius: .5rem;
  border-bottom-right-radius: .5rem;
`;

const ListBoxTitle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex: 0 0 100%;
  box-sizing: border-box;
  text-align: center;
  min-height: 3rem;
  color: #505061;
  text-decoration: none;
  font-size: 18px;
`;

const ListBoxPrice = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex: 0 0 100%;
  box-sizing: border-box;
  text-align: center;
  margin-bottom: .5rem;
  color: #a38248;
  font-size: 20px;
`;

const ListBoxButton = styled(Button)`
  flex: 0 0 auto;
  padding: .5rem 3rem;
  text-decoration: none;
`;

function ListBox({ pizza, pizzaId }) {
  if (!pizza) {
    return (<div />);
  }

  return (
    <ListBoxElement>
      <ListBoxImage as={NavLink} to={`/pizza/${pizzaId}`}>
        <img src={pizza.images.thumbnail} alt={pizza.name} width={434} height={404} />
      </ListBoxImage>
      <ListBoxDetails>
        <ListBoxTitle as={NavLink} to={`/pizza/${pizzaId}`}>
          {pizza.name}
        </ListBoxTitle>
        <ListBoxPrice>
          {pizza.price} ₺
        </ListBoxPrice>
        <ListBoxButton as={NavLink} to={`/pizza/${pizzaId}`}>
          Satın Al
        </ListBoxButton>
      </ListBoxDetails>
    </ListBoxElement>
  );
}

ListBox.propTypes = {
  pizza: PropTypes.object,
  pizzaId: PropTypes.number,
};

export default withRouter(ListBox);

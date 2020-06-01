import React from 'react';
import styled from 'styled-components';
import { withRouter, NavLink } from 'react-router-dom';

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
`;

const ListBoxButton = styled(Button)`
  flex: 0 0 100%;
  padding: .5rem 1rem;
`;

function ListBox({ pizza }) {
  if (!pizza) {
    return (<div />);
  }

  return (
    <ListBoxElement>
      <ListBoxImage as={NavLink} to={'/pizza/1'}>
        <img src={pizza.image} alt={pizza.name} width={434} height={404} />
      </ListBoxImage>
      <ListBoxDetails>
        <ListBoxTitle as={NavLink} to={'/pizza/1'}>
          {pizza.name}
        </ListBoxTitle>
        <ListBoxButton as={NavLink} to={'/pizza/1'}>
          İncele
        </ListBoxButton>
      </ListBoxDetails>
    </ListBoxElement>
  );
}

export default withRouter(ListBox);

import React from 'react';
import styled from 'styled-components';

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
  min-height: 45px;
  color: #505061;
`;

const ListBoxButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex: 0 0 100%;
  box-sizing: border-box;
  text-align: center;
  background-color: #0069a6;
  color: #fff;
  padding: .5rem 1rem;
  border-radius: .5rem;
`;

function ListBox({ pizza }) {
  if (!pizza) {
    return (<div />);
  }

  return (
    <ListBoxElement>
      <ListBoxImage href={'#'}>
        <img src={pizza.image} alt={pizza.name} width={434} height={404} />
      </ListBoxImage>
      <ListBoxDetails>
        <ListBoxTitle href={'#'}>
          {pizza.name}
        </ListBoxTitle>
        <ListBoxButton  href={'#'}>
          İncele
        </ListBoxButton>
      </ListBoxDetails>
    </ListBoxElement>
  );
}

export default ListBox;

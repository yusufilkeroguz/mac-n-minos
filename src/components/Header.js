import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';

import { mdSize } from '../ui/responsive';

const HeaderElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  margin-top: 0;
  background-color: #000000;
  padding: 1rem 0;
  
  ${props => (props.relative ? mdSize(`
    position: relative;
    margin-top: 0;
    background-color: #000000;
  `) : mdSize(`
    position: absolute;
    margin-top: 4rem;
    background-color: transparent;
  `))}
`;

const Header = props => (
  <HeaderElement relative={props.relative}>
    <Logo width={356} height={38} />
  </HeaderElement>
);

export default Header;

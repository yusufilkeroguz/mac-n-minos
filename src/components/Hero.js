import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { mdSize } from '../ui/responsive';

const HeroElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  background-image: url('https://www.delonghi.com/Global/recipes/multifry/pizza_fresca.jpg');
  height: 18rem;
  background-repeat: no-repeat;
  background-size: cover;
  
  ${mdSize(`
    height: 100vh;
  `)}
`;

const HeroText = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  padding: 1rem;
  box-sizing: border-box;
  color: #ffffff;
  text-shadow: 1px 1px 4px #000000;
  font-size: 28px;
  max-width: 1200px;
  text-align: center;
  
  ${mdSize(`
    font-size: 64px;
  `)}
`;

const Hero = ({ text }) => (
  <HeroElement>
    {text && (
      <HeroText dangerouslySetInnerHTML={{ __html: text }} />
    )}
  </HeroElement>
)

Hero.propTypes = {
  text: PropTypes.string,
};

export default Hero;

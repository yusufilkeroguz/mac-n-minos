import styled from 'styled-components';

import { mdSize } from '../ui/responsive';

const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  background-image: url('https://www.delonghi.com/Global/recipes/multifry/pizza_fresca.jpg');
  height: 18rem;
  background-respeat: no-repeat;
  background-size: cover;
  
  ${mdSize(`
    height: 100vh;
  `)}
`;

export default Hero;

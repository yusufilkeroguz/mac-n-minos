import styled from 'styled-components';
import { mdSize } from '../ui/responsive';

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  margin-top: 0;
  background-color: #000000;
  padding: 1rem 0;

  ${mdSize(`
    position: absolute;
    margin-top: 4rem;
    background-color: transparent;
  `)}
`;

export default Header;

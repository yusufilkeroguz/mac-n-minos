import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  box-sizing: border-box;
  text-align: center;
  background-color: ${props => (props.bgColor ? props.bgColor : '#0069a6')};
  color: #fff;
  padding: 1rem 2rem;
  border-radius: .5rem;
  border: 0;
  
  ${props => (props.xl && (`
    padding: 1.25rem 2.5rem;
    width: 190px;
    font-size: 18px;
  `))}
`;

Button.propTypes = {
  bgColor: PropTypes.string,
  xl: PropTypes.bool,
};

export default Button;

import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h1`
  display: flex;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : 'center')};
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  flex-wrap: ${props => (props.noWrap ? 'nowrap' : 'wrap')};
  width: 100%;
  color: ${props => (props.color ? props.color : '#505061')};
  line-height: 1.5;
`;

Title.propTypes = {
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  noWrap: PropTypes.bool,
};

export default Title;

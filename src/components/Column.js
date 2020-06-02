import styled from 'styled-components';
import PropTypes from 'prop-types';

const Column = styled.div`
  display: flex;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : 'center')};
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  flex-wrap: ${props => (props.noWrap ? 'nowrap' : 'wrap')};
  flex: ${props => (props.size ? props.size : 1)};
  width: 100%;
`;

Column.propTypes = {
  size: PropTypes.number,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  noWrap: PropTypes.bool,
};

export default Column;

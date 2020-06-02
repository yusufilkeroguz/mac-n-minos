import styled from 'styled-components';
import PropTypes from 'prop-types';

import { mdSize } from '../ui/responsive';

const Row = styled.div`
  display: flex;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : 'center')};
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  flex-wrap: ${props => (props.noWrap ? 'nowrap' : 'wrap')};
  width: 100%;
  margin: 0 auto;
  
  ${mdSize(`
    width: 1200px;
  `)}
`;

Row.propTypes = {
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  noWrap: PropTypes.bool,
};

export default Row;

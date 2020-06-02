import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { mdSize } from '../ui/responsive';

const OrderNowElement = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #d00b2d;
  position: absolute;
  left: 5rem;
  border-radius: 50%;
  color: #fff;
  transform: rotate(-12deg);
  top: 2rem;
  padding: 3.5rem .5rem;
  max-width: 150px;
  
  ${mdSize('display: flex;')}
`;

const OrderNowTitleElement = styled.div`
  display: block;
  width: 100%;
  flex: 0 0 100%;
  text-align: center;
  font-size: 18px;
`;
const OrderNowPhoneElement = styled.div`
  display: block;
  width: 100%;
  flex: 0 0 100%;
  text-align: center;
  font-size: 22px;
`;

function OrderNow(props) {
  return (
    <OrderNowElement>
      <OrderNowTitleElement>
        {props.title}
      </OrderNowTitleElement>
      <OrderNowPhoneElement>
        {props.phone}
      </OrderNowPhoneElement>
    </OrderNowElement>
  );
}

OrderNow.propTypes = {
  title: PropTypes.string,
  phone: PropTypes.string,
};

export default OrderNow;

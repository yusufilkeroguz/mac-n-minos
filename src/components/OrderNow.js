import React from 'react';
import styled from 'styled-components';

import { mdSize } from '../ui/responsive';

const OrderNowElement = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #d00b2d;
  position: absolute;
  left: 5rem;
  padding: 2.5rem .5rem;
  max-width: 100px;
  border-radius: 50%;
  color: #fff;
  transform: rotate(-15deg);
  
  ${mdSize('display: flex;')}
`;

const OrderNowTitleElement = styled.div`
  display: block;
  width: 100%;
  flex: 0 0 100%;
  text-align: center;
`;
const OrderNowPhoneElement = styled.div`
  display: block;
  width: 100%;
  flex: 0 0 100%;
  text-align: center;
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

export default OrderNow;

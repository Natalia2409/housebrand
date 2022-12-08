import React from 'react';
import styled from 'styled-components';

import bg from '../../assets/bg.webp';

function Discount() {
  return (
    <Wrapper>
      <WrapperBtn>
        <Btn>Для неї</Btn>
        <Btn>Для нього</Btn>
      </WrapperBtn>
    </Wrapper>
  )
}

export default Discount;

const Wrapper = styled.div`
  background: url(${bg}) no-repeat center center/cover;
  width: 100%;
  height: 550px;
  position: relative;
`;

const WrapperBtn = styled.div`
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translate(-50%);
`;

const Btn = styled.button`
  width: 180px;
  height: 45px;
  text-transform: uppercase;
  background-color: #fff;
  border: none;
  font-weight: 600;
  font-size: 20px;

  &:first-child {
    margin-right: 30px;
  }
  
  &:hover {
    cursor: pointer;
    background-color: #000;
    color: #fff;
  }
`;
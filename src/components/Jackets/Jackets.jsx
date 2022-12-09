import React from 'react';
import styled from 'styled-components';

import jacket1 from '../../assets/jacket1.webp';
import jacket2 from '../../assets/jacket2.webp';
import both from '../../assets/both.jpg';

function Jackets() {
  return (
    <Wrapper>
      <SmallBlock img={jacket1}>
        <Description>
          <div>Куртки</div>
          <div>Для неї</div>
        </Description>
      </SmallBlock>
      <SmallBlock img={jacket2}>
        <Description>
          <div>Куртки</div>
          <div>Для нього</div>
        </Description>
      </SmallBlock>
      <BigBlock img={both} />
    </Wrapper>
  )
}

export default Jackets;

const Wrapper = styled.div`
  padding: 30px 100px 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SmallBlock = styled.div`
  position: relative;
  width: 24%;
  height: 300px;
  background: url(${(props) => props.img}) no-repeat center center/cover;
  
  &:hover {
    cursor: pointer;
  }
`;

const BigBlock = styled.div`
  width: 48%;
  height: 300px;
  background: url(${(props) => props.img}) no-repeat center center/cover;

  &:hover {
    cursor: pointer;
  }
`;

const Description = styled.div`
  position: absolute;
  width: 100%;
  height: 50px;
  bottom: 0;
  background-color: rgba(183, 104, 94, 0.9);
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  
  div:first-child {
    margin-top: 3px;
  }
  
  div:nth-child(2) {
    font-size: 20px;
    font-weight: 600;
  }
`;
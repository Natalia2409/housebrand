import React from 'react';
import styled from 'styled-components';

import clothes1 from '../../../assets/clothes1.webp';
import clothes2 from '../../../assets/clothes2.webp';
import clothes3 from '../../../assets/clothes3.webp';
import clothes4 from '../../../assets/clothes4.webp';
import clothes5 from '../../../assets/clothes5.webp';

function Clothes() {
  return (
    <Wrapper>
      <Card>
        <Img img={clothes1} />
        <Description>Джемпер oversize</Description>
        <Price>1 299 UAH</Price>
      </Card>
      <Card>
        <Img img={clothes2} />
        <Description>Зимова куртка</Description>
        <Price><OldPrice>2 599 UAH</OldPrice><NewPrice> 1 699 UAH</NewPrice></Price>
      </Card>
      <Card>
        <Img img={clothes3} />
        <Description>Дута куртка</Description>
        <Price>1 799 UAH</Price>
      </Card>
      <Card>
        <Img img={clothes4} />
        <Description>Джемпер вільного крою</Description>
        <Price>1 299 UAH</Price>
      </Card>
      <Card>
        <Img img={clothes5} />
        <Description>Легінси з завищеною талією</Description>
        <Price>849 UAH</Price>
      </Card>
    </Wrapper>
  )
}

export default Clothes;

const Wrapper = styled.div`
  padding: 30px 100px 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Card = styled.div`
  width: 19%;
  height: 300px;
  
  &:hover {
    cursor: pointer;
  }
`;

const Img = styled.div`
  width: 100%;
  height: 250px;
  background: url(${(props) => props.img}) no-repeat center center/cover;
`;

const Description = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  margin-top: 5px;
`;

const Price = styled.div`
  font-size: 16px;
  text-align: center;
  margin-top: 5px;
`;

const OldPrice = styled.span`
  color: grey;
  text-decoration: line-through;
`;

const NewPrice = styled.span`
  color: red;
  font-weight: 600;
`;
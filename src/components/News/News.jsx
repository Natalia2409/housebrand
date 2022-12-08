import React from 'react';
import styled from 'styled-components';

import news1 from '../../assets/news1.jpg';
import news2 from '../../assets/news2.jpg';
import news3 from '../../assets/news3.webp';

function News() {
  return (
    <Wrapper>
      <Block img={news1} />
      <Block img={news2} />
      <Block img={news3} />
    </Wrapper>
  )
}

export default News;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 100px 60px;
`;

const Block = styled.div`
  width: 32%;
  height: 370px;
  background: url(${(props) => props.img}) no-repeat center center/cover;
  
  &:hover {
    cursor: pointer;
  }
`;
import React from 'react';
import styled from 'styled-components';

function Subscribe() {
  return (
    <Overlap>
      <Wrapper>
        <Header>Отримайте 10% знижку на нову колекцію!</Header>
        <Inner>
          <Text1>Підпишіться на нашу розсилку, щоб отримати дисконтний код та бути у курсі нових
            надходжень House.</Text1>
          <WrapperCategory>
            <div>
              <Choose>Оберіть категорію, яка вас цікавить:</Choose>
              <SmallText>Можна вибрати обидві категорії</SmallText>
            </div>
            <div>
              <input type="checkbox" /> Жінки
              <input type="checkbox" /> Чоловіки
            </div>
          </WrapperCategory>
          <WrapperEmail>
            <EmailInput type="text" placeholder="e-mail" />
            <Button>Підписатись</Button>
          </WrapperEmail>
          <input type="checkbox" />
          <Politics> Я приймаю правила та умови розсилки
            <Confidence> Політика конфіденційності</Confidence>
          </Politics>
        </Inner>
      </Wrapper>
    </Overlap>
  )
}

export default Subscribe;

const Overlap = styled.div`
  border-bottom: 4px solid #9E2C20;
`;

const Wrapper = styled.div`
  width: 800px;
  margin: 0 auto;
  padding-bottom: 40px;
`;

const Header = styled.h1`
  text-align: center;
`;

const Inner = styled.div`
  width: 600px;
  margin: 0 auto;
`;

const Text1 = styled.p`
  font-size: 20px;
  margin-top: 30px;
  text-align: center;
`;

const WrapperCategory = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  
  input:nth-child(2) {
    margin-left: 20px;
  }
`;

const Choose = styled.p`
  font-weight: 600;
`;

const SmallText = styled.p`
  font-size: 12px;
`;

const WrapperEmail = styled.div`
  margin: 30px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const EmailInput = styled.input`
  width: 68%;
  height: 40px;
  padding: 10px;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid grey;
  
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 30%;
  height: 40px;
  border: none;
  background-color: #414141;
  font-weight: bold;
  color: white;
  font-size: 18px;
  
  &:hover {
    cursor: pointer;
    background-color: yellow;
    color: #000;
  }
`;

const Politics = styled.span`
  font-size: 14px;
`;

const Confidence = styled.span`
  font-weight: bold;
`;
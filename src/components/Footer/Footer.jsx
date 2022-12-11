import React from 'react';
import styled from 'styled-components';

import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import tiktok from '../../assets/tiktok.png';
import youtube from '../../assets/youtube.png';

function Footer() {
  return (
    <Wrapper>
      <WrapperRow>
        <Block>
          <HeaderClickable>Допомога та контакт</HeaderClickable>
          <List>
            <li>Таблиця розмірів</li>
            <li>Запитання-відповіді</li>
            <li>Контакти</li>
            <li>Ціни в магазинах</li>
            <li>Адреси магазинів</li>
            <li>Eco Aware</li>
          </List>
        </Block>
        <Block>
          <Header>Інтернет-магазин</Header>
          <List>
            <li>Оплата</li>
            <li>Доставка</li>
            <li>Як оформити замовлення</li>
            <li>Претензії</li>
          </List>
        </Block>
        <Block>
          <Header>Умови</Header>
          <List>
            <li>Умови і положення</li>
            <li>Політика конфіденційності</li>
            <li>Політика щодо файлів cookie</li>
            <li>Налаштування файлів cookie</li>
          </List>
        </Block>
        <Block>
          <Header>Дізнатися більше про House</Header>
          <IconList>
            <ul>
              <a href="https://www.facebook.com/housebrandUA" target="_blank" rel="noreferrer">
                <img src={facebook} alt="facebook" />
              </a>
            </ul>
            <ul>
              <a href="https://www.instagram.com/house_brand/#" target="_blank" rel="noreferrer">
                <img src={instagram} alt="instagram" />
              </a>
            </ul>
            <ul>
              <a href="https://www.tiktok.com/@house_brand" target="_blank" rel="noreferrer">
                <img src={tiktok} alt="tiktok" />
              </a>
            </ul>
            <ul>
              <a href="https://www.youtube.com/user/houseclip" target="_blank" rel="noreferrer">
                <img src={youtube} alt="youtube" />
              </a>
            </ul>
          </IconList>
        </Block>
      </WrapperRow>
      <WrapperRow>
        <Block>
          <Header>Юридичні питання</Header>
          <List>
            <li>Повернення</li>
          </List>
        </Block>
        <Block>
          <Header>LPP</Header>
          <List>
            <li>Кар'єра</li>
          </List>
        </Block>
      </WrapperRow>
      <Line />
      <Address>LPP S.A., вул. Лонкова 39/44, 80-769 Гданськ, Польща, NIP: 583‑10‑14‑898, REGON: 190852164</Address>
      <Address>© House, 2022. Усі права захищено</Address>
    </Wrapper>
  )
}

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  padding: 60px 40px 40px;
`;

const WrapperRow = styled.div`
  display: flex;
  align-items: start;
  width: 100%;
  margin-bottom: 20px;
`;

const Block = styled.div`
  width: 25%;
`;

const Header = styled.h5`
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style-type: none;
  font-size: 13px;
  
  li {
    margin-bottom: 5px;
    
    &:hover {
      cursor: pointer;
      color: red;
    }
  }
`;

const Line = styled.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 30px 0;
`;

const Address = styled.p`
  font-size: 12px;
  margin-bottom: 20px;
`;

const IconList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  
  img {
    width: 20px;
    margin-right: 8px;
    
    &:hover {
      cursor: pointer;
    }
  }
`;

const HeaderClickable = styled.h5`
  color: #306FA3;
  margin-bottom: 20px;
  
  &:hover {
    cursor: pointer;
    color: red;
  }
`;


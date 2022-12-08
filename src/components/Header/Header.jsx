import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/logo.svg';
import search from '../../assets/search.png';
import flag from '../../assets/flag.png';
import account from '../../assets/account.png';
import basket from '../../assets/basket.png';

function Header() {
  return (
    <Wrapper>
      <Block>
        <LogoWrapper>
          <img src={logo} alt="logo" />
        </LogoWrapper>
        <List>
          <li>Winter Deals</li>
          <li>Новинки</li>
          <li>Жінкам</li>
          <li>Чоловікам</li>
          <li>Xmas🎄</li>
        </List>
      </Block>
      <Block>
        <WrapperInput>
          <Input type="text" placeholder="Шукати" />
          <Icon src={search} alt="search" />
        </WrapperInput>
        <WrapperIcon>
          <General>
            <SmallIcons src={flag} alt="flag" />
            <div>UA</div>
          </General>
          <General>
            <SmallIcons src={account} alt="account" />
            <div>Акаунт</div>
          </General>
          <General>
            <SmallIcons src={basket} alt="basket" />
            <div>Кошик</div>
          </General>
        </WrapperIcon>
      </Block>
    </Wrapper>
  )
}

export default Header;

const Wrapper = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`;

const Block = styled.div`
  display: flex;
  align-items: center;
`;

const LogoWrapper = styled.div`
  width: 100px;
  margin-right: 50px;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  font-size: 16px;
  font-weight: 600;
  li {
    margin-right: 30px;
    height: 70px;
    display: flex;
    align-items: center;
    position: relative;
    &:hover {
      cursor: pointer;
      &:after {
        content: '';
        display: block;
        width: 100%;
        height: 3px;
        background-color: black;
        position: absolute;
        bottom: 0;
      }
    }
  }
`;

const WrapperInput = styled.div`
  position: relative;
`;

const Input = styled.input`
  height: 50px;
  width: 200px;
  border: none;
  border-bottom: 1px solid grey;
  padding: 0 40px;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

const Icon = styled.img`
  position: absolute;
  width: 30px;
  left: 0;
  top: 10px;
`;

const WrapperIcon = styled.div`
  width: 170px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SmallIcons = styled.img`
  width: 20px;
`;

const General = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
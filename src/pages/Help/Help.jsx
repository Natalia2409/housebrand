import React, { useEffect } from 'react';
import styled from 'styled-components';

import help from '../../assets/help.svg';

function Help() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HrStart />
      <HelpWrapper>
        <div>
          <p>Вітаємо!</p>
          <p>Як можемо тобі допомогти ?</p>
        </div>
        <div>
          <img src={help} alt="help" />
        </div>
      </HelpWrapper>
      <Hr />
      <Wrapper>
        <Popular>
          <h2>Популярне</h2>
          <WrapperList>
            <List>
              <li>Розпродаж - часті запитання ˃</li>
              <li>Відстеження замовлення ˃</li>
              <li>30 днів на повернення ˃</li>
            </List>
            <List>
              <li>Скасування замовлення ˃</li>
              <li>Чи можу я змінити замовлення? ˃</li>
              <li>Доступність товарів ˃</li>
            </List>
            <List>
              <li>Рахунок фактура ПДВ/Рахунок купівлі ˃</li>
            </List>
          </WrapperList>
          <Clients>Шановні клієнти! Повідомляємо Вам, що термін реєстрації повернень на скаді та повернення грошових
            коштів збільшено орієнтовно до 14 днів. Приносимо вибачення за незручності</Clients>
        </Popular>
        <WrapperBlock>
          <Block>
            <h2>Замовлення</h2>
            <ListBlock>
              <li>Відстеження замовлення ˃</li>
              <li>Доступність товарів ˃</li>
              <li>Як створити замовлення в інтернет-магазині? ˃</li>
              <li>Що відбувається після оформлення замовлення? ˃</li>
              <li>Невідповідність замовлення ˃</li>
              <li>Скасування замовлення ˃</li>
              <li>Чи я можу змінити замовлення? ˃</li>
              <li>Рахунок фактура ПДВ/Рахунок купівлі ˃</li>
            </ListBlock>
          </Block>
          <Block>
            <h2>Повернення та скарги</h2>
            <ListBlock>
              <li>30 днів на повернення ˃</li>
              <li>Методи повернення ˃</li>
              <li>Як оформити скаргу? ˃</li>
              <li>Який час розгляду скарги? ˃</li>
              <li>Чи можливий обмін товару? ˃</li>
              <li>Скільки часу потрібно для повернення грошових коштів? ˃</li>
            </ListBlock>
          </Block>
          <Block>
            <h2>Доставка</h2>
            <ListBlock>
              <li>Вартість та час доставки ˃</li>
              <li>Відстеження замовлення ˃</li>
              <li>Способи доставки ˃</li>
              <li>Безкоштовна доставка ˃</li>
              <li>Логістичні партнери ˃</li>
              <li>Що робити, якщо доставлено пошкоджену посилку або невідповідний
                товар? ˃</li>
              <li>Що робити, якщо частина або все замовлення не було доставлене? ˃</li>
            </ListBlock>
          </Block>
        </WrapperBlock>
        <WrapperBlock>
          <Block>
            <h2>Оплата та акції</h2>
            <ListBlock>
              <li>Способи оплати ˃</li>
              <li>Скільки триває повернення коштів? ˃</li>
              <li>Рахунок фактура ПДВ/Рахунок купівлі ˃</li>
              <li>Знижкові промокоди/акційні купони ˃</li>
              <li>Безкоштовна доставка ˃</li>
            </ListBlock>
          </Block>
          <Block>
            <h2>Продукти</h2>
            <ListBlock>
              <li>Таблиця розмірів ˃</li>
              <li>Доступність товарів ˃</li>
              <li>Цінова політика ˃</li>
            </ListBlock>
          </Block>
          <Block>
            <h2>Стаціонарні магазини</h2>
            <ListBlock>
              <li>Як повернути товар, куплений в стаціонарному магазині ? ˃</li>
              <li>Скарги на продукти, придбані в стаціонарному магазині ˃</li>
              <li>Як можу заплатити у стаціонарному магазині? ˃</li>
              <li>Список магазині House ˃</li>
            </ListBlock>
          </Block>
        </WrapperBlock>
        <WrapperBlockLast>
          <Block>
            <h2>Мій обліковий запис</h2>
            <ListBlock>
              <li>Мої дані ˃</li>
              <li>Мої замовлення ˃</li>
              <li>Мої повернення ˃</li>
              <li>Адреси ˃</li>
              <li>Дані рахунку ˃</li>
              <li>Розсилка новин ˃</li>
              <li>Не пам'ятаю пароль ˃</li>
            </ListBlock>
          </Block>
          <Block>
            <h2>Інше</h2>
            <ListBlock>
              <li>Політика конфіденційності ˃</li>
              <li>Умови і положення ˃</li>
              <li>Проблеми зі зверненням до Відділу обслуговування клієнтів ˃</li>
              <li>Технічні проблеми ˃</li>
              <li>Мобільна версія ˃</li>
            </ListBlock>
          </Block>
        </WrapperBlockLast>
      </Wrapper>
      <Hr />
    </div>
  )
}

export default Help;

const Wrapper = styled.div`
  padding: 0 20px;
`;

const HelpWrapper = styled.div`
  margin: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  
  p:first-child {
    font-size: 36px;
  }
  
  p:nth-child(2) {
    font-size: 24px;
  }
  
  img {
    width: 350px;
  }
`;

const HrStart = styled.hr`
  border: none;
  border-top: 1px solid #eee;
`;

const Hr = styled.hr`
  border: none;
  border-top: 3px solid #306FA3;
`;

const Popular = styled.div`
  margin-top: 20px;
  padding: 20px 40px 10px;
  background-color: #EBF3F9;
  text-align: center;
`;

const WrapperList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: 40px;
`;

const List = styled.ul`
  text-align: start;
  list-style-type: none;
  width: 33%;
  
  li {
    margin-bottom: 10px;
    
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

const Clients = styled.div`
  width: 100%;
  margin-top: 40px;
  font-weight: bold;
  color: #888;
`;

const WrapperBlock = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const WrapperBlockLast = styled.div`
  margin-top: 20px;
  margin-bottom: 60px;
  width: 100%;
  display: flex;
  justify-content: start;
  
  div:first-child {
    margin-right: 25px;
  }
`;

const Block = styled.div`
  border: 10px solid #EBF3F9;
  width: 32%;
  text-align: center;
  padding: 40px;
`;

const ListBlock = styled.ul`
  text-align: start;
  list-style-type: none;
  width: 100%;

  li {
    margin-bottom: 15px;
    font-size: 17px;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  
  li:first-child {
    margin-top: 25px;
  }
`;
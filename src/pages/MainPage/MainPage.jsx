import React from 'react';

import Discount from '../../components/MainPage/Discount';
import News from '../../components/MainPage/News';
import Clothes from '../../components/MainPage/Clothes';
import Jackets from "../../components/MainPage/Jackets";
import Subscribe from '../../components/MainPage/Subscribe';

function MainPage() {
  return (
    <div>
      <Discount />
      <News />
      <Clothes />
      <Jackets />
      <Subscribe />
    </div>
  )
}

export default MainPage;
import React from 'react';

import Discount from '../../components/Discount';
import News from '../../components/News';
import Clothes from '../../components/Clothes';
import Jackets from "../../components/Jackets";
import Subscribe from '../../components/Subscribe';

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
import React from 'react';

import Discount from '../../components/Discount';
import News from '../../components/News';
import Clothes from '../../components/Clothes';
import Jackets from "../../components/Jackets";

function MainPage() {
  return (
    <div>
      <Discount />
      <News />
      <Clothes />
      <Jackets />
    </div>
  )
}

export default MainPage;
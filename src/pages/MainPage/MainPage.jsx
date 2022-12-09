import React from 'react';

import Discount from '../../components/Discount';
import News from '../../components/News';
import Clothes from '../../components/Clothes';

function MainPage() {
  return (
    <div>
      <Discount />
      <News />
      <Clothes />
    </div>
  )
}

export default MainPage;
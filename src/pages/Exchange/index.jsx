import React, { useEffect } from 'react';
import Header from '../Mainpage/header';

import PurchaseList from './getPurchaseList';

import useSWR from 'swr'
import fetcher from "../utils/fetcher";

function Purchase() {
  

  return (
    <body>
      <Header />
      <PurchaseList />

    </body>  
    
   
  );
}

export default Purchase;

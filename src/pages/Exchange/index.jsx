import React, { useEffect } from 'react';
import Header from '../Mainpage/header';
import ExchangeList from './getExchangeList';
import Purchase from './getPurchaseList';
import useSWR from 'swr'
import fetcher from "../utils/fetcher";

function Exchange() {
  

  return (
    <body>
      <Header />
      <Purchase />
      <ExchangeList />
    </body>  
    
   
  );
}

export default Exchange;

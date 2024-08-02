import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { generateClient } from "aws-amplify/api";
import { listUsers, getUser, listStockBuckets } from "./graphql/queries";
import { createStockBucket } from './graphql/mutations';

import {
  StocksListCollection 
 } from './ui-components';
import {
  Addbucket 
 } from './ui-components';
import {
  Group23 
 } from './ui-components';
import {
  Popup 
 } from './ui-components';
import {
  StockBucketCreateForm 
 } from './ui-components';

 import {
  ActionCardsCollection 
 } from './ui-components';

console.log('roshan');

const client = generateClient();

(async () => {
  // Example stocks data; adjust this to match your schema
  const stocksInstance = [
    {
      stockId: "stock1",
      quantity: 100,
    },
    {
      stockId: "stock2",
      quantity: 50,
    },
  ];

  // Call your GraphQL client with the mutation and variables
  try {
    const newStockBucket = await client.graphql({
      query: createStockBucket,
      variables: {
        input: {
          name: "Lorem ipsum dolor sit amet",
          description: "Lorem ipsum dolor sit amet",
          Stocks: stocksInstance, // Provide the actual Stocks instance here
        },
      },
    });

    console.log('Stock bucket created:', newStockBucket);
  } catch (error) {
    console.error('Error creating stock bucket:', error);
  }
})();


function App() {  
  // useEffect(() => {
  //   const amplifyTextElements = document.getElementsByClassName('amplify-text');
  //   if (amplifyTextElements.length > 1) {
  //     console.log('*******************');
  //     const addBucket1 = amplifyTextElements[2];
  //     console.log(addBucket1.textContent);
      
  //     addBucket1.addEventListener('click', () => {
  //       console.log('Roshan Shaik');
  //     });      
  //   } else {
  //     console.log('Element with class "amplify-text" not found.');
  //   }
  // }, []);

  (async () => {
    const allStockBuckets = await client.graphql({
      query: listStockBuckets
    });
    console.log(allStockBuckets);
  })();

  return (
    <>
      <div >
        {/* <Addbucket style={{ backgroundColor: 'green' }} className="amplify-text" /> */}
        <ActionCardsCollection />
      </div>
      <div className="amplify-text">
        Another element with amplify-text class
      </div>
    </>
  );
}

export default App;

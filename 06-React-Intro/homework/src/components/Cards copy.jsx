import React from 'react';
import Card from './Card copy.jsx';
export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  var count = 0;
  return (
    <>
      {cities.map(el => <Card key={count++} data={el}/>)}
    </>
  )
};
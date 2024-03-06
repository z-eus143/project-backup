import React from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../header/header';

export const Displayproperty = () => {
  const location = useLocation();
  const receivedData = location.state.id;

  return (
    <div>
        <Header/>
      <h2 style={{paddingTop : "100px"}}>Received Data:</h2>
      <h1> {receivedData} </h1>
    </div>
  );
}
import React from "react";
import logo from './logo.svg';
import './App.css';
import ComponentB from './componentB'
import ComponentC from './componentC'


function ComponentA(){
  return (
    
    <div className="App">
      <ComponentB />
      <ComponentC /> 
    </div>
  );
}

export default ComponentA;

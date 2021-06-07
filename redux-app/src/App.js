import React from "react";
import logo from './logo.svg';
import './App.css';
import ComponentB from './componentB'
import ComponentC from './componentC'
import store from './store'

function ComponentA(){
  return (
    
    <div className="App">
      <ComponentB store={store}/>
      <ComponentC store={store}/> 
    </div>
  );
}

export default ComponentA;

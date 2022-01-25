import React from 'react';
import './App.css';
import Homepage from './homepage';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom'; // HERE

import BeersList from './components/BeersList';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import SingleBeer from './components/SingleBeer';


import Home from './components/Home'
import Header from './components/header/Header'

function App() {
  return (
    <div className="App">
    <Header />

    <Switch> 
      <Route exact path="/" component={Home}/>
      <Route exact path="/beers" component={BeersList}/>
      <Route exact path="/beers/:id" component={SingleBeer}/>
      <Route exact path="/random-beer" component={RandomBeer} />
      <Route exact path="/new-beer" component={NewBeer} />
    </Switch>

  </div>
  );
}

export default App;

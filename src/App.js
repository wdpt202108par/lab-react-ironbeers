import React from 'react';
import './App.css';
import Homepage from './homepage';
import { Switch, Route } from 'react-router-dom';
import Allbeers from './components/Allbeers';
import Navbar from './components/Navbar';
import BeerDetails from './components/Beerdetails';
import Randombeer from './components/Randombeer';
import Newbeer from './components/Newbeer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <>
          <Navbar />
          <Route exact path="/beers" component={Allbeers} />
          <Route path="/beers/:_id" component={BeerDetails} />
          <Route path="/random-beer" component={Randombeer} />
          <Route path="/new-beer" component={Newbeer} />
        </>
      </Switch>
    </div>
  );
}

export default App;

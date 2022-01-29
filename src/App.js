import React from 'react';
import './App.css';
import Homepage from './components/homepage';
import {Switch, Route} from 'react-router-dom';
import Beer from './components/beer';
import Random from './components/randombeer';
import NewBeer from './components/newbeer';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header>
        <div>
          <Link to='/'>Homepagereturn</Link>
        </div>
      </header>
      <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/beer' component={Beer}/>
          <Route exact path='/randombeer' component={Random}/>
          <Route exact path='/newbeer' component={NewBeer}/>
        </Switch>
    </div>
  );
}

export default App;

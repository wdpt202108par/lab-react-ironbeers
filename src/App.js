import React from 'react';
import './App.css';
import Homepage from './homepage';
import { Switch, Route } from 'react-router-dom';
import Allbeers from './components/Allbeers';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/beers" component={Allbeers} />
        <Route exact path="/" component={Homepage} />
        {/* <Route path="/random-beer" component={Randombeer} /> */}
        {/* <Route path="/new-beer" component={Newbeer} /> */}
      </Switch>
    </div>
  );
}

export default App;

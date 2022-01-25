import React from 'react';
import { Switch, Route } from 'react-router-dom'; // HERE

import BeersList from './BeersList';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';

class Home extends React.Component {
  render () {
    return (
      <>
      Home Page
        <Switch> 
          <img src={"/src/assets/beers.png"} alt="all beers"/>
          <Route exact path="/beers" component={BeersList}/>

          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
        </Switch>
      </>
    ) 
  }
}

export default Home;
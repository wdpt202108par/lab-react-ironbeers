import React, { Component } from 'react';
import { Switch, Route } from "react-router";
import axios from "axios";
import Home from "./components/Home";
import BeerList from "./components/BeerList";
import SingleBeer from "./components/SingleBeer";
import './App.css';

class App extends Component {
  state = {
    beers: []
  }

  getAllBeers = () => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then(responseFromApi => {
        console.log("responseFromApi 👇", responseFromApi.data);

        this.setState({
          beers: responseFromApi.data
        });
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getAllBeers();
  }

  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" render={(routerProps) => <BeerList {...routerProps} beers={this.state.beers} />} />
        <Route path="/beers/:beerId" render={(routerProps) => <SingleBeer {...routerProps} beers={this.state.beers} />} />
      </Switch>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import SingleBeer from "./SingleBeer";

class RandomBeer extends Component {
  state = {
    randBeer: []
  }

  getRandBeer = () => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then(responseFromApi => {
        console.log("randBeer 👇", responseFromApi.data)

        const randBeerCopy = [...this.state.randBeer];
        randBeerCopy.push(responseFromApi.data);

        this.setState({
          randBeer: randBeerCopy
        })
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getRandBeer();
  }

  render() {
    if (this.state.randBeer.length === 0) return <div>Loading</div>;

    return (
      <div>
        <SingleBeer id={this.state.randBeer[0]._id} beers={this.state.randBeer} />
      </div>
    );
  }
}

export default RandomBeer;
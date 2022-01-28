import React from 'react';
import axios from 'axios';

class RandomBeer extends React.Component {
  state = {
    randomBeer:''
  }
  
  getRandomBeer = () => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then(response => {
        console.log('randomBeer',response.data)
        this.setState({randomBeer: response.data})
      })
      .catch(err => console.log("error", err))
  }

  componentDidMount() {
    this.getRandomBeer();
  }

  render () {
    return (
      <div className="single-beer-container">
        <img src={this.state.randomBeer.image_url} alt=""></img>
        <div className="cols">
          <div className="col-left">
            <h1>{this.state.randomBeer.name}</h1>
            <h3>{this.state.randomBeer.tagline}</h3>
          </div>
          <div className="col-right">
            <h3>{this.state.randomBeer.attenuation_level}</h3>
            <h5>{this.state.randomBeer.first_brewed}</h5>
          </div>
        </div>
        <p>{this.state.randomBeer.description}</p>
        <h6>{this.state.randomBeer.contributed_by}</h6>
      </div>
    ) 
  }
}

export default RandomBeer;
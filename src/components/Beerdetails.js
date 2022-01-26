import React from 'react';
import axios from 'axios';

class Beerdetails extends React.Component {
  state = {};
  componentDidMount() {
    this.getDetails();
  }
  getDetails = () => {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params._id}`
      )
      .then((response) => {
        this.setState(response.data);
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <>
        <img src={this.state.image_url} alt="beerpick"></img>
        <h1>{this.state.name}</h1>
        <h2>{this.state.tagline} </h2>
        <p>{this.state.first_brewed}</p>
        <p>{this.state.attenuation_level}</p>
        <p>{this.state.description}</p>
        <p>{this.state.contributed_by}</p>
      </>
    );
  }
}

export default Beerdetails;

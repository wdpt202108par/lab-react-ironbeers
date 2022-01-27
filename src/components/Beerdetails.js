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
      <div className='beer-details'>
        <img src={this.state.image_url} alt="beerpic"/>

        <div className='details'>
          <h1>{this.state.name}</h1>
          <p className='level'>{this.state.attenuation_level}</p>
        </div>

        <div className='details'>
          <h2>{this.state.tagline}</h2>
          <p className='brewed'>{this.state.first_brewed}</p>
        </div>
        
        <p>{this.state.description}</p>
        <p className='by'>{this.state.contributed_by}</p>

      </div>
    );
  }
}

export default Beerdetails;
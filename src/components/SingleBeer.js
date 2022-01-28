import React from 'react';
import axios from 'axios';

class SingleBeer extends React.Component {
  state = {
    singleBeer:''
  }
  
  getSingleBeer = () => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
      .then(response => {
        console.log('singleBeer',response.data)
        this.setState({singleBeer: response.data})
      })
      .catch(err => console.log("error", err))
  }

  componentDidMount() {
    this.getSingleBeer();
  }

  render () {
    return (
      <div className="single-beer-container">
        <img src={this.state.singleBeer.image_url} alt=""></img>
        <div className="cols">
          <div className="col-left">
            <h1>{this.state.singleBeer.name}</h1>
            <h3>{this.state.singleBeer.tagline}</h3>
          </div>
          <div className="col-right">
            <h3>{this.state.singleBeer.attenuation_level}</h3>
            <h5>{this.state.singleBeer.first_brewed}</h5>
          </div>
        </div>
        <p>{this.state.singleBeer.description}</p>
        <h6>{this.state.singleBeer.contributed_by}</h6>
      </div>
    ) 
  }
}

export default SingleBeer;
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class BeersList extends React.Component {
  state = {
    beers: []
  }
  
  getAllBeers = () => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then(response => {
        console.log(response.data)

        this.setState({ beers: response.data})
      })
      .catch(err => console.log("error", err))
  }

  componentDidMount() {
    this.getAllBeers();
  }

  render () {
    return (
      <>
        {
          this.state.beers.map( beer => {
            return (
              <div className="beer-container" key={beer._id}>
              <img src={beer.image_url} alt=""></img>
              <ul>
                <Link to={`/beers/${beer._id}`}><li>{beer.name}</li></Link>
                <li>{beer.tagline}</li>
                <li>Created by: {beer.contributed_by}</li>
              </ul>
            </div>
            )})
        }
      </>
    ) 
  }
}

export default BeersList;
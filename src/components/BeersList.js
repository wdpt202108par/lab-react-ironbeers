import React from 'react';
import { Link } from 'react-router-dom';

class BeersList extends React.Component {
  render () {
    return (
      <>
        <h1><Link to="/beers">All Beers</Link></h1>
      </>
    ) 
  }
}

export default BeersList;
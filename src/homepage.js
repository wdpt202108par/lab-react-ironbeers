import React from 'react';
import { Link } from 'react-router-dom';
import beers from './assets/beers.png';
import newbeer from './assets/new-beer.png';
import randombeer from './assets/random-beer.png';

class Homepage extends React.Component {
  render() {
    return (
      <>
        <h1>
          <Link to="/beers">All beers</Link>
        </h1>
        <img src={beers}></img>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <h1>
          <Link to="/random-beer">Random beer</Link>
        </h1>
        <img src={randombeer}></img>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <h1>
          <Link to="/new-beer">New beer</Link>
        </h1>
        <img src={newbeer}></img>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </>
    );
  }
}

export default Homepage;

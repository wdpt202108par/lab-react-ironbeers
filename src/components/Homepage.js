import React from 'react';
import { Link } from 'react-router-dom';
import beers from '../assets/beers.png';
import newbeer from '../assets/new-beer.png';
import randombeer from '../assets/random-beer.png';

class Homepage extends React.Component {
  render() {
    return (
      <div className='container'>
        <img className="homebeers" src={beers} alt='beerspic'></img>
        <h3>
          <Link className='link' to="/beers">All Beers</Link>
        </h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <img className='homebeers' src={randombeer} alt='randombeerpic'></img>
        <h3>
          <Link className='link' to="/random-beer">Random Beer</Link>
        </h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <img className='homebeers' src={newbeer} alt='newbeerpic'></img>
        <h3>
          <Link className='link' to="/new-beer">New Beer</Link>
        </h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    );
  }
}

export default Homepage;
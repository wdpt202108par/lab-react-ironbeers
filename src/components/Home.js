import React from 'react';
import { Link } from 'react-router-dom'

import beers from "./assets/beers.png";
import randomBeerImage from "./assets/random-beer.png";
import newBeerImage from "./assets/new-beer.png";


class Home extends React.Component {
  render () {
    return (
      <>
      Home Page

      <div className="all-beers-container" >
        <img src={beers} alt="all beers"/>
        <h1><Link to="/beers">All Beers</Link></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mi ipsum, varius a felis vitae, rutrum egestas augue. Fusce sem dolor, aliquet non est sit amet, hendrerit ornare dolor. Donec imperdiet aliquam quam a tincidunt. Etiam id accumsan nibh, vel placerat augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam magna magna, dictum ac lectus at, molestie bibendum quam. Morbi ac ante urna.</p>          
      </div>
      <div className="random-beer-container" >
        <img src={randomBeerImage} alt="random beer"/>
        <h1><Link to="/random-beer">Random Beer</Link></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mi ipsum, varius a felis vitae, rutrum egestas augue. Fusce sem dolor, aliquet non est sit amet, hendrerit ornare dolor. Donec imperdiet aliquam quam a tincidunt. Etiam id accumsan nibh, vel placerat augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam magna magna, dictum ac lectus at, molestie bibendum quam. Morbi ac ante urna.</p>          
      </div>
      <div className="new-beer-container" >
        <img src={newBeerImage} alt="new beer"/>
        <h1><Link to="/new-beer">Random Beer</Link></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mi ipsum, varius a felis vitae, rutrum egestas augue. Fusce sem dolor, aliquet non est sit amet, hendrerit ornare dolor. Donec imperdiet aliquam quam a tincidunt. Etiam id accumsan nibh, vel placerat augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam magna magna, dictum ac lectus at, molestie bibendum quam. Morbi ac ante urna.</p>          
      </div>

      </>
    ) 
  }
}

export default Home;
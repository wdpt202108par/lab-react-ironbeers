import React, { Component } from 'react';
import Beer from './beer';
import Random from './randombeer';
import NewBeer from './newbeer';
import { Link } from 'react-router-dom';

class Homepage extends Component{


render(){
      return(
          <div>
                <ul>
                <li><Link to= '/beer'>Beer</Link></li>
                <li><Link to= '/randombeer'>Random Beer</Link></li>
                <li><Link to= '/newbeer'>New Beer</Link></li>
                </ul>
            </div>
        )
    }
}

export default Homepage;



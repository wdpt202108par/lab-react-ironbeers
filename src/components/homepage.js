import React, { Component } from 'react';


class Homepage extends Component{


render(){
      return(
          <div>
                <ul>
                <li><Link to={'/beers'}>Beers</Link></li>
                <li><Link to={'/random-beer'}>Random Beer</Link></li>
                <li><Link to={'/new-beer'}>New Beer</Link></li>
                </ul>
            </div>
        )
    }
}

export default Homepage;

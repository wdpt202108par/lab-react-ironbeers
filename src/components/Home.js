import React from "react";
import NavLink from "./NavLink";

class Home extends React.Component {
  render() {
    return (
      <div>
        <NavLink 
          url="/beers"
          title="All Beers"
          img="../assets/beers.png"
        />
        <NavLink 
          url="/random-beer"
          title="Random Beer"
          img="../assets/random-beer.png"
        />
        <NavLink 
          url="/new-beer"
          title="New Beer"
          img="../assets/new-beer.png"
        />
      </div>
    );
  }

}

export default Home;
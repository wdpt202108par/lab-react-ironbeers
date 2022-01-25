import React from "react";
import Header from "./Header";
import Beer from "./Beer";

class BeerList extends React.Component {
  render() {
    console.log(this.props.beers)
    return (
      <div>
        <Header />
        {this.props.beers.map(beer => <Beer key={beer._id} id={beer._id} name={beer.name} img={beer.image_url} tagline={beer.tagline} contributor={beer.contributed_by} />)}
      </div>
    );
  }
}

export default BeerList;
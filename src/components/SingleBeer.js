import React, { Component } from "react";
import Header from "./Header";

class SingleBeer extends Component {
  getBeerDetails = (beerId) => {
    console.log("beerId", beerId)
    return this.props.beers.find(beer => beer._id === beerId);
  }

  render() {
    const beerId = this.props.id ? this.props.id : this.props.match.params.beerId;
    const beer = this.getBeerDetails(beerId);

    if (!beer) return <div>Loading</div>;

    return(
      <div>
        <Header />
        <img src={beer.image_url} alt={beer.name} width="30" />
        <div class="beer-header">
          <div class="beer-name">
            <h1>{beer.name}</h1>
            <h2>{beer.tagline}</h2>
          </div>
          <div class="beer-stats">
            <h1>{beer.attenuation_level}</h1>
            <h2>{beer.first_brewed}</h2>
          </div>
        </div>
        <article>{beer.description}</article>
        <p>{beer.contributed_by}</p>
      </div>
    );
  }
}

export default SingleBeer;
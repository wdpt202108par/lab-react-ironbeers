import React, { Component } from "react";
import axios from "axios";

class NewBeer extends Component {
  state = {
    name: null,
    tagline: null,
    description: null,
    first_brewed: null,
    brewers_tips: null,
    attenuation_level: null,
    contributed_by: null
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { name, value } = this.state;

    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {
      [name]: value
      })
      .then(() => this.setState({
        [name]: null
      }))
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />

        <label>Tagline</label>
        <input type="text" name="tagline" value={this.state.tagline} onChange={(e) => this.handleChange(e)} />

        <label>Description</label>
        <input type="text" name="description" value={this.state.description} onChange={(e) => this.handleChange(e)} />

        <label>First Brewed</label>
        <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={(e) => this.handleChange(e)} />

        <label>Brewers Tips</label>
        <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={(e) => this.handleChange(e)} />

        <label>Attenuation Level</label>
        <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={(e) => this.handleChange(e)} />

        <label>Contributed By</label>
        <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={(e) => this.handleChange(e)} />

        <button type="submit">ADD NEW</button>
      </form>
    );
  }
}

export default NewBeer;
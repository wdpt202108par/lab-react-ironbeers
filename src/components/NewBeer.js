import React from 'react';
import axios from 'axios';

class NewBeer extends React.Component {
  state = { 
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips:"",
    attenuation_level: "",
    contributed_by: ""
   }
   
  handleFormSubmit = (e) => {
    e.preventDefault();
    const name = this.state.name;
    const tagline = this.state.tagline;
    const description = this.state.description;
    const first_brewed = this.state.first_brewed;
    const brewers_tips = this.state.brewers_tips;
    const attenuation_level = this.state.attenuation_level;
    const contributed_by = this.state.contributed_by;

    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", { 
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by
    })
    .then( () => {
        this.props.getData();
        this.setState({ 
          name: "",
          tagline: "",
          description: "",
          first_brewed: "",
          brewers_tips:"",
          attenuation_level: "",
          contributed_by: ""
         });
    })
    .catch( error => console.log(error) )
  }

  handleChange = (e) => {  
      const {name, value} = e.target;
      this.setState({[name]: value});
  }

  render(){
    return(
      <div className="new-beer">
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
          <label>Tagline:</label>
          <input type="text" name="tagline" value={this.state.tagline} onChange={ e => this.handleChange(e)}/>
          <label>Description:</label>
          <textarea name="description" value={this.state.description} onChange={ e => this.handleChange(e)}/>
          <label>First Brewed:</label>
          <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={ e => this.handleChange(e)}/>
          <label>Brewers Tips:</label>
          <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={ e => this.handleChange(e)}/>
          <label>Attenuation Level:</label>
          <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={ e => this.handleChange(e)}/>
          <label>Contributed By:</label>
          <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={ e => this.handleChange(e)}/>
          <input className="submit" type="submit" value="ADD NEW" />
        </form>
      </div>
    )
  }
}

export default NewBeer;
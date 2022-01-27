import React from 'react';
import axios from 'axios';

class Newbeer extends React.Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by} = this.state;
    axios
      .post(`https://ih-beers-api2.herokuapp.com/beers/new`, {
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by,
      })
      .then(() => {
        this.setState({
          name: '',
          tagline: '',
          description: '',
          first_brewed: '',
          brewers_tips: '',
          attenuation_level: '',
          contributed_by: '',
        });
      })
      .catch(err => console.log(err))
  };

  render() {
    return (
      <div className='form'>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name 
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          />
          </label>

          <label>Tagline 
          <input
            type="text"
            name="tagline"
            value={this.state.tagline}
            onChange={(e) => this.handleChange(e)}
          />
          </label>

          <label>Description 
          <textarea
            name="description"
            value={this.state.description}
            onChange={(e) => this.handleChange(e)}
          />
          </label>

          <label>First brewed 
          <input
            type="text"
            name="first_brewed"
            value={this.state.first_brewed}
            onChange={(e) => this.handleChange(e)}
          />
          </label>

          <label>Brewers tips 
          <input
            type="text"
            name="brewers_tips"
            value={this.state.brewers_tips}
            onChange={(e) => this.handleChange(e)}
          />
          </label>

          <label>Attenuation level 
          <input
            type="number"
            name="attenuation_level"
            value={this.state.attenuation_level}
            onChange={(e) => this.handleChange(e)}
          />
          </label>

          <label>Contributed by 
          <input
            type="text"
            name="contributed_by"
            value={this.state.contributed_by}
            onChange={(e) => this.handleChange(e)}
          />
          </label>
          <button>ADD NEW</button>
        </form>
      </div>
    );
  }
}

export default Newbeer;
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Allbeers extends React.Component {
  state = { 
    listallbeers: [],
    query:'',
  };

  getAllbeers = () => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      //console.log(response.data)
      this.setState({
        listallbeers: response.data,
      });
    })
    .catch(err => console.log(err))
  };

  handleChange = (event) => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${event.target.value}`)
    .then((response) => {
      this.setState({
        listallbeers: response.data
      });
    })
    .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getAllbeers();
  }

  render() {
    const filteredBeers = this.state.listallbeers.filter((eachbeer) => eachbeer.name.toLowerCase().includes(this.state.query.toLowerCase()));

    return (
      <>
        <div className='searchparent'>
          <input className='search' type="text" name="query" placeholder="Search" value={this.query} onChange={this.handleChange} />
        </div>
        {filteredBeers.map((eachbeer) => {
          return (
            <div className='allbeers' key={eachbeer._id}>
              <div className="beerimg">
                <img src={eachbeer.image_url} alt="beerpic"/>
              </div>

              <div>
                <h1>
                  <Link className='allbeerslink' to={`/beers/${eachbeer._id}`}>{eachbeer.name}</Link>
                </h1>
                <h3>{eachbeer.tagline}</h3>
                <p><b>Created by:</b> {eachbeer.contributed_by}</p>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default Allbeers;
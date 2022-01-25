import React from 'react';
import axios from 'axios';

class Allbeers extends React.Component {
  state = { Listallbeers: [] };
  getAllbeers = () => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      this.setState({
        Listallbeers: response.data,
      });
    });
  };
  componentDidMount() {
    this.getAllbeers();
  }
  render() {
    return (
      <>
        {this.state.Listallbeers.map((eachbeer) => {
          return (
            <div key={eachbeer._id}>
              <img src={eachbeer.image_url} />
              <h2>{eachbeer.name}</h2>
              <h3>{eachbeer.tagline}</h3>
              <p>created by: {eachbeer.contributed_by}</p>
            </div>
          );
        })}
      </>
    );
  }
}
export default Allbeers;

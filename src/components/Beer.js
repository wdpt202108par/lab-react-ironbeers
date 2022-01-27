import React from "react";
import { Link } from "react-router-dom";

function Beer(props) {
  return (
    <div>
      <img src={props.img} alt="" width="30"/>
      <h1><Link to={`/beers/${props.id}`}>{props.name}</Link></h1>
      <h2>{props.tagline}</h2>
      <p>Created by: {props.contributor}</p>
      <hr />
    </div>
  );
}

export default Beer;
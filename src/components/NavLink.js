import React from "react";
import { Link } from "react-router-dom";

function NavLink(props) {
  return (
    <Link to={props.url}>
      <img src={props.img} alt="" />
      <h2>{props.title}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </Link>
  );
}

export default NavLink;
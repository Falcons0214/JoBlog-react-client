import React from "react";
import { Link } from "react-router-dom";
import "./Items.css";

function Items(props) {
  const items = props.items;
  const list = items.map((item) => (
    <li key={item.title}>
      <Link to={item.url}>
        <span onClick={props.navClose}>{item.title}</span>
      </Link>
    </li>
  ));
  return <nav className="list-container">{list}</nav>;
}

export default Items;

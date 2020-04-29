import React from "react";
import FavoriteActions from "./FavoriteActions";
//import { Router,Route } from 'react-router';
import { Link } from "react-router-dom";

const Dog = ({
  id,
  name,
  toggle,
  getStatus,
}) => {
  return (
    <li
      key={id}
      style={{
        margin: "15px",
      }}
    >
      <span
        style={{
          display: "inline-block",
          marginRight: "15px",
        }}
      >
        <Link to={`/detay/${id}/${name}`}>
          <h4>{name}</h4>
        </Link>
      </span>
      <FavoriteActions toggle={toggle} id={id} getStatus={getStatus} />
    </li>
  );
};

export default Dog;

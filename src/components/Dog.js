import React from "react";
import FavoriteActions from "./FavoriteActions";
//import { Router,Route } from 'react-router';
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from 'reactstrap';

const Dog = ({
  id,
  name,
  toggle,
  getStatus,
}) => {
  return (
    <ListGroup>
    <ListGroupItem>
      <span
        style={{
          display: "inline-block",
          marginRight: "15px",
        }}
      >
        <Link to={`/detay/${id}/${name}`}>
          <h5>{name}</h5>
        </Link>
      </span>
      <FavoriteActions toggle={toggle} id={id} getStatus={getStatus} />
      </ListGroupItem>
    </ListGroup>
  );
};

export default Dog;

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
  loadingFavorites
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
          <h6>{name}</h6>
        </Link>
      </span>
      <FavoriteActions loadingFavorites={loadingFavorites} toggle={toggle} id={id} getStatus={getStatus} />
      </ListGroupItem>
    </ListGroup>
  );
};

export default Dog;

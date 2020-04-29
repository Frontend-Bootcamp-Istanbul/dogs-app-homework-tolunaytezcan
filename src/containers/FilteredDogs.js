import React from "react";
import dogs from "../dogsdata";
import { Link } from "react-router-dom";

const FilteredDogs = (props) => {
  const secilenTur = props.match.params.yazilanTur;
  const filteredDogs = dogs.filter((dog) => dog.breedSlug === secilenTur);

  return (
    <div>
      <h4>Selected breeds: {secilenTur}</h4>
      <ul>
        <li>
          {filteredDogs.map((dog) => {
            return (
              <li key={dog.id}>
                <Link to={`/detay/${dog.id}/${dog.name}`}>
                  <h5>{dog.name}</h5>
                </Link>
              </li>
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default FilteredDogs;

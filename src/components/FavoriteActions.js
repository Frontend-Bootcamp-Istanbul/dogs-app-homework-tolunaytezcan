import React from 'react';
import { Button } from "reactstrap";

const FavoriteActions = (props) => {
    let loadingFavorites = props.loadingFavorites
    return (
        <div>
            {
                props.getStatus(props.id) ?
                    <Button disabled={loadingFavorites} color="warning" onClick={() => { props.toggle(props.id) }}>Favorite ✓</Button>
                    
                    : <Button color="primary" onClick={() => { props.toggle(props.id) }}>Add to Favorites</Button>
            }
        </div>
    );
};

export default FavoriteActions;
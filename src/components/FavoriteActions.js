import React from 'react';
import { Button } from "reactstrap";

const FavoriteActions = (props) => {
    return (
        <div>
            {
                props.getStatus(props.id) ?
                    <Button disabled={props.loadingID ===props.id} color="warning" onClick={() => { props.toggle(props.id) }}>Favorite ✓</Button>
                    : <Button disabled={props.loadingID ===props.id} color="primary" onClick={() => { props.toggle(props.id) }}>Add to Favorites</Button>
            }
        </div>
    );
};

export default FavoriteActions;
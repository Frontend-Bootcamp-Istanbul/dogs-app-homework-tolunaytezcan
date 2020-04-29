import React from 'react';
import { Button } from "reactstrap";

const FavoriteActions = (props) => {
    let x;
    props.loadingID ===props.id? x=true : x=false
    return (
        <div>
            {
                props.getStatus(props.id) ?
                    <Button disabled={x} color="warning" onClick={() => { props.toggle(props.id) }}>Favorite ✓</Button>
                    : <Button disabled={x} color="primary" onClick={() => { props.toggle(props.id) }}>Add to Favorites</Button>
            }
        </div>
    );
};

export default FavoriteActions;
import React from 'react';
import { Button } from "reactstrap";

const Favoriler = (props) => {
    return (
        <div>
            {

                props.getStatus(props.id) ?
                    <Button color="warning" onClick={() => { props.toggle(props.id) }}>Favorite ✓</Button>
                    : <Button color="primary" onClick={() => { props.toggle(props.id) }}>Add to Favorites</Button>
            }
        </div>
    );
};

export default Favoriler;
import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Breadcrumb, BreadcrumbItem } from "reactstrap";

export default function Turler() {
    return (
        <div style={{
            width: "1000px",
            height: "500px",
            display: "inline-block",
        }}>
            <Breadcrumb>
                <BreadcrumbItem >
                    <b>All Breeds</b>
                </BreadcrumbItem >
            </Breadcrumb>

            <ListGroup>
                <ListGroupItem>
                    <Link to={`/tur/cavalier-king-charles-spaniel`}>
                        <h5>Cavalier King Charles Spaniel</h5>
                    </Link>
                </ListGroupItem>
                <ListGroupItem>
                    <Link to={`/tur/golden-retriever`}>
                        <h5>Golden Retriever</h5>
                    </Link>
                </ListGroupItem>
                <ListGroupItem>
                    <Link to={`/tur/chihuahua`}>
                        <h5>Chihuahua</h5>
                    </Link>
                </ListGroupItem>
                <ListGroupItem>
                    <Link to={`/tur/shepherd`}>
                        <h5>Shepherd</h5>
                    </Link>
                </ListGroupItem>
                <ListGroupItem>
                    <Link to={`/tur/others`}>
                        <h5>Others</h5>
                    </Link>
                </ListGroupItem>
            </ListGroup>



            <hr />
            <Link to={`/`}><h6>Return Homepage</h6></Link>
        </div>
    );
}

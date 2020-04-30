import React from 'react';
import dogs from "../dogsdata";
//import { Button } from "reactstrap";
//import FavoriteActions from "../components/FavoriteActions";
import Dog from "../components/Dog";
import axios from "axios";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const apiHost = "https://5ea5687c2d86f00016b45bbd.mockapi.io";

class Homepage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            favorites: [],
            loadingFavorites: false,
            loadingID:null
        }
    }
    componentDidMount() {
        // localstoragedan getirme
        /*        this.setState({
                    favorites: window.localStorage.getItem("favorites") ? JSON.parse(window.localStorage.getItem("favorites")): []
                })*/

        this.setState({
            loadingFavorites: true
        }, () => {
            axios.get(`${apiHost}/favorites`).then((result) => {
                this.setState({
                    favorites: result.data,
                    loadingFavorites: false
                })
            }).catch((err) => {
                console.log("Axios err", err);
                this.setState(({
                    loadingFavorites: false
                }))
            })
        })
    }

    toggle = (dogId) => {

        this.setState({loadingID:dogId})
        const foundDog = this.state.favorites.find((favorite) => favorite.dogId === dogId);
        if (foundDog) {
            axios.delete(`${apiHost}/favorites/${foundDog.id}`).then((result) => {
                this.setState(({
                    favorites: this.state.favorites.filter((dog) => dog.dogId !== dogId),
                    loadingID:null
                    //null almazsan hep kilitli kalıyor
                }))
            }).catch((err) => {
                console.log(err);
            });
        } else {
            // window.localStorage.setItem("favorites", JSON.stringify(this.state.favorites));
            axios.post(`${apiHost}/favorites`, {
                dogId
            }).then((result) => {
                const eklenenFavori = result.data; // {id: 1, dogId: benim yolladigim dog id, createdat: date}
                this.setState({
                    favorites: [...this.state.favorites, eklenenFavori],
                    loadingID:null
                      //null almazsan hep kilitli kalıyor
                })
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    getStatus = (dogId) => {
        const foundDog = this.state.favorites.find((favorite) => favorite.dogId === dogId);
        return foundDog;
    }

    render() {
        if (this.state.loadingFavorites) {
            return <div>
                <h3>Loading...</h3>
            </div>
        }
        return (
            <div>
                  <Breadcrumb>
                <BreadcrumbItem >
                <Link to={`/tur`}>
                        <b>All Breeds</b>
                    </Link>
                </BreadcrumbItem >
            </Breadcrumb>
                {
                    dogs.map((dog) => {
                        return <Dog loadingID={this.state.loadingID} toggle={this.toggle} id={dog.id} getStatus={this.getStatus} {...dog} />
                    })
                }
                

            </div>
        );
    }
}

export default Homepage;
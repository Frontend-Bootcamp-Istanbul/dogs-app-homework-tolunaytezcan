import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import { Switch, Route, Router } from "react-router-dom";
import routes from "./routes";
import Homepage from "./containers/Homepage";
import FilteredDogs from "./containers/FilteredDogs";
import DetailDogs from "./containers/DetailDog";
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/About-us" exact component={() => <div>Hakkimizda Componenti</div>}/>
                    <Route path="/tur" exact component={FilteredDogs} />
                    <Route path="/tur/:yazilanTur" exact component={FilteredDogs} />
                    <Route path="/detay/:id/:name" exact component={DetailDogs} />
                    <Route component={() => (<div><h1>404 sayfa bulununamadi</h1></div>)}/>
                    {/*{*/}
                    {/*    routes.map((route) => {*/}
                    {/*        // <Route {...route} />*/}
                    {/*        return <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />*/}
                    {/*    })*/}
                    {/*}*/}
                </Switch>
            </div>
        );
    }
}

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/sign-in.component";
import Welcome from "./components/welcome.component";
// import TitlebarGridList from "./components/season-list.component";
import InSeason from "./components/in-season.component";
import IngredientDetails from "./components/ingredient-details.component";
import SimpleGrow from "./components/animation.component";
import NotFound from "./components/not-found.component";
import moment from "moment";
import localization from "moment/locale/de";

function App() {

  moment().locale("de", localization);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/* <Route path="/in-season">
            <TitlebarGridList />
          </Route> */}
          <Route path="/in-season">
            <InSeason month={0}/>
          </Route>
          <Route path="/ingredient-details/:id">
            <IngredientDetails />
          </Route>
          <Route path="/ani">
            <SimpleGrow />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

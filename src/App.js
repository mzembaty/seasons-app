import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/registration/sign-in.component";
import Welcome from "./components/registration/welcome.component";
import InSeason from "./components/seasonal/in-season.component";
import IngredientDetails from "./components/ingredient-detail/ingredient-details.component";
import SimpleGrow from "./components/animation.component";
import NotFound from "./components/not-found.component";
import moment from "moment";
import localization from "moment/locale/de";
import ShoppingList from "./components/shopping-list/shopping-list.component";
import AppHeader from "./components/layout/app-header.component";
// import Test from "./components/test.component";

function App() {
  moment().locale("de", localization);
  return (
    <div className="App">
      <Router>
        <AppHeader />
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/in-season">
            <InSeason month={0} />
          </Route>
          <Route path="/ingredient-details/:id">
            <IngredientDetails />
          </Route>
          <Route path="/ani">
            <SimpleGrow />
          </Route>
          <Route exact path="/shopping-list/:ingredientsJson">
            <ShoppingList />
          </Route>
          <Route path="/shopping-list">
            <ShoppingList />
          </Route>
          {/* <Route path="/test">
              <Test />
            </Route> */}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

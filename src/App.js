import React, { useContext } from "react";
import {
  Switch,
  Route,
  withRouter,
  __RouterContext
} from "react-router-dom";
import { useTransition, animated } from "react-spring";

import "./App.css";
import Login from "./components/registration/sign-in.component";
import Welcome from "./components/registration/welcome.component";
import InSeason from "./components/seasonal/in-season.component";
import IngredientDetails from "./components/ingredient-detail/ingredient-details.component";
// import SimpleGrow from "./components/animation.component";
import NotFound from "./components/not-found.component";
import moment from "moment";
import localization from "moment/locale/de";
import ShoppingList from "./components/shopping-list/shopping-list.component";
import AppHeader from "./components/layout/app-header.component";
import Test from "./components/test";

function App() {
  moment().locale("de", localization);

  let { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(10%, 0)" },
    enter: { opacity: 1, transform: "translate(0%, 0)" },
    leave: { opacity: 0, transform: "translate(-5%, 0)" }
  });

  return (
    <>
      <AppHeader />
      <main className="App">
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/login" component={Login} />
                <Route path="/in-season" component={InSeason} />
                <Route
                  path="/ingredient-details/:id"
                  component={IngredientDetails}
                />
                <Route
                  path="/shopping-list/:ingredientsJson"
                  component={ShoppingList}
                />
                <Route exact path="/shopping-list" component={ShoppingList} />
                <Route exact path="/test" component={Test} />
                <Route path="/*" component={NotFound} />
            </Switch>
          </animated.div>
        ))}
      </main>
    </>
  );
}

export default withRouter(App);

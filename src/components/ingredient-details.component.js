import React from "react";
import IngredientHeader from "./ingredient-header.component";
import img from "../img/vegetables/tomatoes.jpg";
import { ArrowBack } from "@material-ui/icons";
import { Link } from "react-router-dom";
import RecipeList from "./recipe-list.component";

export default function IngredientDetails() {
  return (
    <div>
      <Link to="/in-season2">
        <ArrowBack />
      </Link>
      <IngredientHeader img={img} />

      <RecipeList />
    </div>
  );
}

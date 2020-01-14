import React from "react";
import IngredientHeader from "./ingredient-header.component";
// import product from "../img/vegetables/tomatoe.jpg";
import { ArrowBack } from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";
import ImgGrid from "./img-grid.component";
import products from "../mock-data/products-agriculture";
import recipes from "../mock-data/recipes";
import AbsoluteWrapper from "../absolute-wrapper.component";
import { CssBaseline } from "@material-ui/core";

// function findIngredientRecipe(ingredientId) {
//   recipes.map(recipe => {
//     // console.log( recipe.ingredients.filter((ingredient) => ingredient.id === ingredientId))
//     console.log( recipe.ingredients.map(ingredient => ingredient.id))
//   });
// }

function findIngredientRecipe(ingredientId) {
  return recipes.filter(
    recipe =>
      recipe.ingredients.filter(ingredient => ingredient.id === ingredientId)
        .length > 0
  );
}

export default function IngredientDetails() {
  let { id } = useParams();
  id = parseInt(id);
  const product = products.filter(product => product.id === id)[0];

  const ingredientProducts = findIngredientRecipe(id);

  return (
    <AbsoluteWrapper>
      <CssBaseline />
      <Link to="/in-season">
        <ArrowBack />
      </Link>

      <IngredientHeader product={product} />

      <ImgGrid items={ingredientProducts} />
    </AbsoluteWrapper>
  );
}

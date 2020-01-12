import React from "react";
import IngredientHeader from "./ingredient-header.component";
// import product from "../img/vegetables/tomatoe.jpg";
import { ArrowBack } from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";
import ImgGrid from "./img-grid.component";
import products from "./mock-data/products-agriculture";
import recipes from "./mock-data/recipes"


export default function IngredientDetails() {
  
  let {id}  = useParams();
  id = parseInt(id)
  const product = products.filter( (product) => product.id === id)[0]

  return (
    <div>
      <Link to="/in-season">
        <ArrowBack />
      </Link>

      <IngredientHeader product={product} />

      <ImgGrid items={recipes} />

    </div>
  );
}

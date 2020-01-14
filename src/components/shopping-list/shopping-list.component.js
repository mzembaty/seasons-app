import React, { useState, useEffect } from "react";
import ItemForm from "./item-form";
import Item from "./item";
import { Container, List, Button, Paper, makeStyles } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { useParams } from "react-router-dom";
import products from "../mock-data/products-agriculture";

const useStyles = makeStyles(theme => ({
  deleteAllBtn: {
    margin: "1rem"
  }
}));

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    let x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function loadStorage() {
  if (storageAvailable("localStorage")) {
    let loadedItems = localStorage.getItem("items");
    if (loadedItems === null) return [];
    return JSON.parse(loadedItems);
  } else return [];
}

function parseIngredients(ingredientsJson) {
  if (ingredientsJson) {
    let ingredients = JSON.parse(ingredientsJson);
    // console.log(ingredients);
    return addProductNameToIngredients(ingredients);
  }
}

function addProductNameToIngredients(ingredients) {
  return ingredients.map(ingredient => {
    let foundProduct = products.filter(product => product.id === ingredient.id);
    ingredient.name = foundProduct[0].name;
    return ingredient;
  });
}

export default function ShoppingList() {
  let [items, setItems] = useState(loadStorage());
  const classes = useStyles();
  let { ingredientsJson } = useParams();

  const addItem = text => {
    const newItems = [...items, { text }];
    setItems(newItems);
    // populate storage
    localStorage.setItem("items", JSON.stringify(newItems));
  };

  const completeItem = index => {
    const newItems = [...items];
    newItems[index].isCompleted = true;
    setItems(newItems);
  };

  const removeItem = index => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    localStorage.setItem("items", JSON.stringify(newItems));
  };

  const deleteAll = () => {
    setItems([]);
    localStorage.clear();
  };


  // share API
  let itemsString = JSON.stringify(items)
  const URL = `https://saisonal-essen.netlify.com/${itemsString}`
  console.log(URL)
  
  const shareMe = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "SEASONS - Einkaufsliste",
          text: "Die Einkaufsliste die ich erstellt habe.",
          url: URL
        })
        .then(() => console.log("Successful share"))
        .catch(error => console.log("Error sharing", error));
      console.log("Share");
    }
  }

  useEffect(() => {
    if (ingredientsJson) {
      // Update the document title using the browser API
      let ingredients = parseIngredients(ingredientsJson);
      let newItems = items;
      ingredients.map(ingredient => {
        newItems = newItems.concat({
          text: `${ingredient.name} ${ingredient.amount} ${ingredient.measurement}`
        });
        setItems(newItems);
        localStorage.setItem("items", JSON.stringify(newItems));
        return null;
      });
    }
  }, []);

  return (
    <Container disableGutters maxWidth="sm">
      <Paper>
        <ItemForm addItem={addItem} />
        <List>
          {items.map((item, index) => (
            <Item
              key={index}
              index={index}
              item={item}
              completeItem={completeItem}
              removeItem={removeItem}
            />
          ))}
        </List>
        <Button
          className={classes.deleteAllBtn}
          variant="outlined"
          // color="secondary"
          endIcon={<HighlightOffIcon />}
          onClick={deleteAll}
        >
          Alles Löschen
        </Button>
        <Button onClick={shareMe}>shareMe</Button>
      </Paper>
    </Container>
  );
}

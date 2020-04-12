import React, { useState, useEffect } from "react";
import ItemForm from "./item-form";
import Item from "./item";
import { Container, List, Button, Paper, makeStyles, CssBaseline } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { useParams } from "react-router-dom";
import products from "../mock-data/products-agriculture";
import AbsoluteWrapper from "../absolute-wrapper.component";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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

  const [open, setOpen] = React.useState(false);

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
    handleClose();
  };


const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

  // share API
  let itemsString = JSON.stringify(items);
  const URL = `https://saisonal-essen.netlify.com/${itemsString}`;
  console.log(URL);

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
  };

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
  }, [ingredientsJson, items]);

  return (
    <AbsoluteWrapper>
      <CssBaseline />
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
          <div>
            <Button variant="outlined"
            className={classes.deleteAllBtn}
            onClick={handleClickOpen}
            endIcon={<HighlightOffIcon />}>
              Alles Löschen
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Einkaufsliste löschen?"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Möchten Sie wirklich alle EInträge in der Einkaufsliste löschen?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                  Oh Gott, NEIN!
                </Button>
                <Button onClick={deleteAll} color="primary">
                  Alles Löschen
                </Button>
              </DialogActions>
            </Dialog>
          </div>

          {navigator.share && <Button onClick={deleteAll}>shareMe</Button>}
        </Paper>
      </Container>
    </AbsoluteWrapper>
  );
}

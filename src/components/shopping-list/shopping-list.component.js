import React, { useState } from "react";
import ItemForm from "./item-form";
import Item from "./item";
import { Container, List, Button, Paper, makeStyles } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
// import { useParams } from "react-router-dom";

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

// if (storageAvailable("localStorage")) {
//   console.log("Storage there");
//   let loadedItems = loadStorage()
//   setItems(loadedItems)
// } else {
//   console.log("Storage NOT there");
// }

export default function ShoppingList() {
  const [items, setItems] = useState(loadStorage());
  const classes = useStyles();
  // let { topicId } = useParams();

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
  };

  return (
    <Container disableGutters maxWidth="sm">
      <Paper>
        {/* <h1>{topicId}</h1> */}
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
      </Paper>
    </Container>
  );
}

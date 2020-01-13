import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { TextField, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  inputAmount: {
    width: 90
  },
  inputProduct: {
    width: 150
  },
  addButton: {
    margin: 10,
    boxShadow: "none"
  }
});

export default function ItemForm({ addItem }) {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addItem(`${value} ${amount}`);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        className={classes.inputProduct}
        margin="dense"
        id="product-input"
        label="Ware"
        variant="outlined"
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <TextField
        className={classes.inputAmount}
        id="outlined-number"
        label="Menge"
        margin="dense"
        variant="outlined"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <Fab
        color="secondary"
        aria-label="add"
        size="small"
        className={classes.addButton}
        type="submit"
      >
        <AddIcon />
      </Fab>
    </form>
  );
}

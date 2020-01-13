import React from "react";
import CheckboxList from "./checkbox-list.component";
import {
  Paper,
  // makeStyles
} from "@material-ui/core";
import ShoppingForm from "./shopping-form.component";

// const useStyles = makeStyles(theme => ({
// }));

export default function ShoppingList() {
  // const classes = useStyles();

  return (
    <div>
      <Paper elevation={3}>
        <header>
          <ShoppingForm />
        </header>
      </Paper>
      <Paper elevation={2}>
        <CheckboxList />
      </Paper>
    </div>
  );
}

import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { withStyles, TextField, Fab } from "@material-ui/core";

const styles = {
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
};

export default class ShoppingForm extends React.Component {
  // const classes = useStyles();

  constructor(props) {
    super(props);

    this.addItem = this.addItem.bind(this);

    this.state = {
      items: []
    };
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,

        key: Date.now()
      };

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      this._inputElement.value = "";
    }

    console.log(this.state.items);

    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.addItem}>
        <TextField
          //   className={classes.inputProduct}
          margin="dense"
          id="product-input"
          label="Ware"
          variant="outlined"
          ref={a => (this._inputElement = a)}
        />
        <TextField
          //   className={classes.inputAmount}
          id="outlined-number"
          label="Menge"
          margin="dense"
          variant="outlined"
        />
        <Fab
          color="secondary"
          aria-label="add"
          size="small"
          //   className={classes.addButton}
          type="submit"
        >
          <AddIcon />
        </Fab>
      </form>
    );
  }
}

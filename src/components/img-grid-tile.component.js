import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  GridListTile,
  GridListTileBar,
  ButtonGroup
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles({
  media: {
    height: 180
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  },
  actionBar: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <GridListTile className={classes.media}>
      <img src={props.media.img} alt={props.name} />
      <GridListTileBar
        className={classes.actionBar}
        style={{ height: "auto" }}
        title={props.media.name}
        actionIcon={
          <ButtonGroup aria-label="primary button group">
            <IconButton
              aria-label={`add to favourites `}
              className={classes.icon}
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label={`share`} className={classes.icon}>
              <ShareIcon />
            </IconButton>
            <IconButton
              aria-label={`add to shopping list`}
              className={classes.icon}
            >
              <AddShoppingCartIcon />
            </IconButton>
          </ButtonGroup>
        }
      />
    </GridListTile>
  );
}

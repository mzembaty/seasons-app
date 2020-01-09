import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    maxWidth: 1000,
    backgroundColor: "#2196f3",
    color: "white"
  },
  media: {
    height: 300
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={props.img}
        title="Contemplative Reptile"
      />
      <CardContent>
        <header>
        <Typography gutterBottom variant="overline" component="sub">
          <Box fontWeight={"bold"}>Aug-Sep</Box>
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          <Box fontWeight={"bold"}>Tomate</Box>
        </Typography>
        </header>
        <Typography variant="body1" component="p">
          Am besten Sonnengereift, z.B. aus dem Garten. Sie liefern Vitamin C,
          Provitamin A, Vitamin E und Folsäure.
        </Typography>
      </CardContent>
    </Card>
  );
}

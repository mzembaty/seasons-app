import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import { Box, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: theme.palette.primary.main,
    color: "white"
  },
  media: {
    height: 300
  },
  month: {
    color: theme.palette.secondary.main,
    display: "inline",
    margin: 10
  }
}));

function findSeasonMonths(arr, threshold) {
  return arr.reduce((a, element, index) => {
    if (element >= threshold) a.push(index);
    return a;
  }, []);
}

export default function MediaCard(props) {
  const classes = useStyles();
  let seasonMonths = findSeasonMonths(props.product.seasonMainGer, 25);
  const months = moment.months();
  seasonMonths = seasonMonths.map(index => {
    return months[index].substring(0, 3);
  });

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={props.product.img.imgBig} />
      <CardContent>
        <header>
          <Typography gutterBottom variant="h5" component="h2">
            <Box fontWeight={"bold"}>{props.product.name}</Box>
          </Typography>
        </header>

        <Grid container spacing={0}>
          <Box fontWeight={500} className={classes.month}>
            Saison:
          </Box>
          {seasonMonths.map((month, i) => (
            <Grid item key={i} className={classes.month}>
              {month}
            </Grid>
          ))}
        </Grid>
        <Typography variant="body1" component="p">
          Am besten Sonnengereift, z.B. aus dem Garten. Sie liefern Vitamin C,
          Provitamin A, Vitamin E und Folsäure.
        </Typography>
      </CardContent>
    </Card>
  );
}

import React from "react";
import {
  Grid,
  Container,
  Typography,
  Box,
  makeStyles
} from "@material-ui/core";
import {Link} from "react-router-dom"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: "25px"
  },
  itemTitel: {
    wordBreak: "break-all"
  }
}));

export default props => {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Container>
        <Typography component="h2" variant="h5" gutterBottom color="primary">
          <Box fontWeight={800}>{props.title}</Box>
        </Typography>

        <Grid container item xs={12} spacing={3}>
          {props.items.map(item => (
            <Grid item xs={4} key={item.name} zeroMinWidth>
              <Link to="/ingredient-details">
                <img
                  src={item.img.imgBig}
                  height="100"
                  alt={item.name}
                  className={classes.image}
                />
              </Link>
              <Typography variant="subtitle1" component="h5">
                <Box fontWeight={"bold"} className={classes.itemTitel}>
                  {item.name}
                </Box>
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Grid>
  );
};

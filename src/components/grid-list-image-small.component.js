import React from "react";
import {
  Grid,
  Container,
  Typography,
  Box,
  makeStyles
} from "@material-ui/core";
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

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
  },
  link: {
    transform: "translateZ(0)",
    boxShadow: "0 0 1 rgba(0, 0, 0, 0)",
    backfaceVisibility: "hidden",
    transitionDuration: "0.3s",
    transitionProperty: "transform",
    '&:hover': {
      transform: "scale(1.1)"
    },
    linkText: {
      '&:hover': {
        textDecoration: "none"
      }
    }
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
            <Grid item xs={4} key={item.name} zeroMinWidth className={classes.link}>
              <Link to="/ingredient-details" component={RouterLink} color="textPrimary">
                <img
                  src={item.img.imgBig}
                  height="100"
                  alt={item.name}
                  className={classes.image}
                />
                <Typography variant="subtitle1" component="h5" color="inherit" >
                  <Box fontWeight={"bold"} className={classes.itemTitel} hover="none">
                    {item.name}
                  </Box>
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Grid>
  );
};

import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import tileData from "./photo-data-fruits";
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Tabs,
  Tab,
  Container
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Box from "@material-ui/core/Box";
import vegetables from "./photo-data-vegetables";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: "25px"
  }
}));

const handleChange = () => {
  console.info("You clicked the Chip.");
};

export default function NestedGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Saisonales Essen
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>

      <Tabs
        value={0}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        centered
      >
        <Tab label="Saison" />
        <Tab label="Nebensaison" />
        <Tab label="Alle" />
      </Tabs>

      <br />

      <Grid container spacing={1}>
        <Container>
          <Typography component="h2" variant="h5" gutterBottom color="primary">
            <Box fontWeight={800}>Gemüse</Box>
          </Typography>

          <Grid container item xs={12} spacing={3}>
            {vegetables.map(tile => (
              <Grid item xs={4} key={tile.title}>
                <Link to="/ingredient-details">
                  <img
                    src={tile.img}
                    height="100"
                    alt={tile.title}
                    className={classes.image}
                  />
                </Link>
                <Typography variant="subtitle1" component="h5">
                  <Box fontWeight={"bold"}>{tile.title}</Box>
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>

      <br />

      <Grid container spacing={1}>
        <Container>
          <Typography component="h2" variant="h5" gutterBottom color="primary">
            <Box fontWeight={800}>Früchte</Box>
          </Typography>

          <Grid container item xs={12} spacing={3}>
            {tileData.map(tile => (
              <Grid item xs={4} key={tile.title}>
                <img
                  src={tile.img}
                  height="100"
                  alt={tile.title}
                  className={classes.image}
                />
                <Typography variant="subtitle1" component="h5">
                  <Box fontWeight={"bold"}>{tile.title}</Box>
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>
    </div>
  );
}

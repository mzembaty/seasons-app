import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, Link, Typography, Box } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import AppleIcon from "@material-ui/icons/Apple";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import logo from "../../img/logo.png";

const useStyles = makeStyles(theme => ({
  list: {
    width: 200,
    background: theme.palette.primary.light,
    height: "100%"
  },
  fullList: {
    width: "auto"
  },
  title: {
    textAlign: "center"
  },
  logo: {
    borderRadius: "50%"
  }
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <header className={classes.title}>
          <img
            src={logo}
            alt="seasons logo"
            height="100px"
            width="100px"
            className={classes.logo}
          />
          <Typography variant="h5" gutterBottom>
            {" "}
            <Box fontWeight="bold"> SEASONS</Box>
          </Typography>
        </header>
        {[
          { text: "Saisonales", link: "/in-season" },
          { text: "Einkaufliste", link: "/shopping-list" }
        ].map((navLink, index) => (
          <Link
            to={navLink.link}
            component={RouterLink}
            color="textPrimary"
            key={navLink.text}
          >
            <ListItem button>
              <ListItemIcon>
                {index % 2 === 0 ? <AppleIcon /> : <ShoppingCartIcon />}
              </ListItemIcon>
              <ListItemText primary={navLink.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <IconButton
        edge="start"
        // className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer("left", true)}
      >
        <MenuIcon />
      </IconButton>
      {/* <Button onClick={toggleDrawer('left', true)}>Open Left</Button> */}
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  );
}

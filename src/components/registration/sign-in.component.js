import React from "react";
// import Avatar from '@material-ui/core/Avatar';
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import indigo from "@material-ui/core/colors/indigo";
import grey from "@material-ui/core/colors/grey";

import logo from "../../logo.png";
import AbsoluteWrapper from "../absolute-wrapper.component";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      Seasons {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: "50px",
    padding: "1rem"
  },
  title: {
    color: indigo[500],
    fontWeight: "bold"
  },
  muted: {
    color: grey[500],
    fontWeight: "bold"
  }
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <AbsoluteWrapper>
    <Container maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={logo} alt="logo"></img>
        <Typography component="h1" variant="h3" color="primary">
          <Box fontWeight={800}>
            SEASONS{" "}
            <Typography component="sup" className={classes.muted}>
              ALPHA
            </Typography>
          </Box>
        </Typography>
        {/* <span className={classes.muted}>ALPHA</span> */}
        {/* <Typography className={classes.muted}>ALPHA</Typography>  */}
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Link to="/in-season">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log In
            </Button>
          </Link>
          <Grid container>
            <Grid item xs>
              <Link to="/login" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/login" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </AbsoluteWrapper>
  );
}

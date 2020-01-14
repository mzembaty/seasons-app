import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    wrapper: {
      position: "absolute",
      width: "100%"
    }
  }));

const AbsoluteWrapper = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.wrapper}>{children}</div>;
};

export default AbsoluteWrapper;

import React from "react";
import { useLocation } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

export default function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <CssBaseline />
      <h1>ERROR 404 - Page Not Found</h1>
      <h3>
        Sorry we cannot find :(<code>{location.pathname}</code>
      </h3>
    </div>
  );
}

import React from "react";
import { useLocation } from "react-router-dom";

export default function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h1>ERROR 404 - Page Not Found</h1>
      <h3>
        Sorry we cannot find <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

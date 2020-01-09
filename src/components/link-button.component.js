import React from "react";
import Button from "@material-ui/core/Button";

export default function LinkButton(props) {
  return (
    <a href={props.btn.link}>
      <Button
        variant={props.btn.variant}
        color={props.btn.color}
        size="large"
      > {props.children}</Button>
    </a>
  );
}

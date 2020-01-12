import React from "react";
import Grid from "@material-ui/core/Grid";
import ImgGridTile from "./img-grid-tile.component";


export default function ImgGrid(props) {

  return (
      <Grid container spacing={0}>
        {props.items.map((item, i) => (
          <Grid item xs={6} md={3} keys={i}>
            <ImgGridTile media={item} />
          </Grid>
        ))}
      </Grid>
  );
}

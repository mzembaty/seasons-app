import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
// import InfoIcon from '@material-ui/icons/Info';
import tileData from "../photo-data-fruits";
import { Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));

export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <GridList cellHeight={100} spacing={2}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Fruites</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  {/* <InfoIcon /> */}
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      </Container>

    // <Container maxWidth="lg">
    //   <GridList cellHeight={160} className={classes.gridList} cols={3}>
    //     {tileData.map(tile => (
    //       <GridListTile key={tile.img} cols={tile.cols || 1}>
    //         <img src={tile.img} alt={tile.title} />
    //       </GridListTile>
    //     ))}
    //   </GridList>
    // </Container>
  );
}

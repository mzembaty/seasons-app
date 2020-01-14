import React, { Component } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import TabsFullWidth from "./tabs-full-width.component";
import GridListImageSmall from "./grid-list-image-small.component";
import { FormControl, Select, MenuItem, Paper, CssBaseline } from "@material-ui/core";
import moment from "moment";

// mock data
import products from "../mock-data/products-agriculture";
import AbsoluteWrapper from "../absolute-wrapper.component";

export default class extends Component {
  constructor(props) {
    super(props);
    this.changeMonth = this.changeMonth.bind(this);
    this.state = {
      products,
      classes: {
        root: {
          flexGrow: 1
        }
      },
      month: new Date().getMonth(),
      seasonThreshold: 25
    };
  }

  componentDidMount() {
  }

  changeMonth(e) {
    this.setState(state => ({
      month: e.target.value
    }));
  }

  filterProducts(productType) {
    return this.state.products.filter(product => {
      return (
        product.type === productType &&
        product.seasonMainGer[this.state.month] >= this.state.seasonThreshold
      );
    });
  }

  handlerSeasonSelected(e) {
    this.setState(state => ({
      seasonThreshold: e.target.value
    }));
  }

  render() {
    return (
      <AbsoluteWrapper>
        <CssBaseline />
      <div className={this.state.classes.root}>
        <Paper elevation={3}>
          <FormControl variant="outlined">
            <Select
              aria-label="month-selector"
              id="month-selector"
              value={this.state.month}
              onChange={this.changeMonth}
            >
              {moment.months().map((month, i) => (
                <MenuItem value={i} key={i}>
                  {month}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TabsFullWidth items={["Saison", "Nebensaison", "Alle"]} />
        </Paper>
        <Paper elevation={0}>
          <GridListImageSmall
            title="Gemüse"
            // items={this.state.vegetablesInSeason}
            items={this.filterProducts("vegetable")}
          />

          <br />

          <GridListImageSmall
            title="Früchte"
            items={this.filterProducts("fruit")}
          />
        </Paper>
      </div>
      </AbsoluteWrapper>
    );
  }
}

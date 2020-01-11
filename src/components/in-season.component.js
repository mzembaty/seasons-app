import React, { Component } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import AppHeader from "./app-header.component";
import TabsFullWidth from "./tabs-full-width.component";

// mock data
import products from "./mock-data/products-agriculture";
import GridListImageSmall from "./grid-list-image-small.component";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import moment from "moment";

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
      seasonThreshold: 0
    };
  }

  componentDidMount() {
    // this.setState({
    //   vegetablesInSeason: this.filterProducts(
    //     this.state.vegetablesInSeason,
    //     this.state.month,
    //     "fruit"
    //   )
    // });
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
        product.seasonMainGer[this.state.month] > this.state.seasonThreshold
      );
    });
  }

  render() {
    // console.log(new Intl.DateTimeFormat().format(this.state.month))
    return (
      <div className={this.state.classes.root}>
        <AppHeader />
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

        <br />

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
      </div>
    );
  }
}

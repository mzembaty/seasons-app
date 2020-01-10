import React from "react";
import { Tabs, Tab } from "@material-ui/core";

const handleChange = () => {
  console.info("You clicked the Chip.");
};

export default props => {
  return (
    <Tabs
      value={0}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
      variant="fullWidth"
      centered
    >
      {props.items.map(item => (
        <Tab label={item} key={item}/>
      ))}
    </Tabs>
  );
};

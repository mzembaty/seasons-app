import React from "react";
import { Tabs, Tab } from "@material-ui/core";

export default props => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
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

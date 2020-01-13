import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
// import CreateIcon from "@material-ui/icons/Create";

export default function Item({ item, index, completeItem, removeItem }) {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <ListItem
      style={{ textDecoration: item.isCompleted ? "line-through" : "" }}
      key={item.text}
      role={undefined}
      dense
      button
      onClick={handleToggle(item.text)}
    >
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={checked.indexOf(item.text) !== -1}
          tabIndex={-1}
          disableRipple
          inputProps={{ "aria-labelledby": index }}
        />
      </ListItemIcon>
      <ListItemText id={index} primary={item.text} />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => removeItem(index)}
        >
          <DeleteIcon />
        </IconButton>
        {/* <IconButton
          edge="end"
          aria-label="edit"
          onClick={() => completeItem(index)}
        >
          <CreateIcon />
        </IconButton> */}
      </ListItemSecondaryAction>
    </ListItem>
  );
}

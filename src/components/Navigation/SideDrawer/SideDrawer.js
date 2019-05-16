import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Add from "@material-ui/icons/Add";

const sidedrawer = props => {
  console.log(props);
  const sideList = (
    <List>
      <ListItem button>
        <ListItemText primary="My orders" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Add />
        </ListItemIcon>
        <ListItemText primary="New Guest" />
      </ListItem>
    </List>
  );
  return (
    <SwipeableDrawer
      open={props.isOpen}
      onClose={props.close}
      onOpen={props.onOpen}
    >
      <div
        tabIndex={0}
        role="button"
        onClick={props.close}
        // onKeyDown={this.toggleDrawer("left", false)}
      >
        {sideList}
      </div>
    </SwipeableDrawer>
  );
};

export default sidedrawer;

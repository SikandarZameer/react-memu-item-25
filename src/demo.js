import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";

const homePageStyle = theme => ({
  root: {
    width: "300px"
  },
  selected: {
    backgroundColor: "turquoise !important",
    color: "white",
    fontWeight: 600
  }
});

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? "simple-menu" : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem
            onClick={this.handleClose}
            selected
            classes={{ selected: classes.selected }}
          >
            My account
          </MenuItem>
          <MenuItem onClick={this.handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default withStyles(homePageStyle)(SimpleMenu);

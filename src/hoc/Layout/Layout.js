import React, { Component } from "react";
import { connect } from "react-redux";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import classes from "./Layout.module.css";
import Modal from "@material-ui/core/Modal";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

class Layout extends Component {
  state = {
    showSideDrawer: false,
    showModal: false
  };

  sideDrawerTogleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  handleModalOpen = () => {
    this.setState({ showModal: true });
  };

  handleModalClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: "#4caf50"
        }
      }
    });

    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <AppBar position="static" className={classes.Bar}>
            <SideDrawer
              isOpen={this.state.showSideDrawer}
              close={this.sideDrawerCloseHandler}
              onOpen={this.sideDrawerTogleHandler}
            />
            <Toolbar>
              <IconButton
                className={classes.MenuButton}
                color="inherit"
                aria-label="Menu"
                onClick={this.sideDrawerTogleHandler}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.Grow}>
                Restaurant
              </Typography>
              <div>
                <IconButton color="inherit" onClick={this.handleModalOpen}>
                  <Badge
                    badgeContent={this.props.totalDishes}
                    color="secondary"
                  >
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </div>
              <div className={classes.Toolbar}>
                <Button color="inherit">Build Order</Button>
                <Button color="inherit">Orders</Button>
              </div>
            </Toolbar>
          </AppBar>
          <Modal open={this.state.showModal} onClose={this.handleModalClose}>
            <div className={classes.Modal}>
              <Typography variant="h6" id="modal-title">
                Order Summary
              </Typography>
            </div>
          </Modal>
        </MuiThemeProvider>
        <main>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    totalDishes: state.order.totalCount
  };
};

export default connect(mapStateToProps)(Layout);

import { ListItemIcon, ListItemText, makeStyles } from "@material-ui/core";

import React from "react";

import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import BusinessIcon from "@material-ui/icons/Business";
import { useNavigate, useLocation } from "react-router-dom";

const drawerWith = 240;
const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    page: {
      background: "#f9f9f9",

      width: "100%",
      padding: 30,
    },
    drawer: {
      width: drawerWith,
    },
    drawerPaper: {
      width: drawerWith,
    },
    active: {
      background: "#f4f4f4",
    },
    title: {
      padding: theme.spacing(5),
    },
    appbar: {
      width: `calc(100% - ${drawerWith}px)`,
    },
    toolbar: theme.mixins.toolbar,
  };
});
const Application = ({ children }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const menuItems = [
    {
      text: "companies",
      icon: <BusinessIcon color="secondary" />,
      path: "/",
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0} color={"secondary"}>
        <Toolbar></Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            CRUD
          </Typography>
        </div>

        {/* <List>
          {menuItems.map((item) => {
            <ListItem key={item.text}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>;
          })}
        </List> */}
        <List>
          <ListItem
            button
            onClick={() => {
              navigate("./");
            }}
            className={location.pathname === "/" ? classes.active : null}
          >
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText primary="companies" />
          </ListItem>
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Application;

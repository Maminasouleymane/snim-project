import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { alpha } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ListSubheader from "@material-ui/core/ListSubheader";
import Collapse from "@material-ui/core/Collapse";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import StarBorder from "@material-ui/icons/StarBorder";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "../styles/styles";
import { NavLink, useLocation } from "react-router-dom";

const PersistentDrawerLeft = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openNested, setOpenNested] = useState(false);

  // * close the side menu whenEver the url changes
  let location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [location]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setOpenNested(!openNested);
  };
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* start of header section */}
      <AppBar
        style={{ backgroundColor: "#071013" }}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap>
            SNIM - CENTRALE NDB
          </Typography>
          <img
            src="./images/logo.png"
            style={{ height: "60px", width: "60px" }}
          />
        </Toolbar>
      </AppBar>

      {/* end  of header section */}
      <Drawer
        style={{ backgroundColor: "#071013", maxWidth: "20px" }}
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List
          // style={{ backgroundColor: "#071013" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <NavLink to="/" activeClassName="is-active" exact={true}>
              Indicateurs de Performances
            </NavLink>
          </ListItem>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Saisie journaliére" />
            {openNested ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openNested} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <NavLink
                  to="/groupes-insertion"
                  className="navLink"
                  activeClassName="is-active"
                  exact={true}
                >
                  Les groupes
                </NavLink>
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <NavLink
                  to="/operation-insertion"
                  className="navLink"
                  activeClassName="is-active"
                  exact={true}
                >
                  Les opérations
                </NavLink>
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <NavLink
                  to="/auxiliair-insertion"
                  className="navLink"
                  activeClassName="is-active"
                  exact={true}
                >
                  Les auxiliaires
                </NavLink>
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <NavLink
                  to="/arret-insertion"
                  className="navLink"
                  activeClassName="is-active"
                  exact={true}
                >
                  Les arrêts
                </NavLink>
              </ListItem>

              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <NavLink
                  to="/liaison-insertion"
                  className="navLink"
                  activeClassName="is-active"
                  exact={true}
                >
                  La liaison SNIM/SML
                </NavLink>
              </ListItem>
            </List>
          </Collapse>
          <ListItem button>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <NavLink
              to="/sjmcndb-archive"
              activeClassName="is-active"
              exact={true}
            >
              SJMCNDB - les groupes
            </NavLink>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <NavLink to="/cle-archive" activeClassName="is-active" exact={true}>
              CLE
            </NavLink>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <NavLink
              to="/operation-archive"
              activeClassName="is-active"
              exact={true}
            >
              Les opérations
            </NavLink>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <NavLink
              to="/auxiliaires-archive"
              activeClassName="is-active"
              exact={true}
            >
              Les auxiliaires
            </NavLink>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <NavLink
              to="/arret-archive"
              activeClassName="is-active"
              exact={true}
            >
              Historiques des arrêts
            </NavLink>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <NavLink
              to="/laison-archive"
              activeClassName="is-active"
              exact={true}
            >
              La laison SNIM/SML
            </NavLink>
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      ></main>
    </div>
  );
};

export default PersistentDrawerLeft;

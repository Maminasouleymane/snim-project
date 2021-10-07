import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Saisie journaliere" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="les groupes" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Eolien" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="les operations" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="les arrets" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="SNIM - SOMELEC" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="SJMCNDB" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="suivie du rendement" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="historiques des arretes" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="laison SNIM-SOMELEC" />
      </ListItem>
    </List>
  );
}

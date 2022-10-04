import React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GroupIcon from "@mui/icons-material/Group";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import WorkIcon from "@mui/icons-material/Work";
import { Link as RouterLink } from "react-router-dom";

const drawerWidth = 240;
const employeeList = [
  { name: "Employees", url: "/employees", icon: <GroupIcon /> },
  { name: "Roles", url: "/roles", icon: <KeyboardArrowRightIcon /> },
  { name: "Departments", url: "/departments", icon: <KeyboardArrowRightIcon /> },
  { name: "Skills", url: "/skills", icon: <KeyboardArrowRightIcon /> },
];

const workList = [
  { name: "Works", url: "/works", icon: <WorkIcon /> },
  { name: "Clients", url: "/clients", icon: <KeyboardArrowRightIcon /> },
  // { name: "New Client", url: "/new-client", icon: <KeyboardArrowRightIcon /> },
  { name: "Items", url: "/items", icon: <KeyboardArrowRightIcon /> },
  // { name: "New Item", url: "/new-item", icon: <KeyboardArrowRightIcon /> },
  { name: "Customers", url: "/customers", icon: <KeyboardArrowRightIcon /> },
];

export default function DrawerLeft() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar/>

      <Divider variant="middle"/>
      <List>
        {workList.map((list) => (
          <ListItem key={list.name} disablePadding>
            <ListItemButton component={RouterLink} to={list.url}>
              <ListItemIcon>{list.icon}</ListItemIcon>
              <ListItemText primary={list.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider variant="inset"/>
      <List>
        {employeeList.map((list) => (
          <ListItem key={list.name} disablePadding>
            <ListItemButton component={RouterLink} to={list.url}>
              <ListItemIcon>{list.icon}</ListItemIcon>
              <ListItemText primary={list.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

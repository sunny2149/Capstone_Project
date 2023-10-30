import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DevelopmentIcon from "@mui/icons-material/DeveloperMode";
import ReportsIcon from "@mui/icons-material/Assessment";
import AdminIcon from "@mui/icons-material/SupervisorAccount";
import SettingsIcon from "@mui/icons-material/Settings";
import ContactUsIcon from "@mui/icons-material/ContactMail";
import "./style.css";

const HrMenu = () => {
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div
        className={`menu-button ${open ? "menu-open" : ""}`}
        onClick={handleDrawer}
      >
        <IconButton onClick={handleDrawer}>
          <MenuIcon />
        </IconButton>
      </div>
      <Drawer open={open} onClose={handleDrawer}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DevelopmentIcon />
            </ListItemIcon>
            <ListItemText primary="Requests" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ReportsIcon />
            </ListItemIcon>
            <ListItemText primary="Report Analytics" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ContactUsIcon />
            </ListItemIcon>
            <ListItemText primary="Trainings" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AdminIcon />
            </ListItemIcon>
            <ListItemText primary="Admin" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ContactUsIcon />
            </ListItemIcon>
            <ListItemText primary="Contacts" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default HrMenu;

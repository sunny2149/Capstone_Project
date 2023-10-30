import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  InputBase,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import "./style.css";

export default function DashboardHead() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("currentuser");
    navigate("/login");
  };

  const handleProfile = () => {};

  const handleMore = () => {};

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#5A287D" }}>
        <Toolbar>
          <img
            src={logo}
            className="logo-pic"
            alt="logo"
            height="40"
            width="40"
            style={{ marginRight: "10px" }}
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block", marginRight: "550px" } }}
          >
            NatWest Workday
          </Typography>

          {/* <div className="search-container">
            <InputBase
              placeholder="Search..."
              inputProps={{ "aria-label": "search" }}
              style={{
                width: "375px",
                background: "white",
                borderRadius: "12px",
                paddingLeft: "8px",
              }}
            />
            <IconButton color="inherit" aria-label="search">
              <SearchIcon />
            </IconButton>
          </div> */}

          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            color="inherit"
          >
            <AccountCircleIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id="primary-search-account-menu"
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{ style: { background: "#cab2d1" } }}
      >
        <MenuItem onClick={handleProfile} sx={{ backgroundColor: "#cab2d1" }}>
          Profile
        </MenuItem>
        <MenuItem onClick={handleMore} sx={{ backgroundColor: "#cab2d1" }}>
          About
        </MenuItem>
        <MenuItem onClick={handleLogout} sx={{ backgroundColor: "#cab2d1" }}>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}

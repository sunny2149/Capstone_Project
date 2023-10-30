import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./style.css";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function MainHeader() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "#5A287D" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img
              src={logo}
              className="logo-pic"
              alt="logo"
              height="40"
              width="40"
            />

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "unset",
                fontWeight: 700,
                // letterSpacing: '.3rem',
                marginLeft: 1,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Natwest Workday
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <Link to="/OurBrands" className="close-tab">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography style={{ color: "black" }} textAlign="center">
                      Careers
                    </Typography>
                  </MenuItem>
                </Link>
                <Link to="/aboutus" className="close-tab">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography style={{ color: "black" }} textAlign="center">
                      About Us
                    </Typography>
                  </MenuItem>
                </Link>
                <Link to="/blog" className="close-tab">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography style={{ color: "black" }} textAlign="center">
                      Blogs
                    </Typography>
                  </MenuItem>
                </Link>
                <Link to="/login" className="close-tab">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography style={{ color: "black" }} textAlign="center">
                      Login
                    </Typography>
                  </MenuItem>
                </Link>
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Natwest
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link to="/brands" className="menu-items">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Our Brands
                </Button>
              </Link>
              <Link to="/about" className="menu-items">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  About Us
                </Button>
              </Link>
              <Link to="/blog" className="menu-items">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  News
                </Button>
              </Link>

              <Link to="/login" className="menu-items offset-md-8">
                <Button
                  className="login-btn login-btn-outline"
                  variant="text"
                  href="#contained-buttons"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                  style={{ backgroundColor: "purple" }}
                >
                  Login
                </Button>
              </Link>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                ></IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Themes</Typography>
                </MenuItem>

                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Page Size</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">About us</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Contact us</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

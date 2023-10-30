import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import empImg from "../images/employee.png";
import cusImg from "../images/customer.jfif";
import MainHeader from "./MainHeader";
import Footer from "./Footer";

const StyledAvatar = styled(Paper)`
  ${({ theme }) => `
  cursor: pointer;
  transition: ${theme.transitions.create(["background-color", "transform"], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    background-color: ${theme.palette.text.secondary};
    transform: scale(1.2);
  }
  `}
`;

export default function FullWidthGrid() {
  const headerStyles = {
    backgroundColor: "purple",
  };
  return (
    <>
      <div style={{ backgroundColor: "#CAB2D1" }}>
        <MainHeader headerStyles={headerStyles} />

        <Box sx={{ width: 350, margin: "20px auto", marginTop: 40 }}>
          <Grid container spacing={6}>
            <Grid item xs={6} md={6} sx={{ textAlign: "center" }}>
              <StyledAvatar elevation={24}>
                <a href="/hrlogin">
                  <img src={empImg} alt="imgError" />
                </a>
                <h3>HR</h3>
              </StyledAvatar>
            </Grid>
            <Grid item xs={6} md={6} sx={{ textAlign: "center" }}>
              <StyledAvatar elevation={24}>
                <a href="/employeelogin">
                  <img src={cusImg} alt="imgError" />
                </a>
                <h3>Employee</h3>
              </StyledAvatar>
            </Grid>
          </Grid>
        </Box>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Footer />
      </div>
    </>
  );
}

import React from "react";
import "./Footer.css";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

function Footer() {
  return (
    <div className="footer">
      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* Column1 */}
            <div className="col">
              <h4>Corporate Location</h4>
              <ul className="list-unstyled">
                <li>36 St Andrew Square,</li>
                <li>Edinburgh,</li>
                <li>United Kingdom, EH2 2YB.</li>
              </ul>
            </div>
            {/* Column2 */}
            <div className="col">
              <h4>Write to us</h4>
              <ul className="list-unstyled">
                <li>Contact queries</li>
                <li>https://www.natwest.com/support-centre</li>
                <li>https://www.natwestgroup.com/who-we-are/contact-us.html</li>
              </ul>
            </div>
            {/* Column3 */}
            <div className="col">
              <h4>Follow Us</h4>
              <ul className="list-unstyled">
                <Grid item xs={12} sm={4}>
                  <Link
                    href="https://www.facebook.com/NatWest/"
                    color="inherit"
                  >
                    <Facebook />
                  </Link>
                  <Link
                    href="https://www.instagram.com/natwest/"
                    color="inherit"
                    sx={{ pl: 1, pr: 1 }}
                  >
                    <Instagram />
                  </Link>
                  <Link href="https://www.twitter.com/" color="inherit">
                    <Twitter />
                  </Link>
                </Grid>
                <li>
                  Find out how you can grow your career and apply for a job with
                  us!
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Natwest Group | All rights
              reserved | Terms Of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

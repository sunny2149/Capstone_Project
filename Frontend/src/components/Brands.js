import React from "react";
import blog1 from "../images/career2.jpg";
import blog2 from "../images/career3.jpg";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import "./style.css";

const Blog = () => {
  return (
    <div>
      <MainHeader />
      <div className="blog-container-career">
        <h2 className="text-center">OUR BRANDS</h2>
        <h5>
          We champion potential and seek to create a better future. As a UK
          banking and financial services company, we’ve evolved to meet the
          needs of large companies, as well as small businesses and individuals.{" "}
          <br></br>Check out the wide range of products and services available
          from our brilliant brands.
        </h5>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12 py-5 d-flex align-items-center justify-content-center">
              <div
                className="card h-100 card-with-shadow"
                style={{ width: "18rem" }}
              >
                <img
                  src={
                    "https://www.natwestgroup.com/content/dam/natwestgroup_com/natwestgroup/images/brand-logos/445x275/image.dim.full.NWG-natwest-logo-tile-445x275.jpg"
                  }
                  className="card-img-top"
                  alt="Blog 0"
                />
                <div className="card-body">
                  <h5 className="card-title"> NatWest </h5>
                  <p className="card-text">
                    At NatWest, tomorrow begins today. NatWest serves personal
                    and business customers in England and Wales supporting them
                    with their personal, private and business banking needs. We
                    also support corporates and institutions in the UK, Western
                    Europe, the US and Asia with a comprehensive range of
                    banking services across payments, financing, traditional
                    lending and risk management.
                  </p>
                  <a href="#" className="btn custom-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 py-5 d-flex align-items-center justify-content-center">
              <div
                className="card h-100 card-with-shadow"
                style={{ width: "18rem" }}
              >
                <img src={blog1} className="card-img-top" alt="Blog 1" />
                <div className="card-body">
                  <h5 className="card-title">Royal Bank of Scotland</h5>
                  <p className="card-text">
                    The Royal Bank of Scotland was established in Edinburgh in
                    1727. It has always been the bank for Scotland’s
                    tomorrow-makers, and today it continues to play an
                    instrumental role in supporting the nation’s economic and
                    industrial development.
                  </p>
                  <a href="#" className="btn custom-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 py-5 d-flex align-items-center justify-content-center">
              <div
                className="card h-100 card-with-shadow"
                style={{ width: "18rem" }}
              >
                <img src={blog2} className="card-img-top" alt="Blog 2" />
                <div className="card-body">
                  <h5 className="card-title">Ulster Bank</h5>
                  <p className="card-text">
                    Ulster Bank helps personal, small business, private and
                    commercial customers in Northern Ireland with their banking
                    needs. Supporting them in taking action today, to achieve
                    their goals for tomorrow.
                  </p>
                  <a href="#" className="btn custom-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blog;

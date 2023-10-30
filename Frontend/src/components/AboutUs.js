import React from "react";
import "./style.css";
import MainHeader from "./MainHeader";
import Footer from "./Footer";

export default function AboutUs() {
  const headerStyles = {
    backgroundColor: "purple",
  };

  return (
    <div>
      <MainHeader headerStyles={headerStyles} />

      <section
        className="product-sec text-center"
        style={{ backgroundColor: "#CAB2D1", paddingBottom: "0px" }}
      >
        {/* <h1 style={{ fontWeight: 'bold' }}>Welcome to NatWest</h1> */}
        <div className="container text-center">
          <div className="row">
            <hr style={{ border: "1px solid black" }} />
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <h3 style={{ fontWeight: "bold" }}>Annual Report 2023</h3>
              <p className="jpapara" style={{ fontWeight: "bold" }}>
                Learn more about being a relationship bank for a digital world,
                in our Annual Report.The bank’s financial strength, and that of
                our business segments, allowed us to grow our lending throughout
                2022, while investing to create a simpler and better banking
                experience for our customers.
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <img
                src="https://www.natwestgroup.com/content/dam/natwestgroup_com/natwestgroup/images/2023-images/single-article/image.dim.667.NWG-Group-at-table-445x275.jpg"
                alt="attraction1"
                className="img-fluid jpaimg"
              />
              <br></br>
              <br></br>
            </div>
            <hr style={{ border: "4px solid black" }} />
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <h3 style={{ fontWeight: "bold" }}>Our Partner Leave policies</h3>
              <p className="jpapara" style={{ fontWeight: "bold" }}>
                We’ve introduced new, market-leading Partner Leave policies for
                our colleagues. The Group’s Holiday & Other Leave policy
                provisions can be split into four categories: • Annual Leave –
                an employee’s contractual holiday and bank holiday entitlement •
                Special Leave (non-discretionary) – when an employee can take
                reasonable time off (subject to eligibility) to enable them to
                care for a dependent, undertake training or fulfil public
                commitments • Special Leave (discretionary).
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <img
                src="https://www.natwestgroup.com/content/dam/natwestgroup_com/natwestgroup/images/2023-images/single-article/image.dim.full.NWG-John-Fielding-445x275.jpg"
                alt="attraction1"
                className="img-fluid jpaimg"
              />
              <br></br>
              <br></br>
            </div>
            <hr style={{ border: "4px solid black" }} />
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <h3 style={{ fontWeight: "bold" }}>CareerSense</h3>
              <p className="jpapara" style={{ fontWeight: "bold" }}>
                CareerSense is our employability education program aimed at
                improving employability prospects for young people aged 13-24 in
                the UK. We're proud to be helping champion the potential and
                economic resilience of young people and look forward to growing
                this program in partnership with schools across the UK.
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <img
                src="https://www.natwestgroup.com/content/dam/natwestgroup_com/natwestgroup/images/image.dim.667.school-pupil-classroom-445x275px.jpg"
                alt="attraction1"
                className="img-fluid jpaimg"
              />
              <br></br>
              <br></br>
            </div>
            <hr style={{ border: "4px solid black" }} />
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <h3 style={{ fontWeight: "bold" }}>
                Our commitments to racial equality – two years on
              </h3>
              <p className="jpapara" style={{ fontWeight: "bold" }}>
                Take a look at progress made on our commitments for our
                colleagues, customers, and communities.
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <img
                src="https://www.natwestgroup.com/content/dam/natwestgroup_com/natwestgroup/images/image.dim.667.marcus-rashford-445x275.png"
                alt="attraction1"
                className="img-fluid jpaimg"
              />
              <br></br>
              <br></br>
            </div>
            {/* <hr style={{ border: '5px solid black' }} /> */}
          </div>
        </div>
      </section>

      <section
        className="card-section"
        style={{ backgroundColor: "#A978C0", paddingBottom: "80px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <br></br>
              <br></br>
              <div className="card">
                <img
                  src="https://www.natwestgroup.com/content/dam/natwestgroup_com/natwestgroup/images/2023-images/multi-listing-card/image.dim.480.NWG-colleague-outdoor-300x179.jpg"
                  className="card-img-top"
                  alt="Card 1"
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    Who we are
                  </h5>
                  <p className="card-text" style={{ fontWeight: "bold" }}>
                    Board of Directors
                  </p>
                  <p className="card-text" style={{ fontWeight: "bold" }}>
                    Executive management
                  </p>
                  <p className="card-text" style={{ fontWeight: "bold" }}>
                    Contact us
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <br></br>
              <br></br>
              <div className="card">
                <img
                  src="https://www.natwestgroup.com/content/dam/natwestgroup_com/natwestgroup/images/2023-images/multi-listing-card/image.dim.480.NWG-colleague-conversation-300x179.jpg"
                  className="card-img-top"
                  alt="Card 2"
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    Investor Relations
                  </h5>
                  <p className="card-text" style={{ fontWeight: "bold" }}>
                    Results centre
                  </p>
                  <p className="card-text" style={{ fontWeight: "bold" }}>
                    Annual report
                  </p>
                  <p className="card-text" style={{ fontWeight: "bold" }}>
                    Share data
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <br></br>
              <br></br>
              <div className="card">
                <img
                  src="https://www.natwestgroup.com/content/dam/natwestgroup_com/natwestgroup/images/new-images-2022/single-article/image.dim.480.Natwest_erp_camden_0051_445x275.jpg"
                  className="card-img-top"
                  alt="Card 3"
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    Careers
                  </h5>
                  <p className="card-text" style={{ fontWeight: "bold" }}>
                    Careers at NatWest Group
                  </p>
                  <p className="card-text" style={{ fontWeight: "bold" }}>
                    Join us
                  </p>
                  <p className="card-text" style={{ fontWeight: "bold" }}>
                    Clear your Doubts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

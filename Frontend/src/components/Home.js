import React from "react";
import MainHeader from "./MainHeader";
import Footer from "./Footer";

export default function Home() {
  const headerStyles = {
    backgroundColor: "purple",
  };

  return (
    <>
      <MainHeader headerStyles={headerStyles} />

      <section
        className="product-sec text-center"
        style={{ backgroundColor: "#F4F0E8" }}
      >
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <h1 className="pt-3">Who we are</h1>
              <h5>
                NatWest Group is a relationship bank for a digital world. We
                champion potential; breaking down barriers and building
                financial confidence so the 19 million people, families, and
                businesses we serve in communities throughout the UK and Ireland
                can rebuild and thrive.
              </h5>
              {/* <button className="btn custom-btn-about my-4">Go to At a Glance</button> */}
            </div>
            <div className="col">
              <br></br>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src={
                    "https://img4.s3wfg.com/web/img/images_uploaded/0/b/dl--natwest-group-plc--nwg--financials--banks--banks--banks--ftse-100--premium--rbs-group--20230403-1539_620x350.jpg"
                  }
                  alt="About Us 0"
                  style={{ borderRadius: "100px" }}
                />
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </section>
      <section
        className="product-sec text-center"
        style={{ backgroundColor: "#F1CD83" }}
      >
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <br></br>
              <br></br>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src={
                    "https://finpedia.co/bin/download/NatWest%20Group/WebHome/NWG3.png?rev=1.1"
                  }
                  alt="About Us 1"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <br></br>
            </div>
            <div className="col">
              <h1 className="pt-3">Banking brands</h1>
              <h4>
                How do we drive growth and support the financial lives of our
                personal, business, and corporate customers? Through our
                brilliant banking brands. Check out the wide range of financial
                products and services we offer.
              </h4>
              {/* <button className="btn custom-btn-about-two my-4">See our Brands</button> */}
            </div>
          </div>
        </div>
      </section>
      <section
        className="product-sec text-center"
        style={{ backgroundColor: "#5A287D" }}
      >
        <div className="container text-light">
          <div className="row">
            <div className="col">
              <h1 className="pt-4">Leadership & Governance</h1>
              <h5>
                Our priority is to maintain the highest standards of corporate
                governance, business integrity, and professionalism. That’s how
                we drive long-term sustainable success.
              </h5>
              {/* <button className="btn custom-btn-about my-4">Go to At a Glance</button> */}
            </div>
            <div className="col">
              <br></br>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src="https://suremountain.com/wp-content/uploads/2015/04/Leadership-Governance-SureMountain-560x350.jpg"
                  alt="Leadership & Governance"
                  style={{ borderRadius: "15px" }}
                />
              </div>
            </div>
          </div>
          <br></br>
        </div>
      </section>
      <section
        className="product-sec text-center"
        style={{ backgroundColor: "#F1CD83" }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <br></br>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src="https://www.natwestgroup.com/content/dam/natwestgroup_com/natwestgroup/images/2023-images/single-article/image.dim.180.NWG-colleague-celebration-445x275.jpg"
                  alt="Working at NatWest Group"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <br></br>
            </div>

            <div className="col">
              <br></br>
              <br></br>
              <h1>Working at NatWest Group</h1>
              <h4>
                Strong relationships with millions of customers are at the heart
                of our workforce. We are committed to having a motivated and
                inclusive workforce who are engaged and passionate about serving
                customers.
              </h4>
              {/* <button className="btn custom-btn-about-two my-4">Find out about how we work</button> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

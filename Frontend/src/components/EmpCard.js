import React from "react";
import { Link } from "react-router-dom";

export default function EmpCard() {
  return (
    <div className="blog-container-blog">
      <h2 className="text-center mt-3">Quick Access</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-12 py-5 d-flex align-items-center justify-content-center">
            <div
              className="card h-100 card-with-shadow"
              style={{ width: "20rem" }}
            >
              <img
                src={
                  "https://shrm-res.cloudinary.com/image/upload/c_crop,h_253,w_450,x_0,y_0/w_auto:100,w_358,q_auto,f_auto/v1/Tools%20and%20Samples/18_1489_HupPage_Rullup_IndependentContractors_gacs1j"
                }
                className="card-img-top"
                alt="Employee Engagement"
              />
              <div className="card-body">
                <h5 className="card-title">Profile</h5>
                <p className="card-text">Manage your profile information.</p>
                {/* <a href="#" className="btn custom-btn">Go to Profile</a> */}
                <Link to="/resign" className="btn custom-btn">
                  Go to Profile
                </Link>{" "}
                {/* Use Link to navigate to the "Profile" (Resign) page */}
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 py-5 d-flex align-items-center justify-content-center">
            <div
              className="card h-100 card-with-shadow"
              style={{ width: "20rem" }}
            >
              <img
                src={
                  "https://shrm-res.cloudinary.com/image/upload/c_crop,h_528,w_939,x_0,y_0/w_auto:100,w_767,q_auto,f_auto/v1/Tools%20and%20Samples/HubPages_16x9_ManagingInternalThreats_k0uf9k"
                }
                className="card-img-top"
                alt="ManagingInternal Threats"
              />
              <div className="card-body">
                <h5 className="card-title">Dashboard</h5>
                <p className="card-text">Access the main dashboard.</p>
                <a href="#" className="btn custom-btn">
                  Go to Dashboard
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 py-5 d-flex align-items-center justify-content-center">
            <div
              className="card h-100 card-with-shadow"
              style={{ width: "20rem" }}
            >
              <img
                src={
                  "https://th.bing.com/th/id/OIP.zRvIMRmunq0HJfG7IJlkUAHaEc?pid=ImgDet&rs=1"
                }
                className="card-img-top"
                alt="Leave Tracker"
              />
              <div className="card-body">
                <h5 className="card-title">Leave Tracker</h5>
                <p className="card-text">Manage your leave requests.</p>
                <a href="#" className="btn custom-btn">
                  Go to Leave Tracker
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 py-5 d-flex align-items-center justify-content-center">
            <div
              className="card h-100 card-with-shadow"
              style={{ width: "20rem" }}
            >
              <img
                src={
                  "https://th.bing.com/th/id/OIP.8E6s6Hlko7FjrNRTjYLZrAHaDt?pid=ImgDet&rs=1"
                }
                className="card-img-top"
                alt="Learnings"
              />
              <div className="card-body">
                <h5 className="card-title">Learnings</h5>
                <p className="card-text">Access learning resources.</p>
                <a href="#" className="btn custom-btn">
                  Go to Learnings
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 py-5 d-flex align-items-center justify-content-center">
            <div
              className="card h-100 card-with-shadow"
              style={{ width: "20rem" }}
            >
              <img
                src={
                  "https://shrm-res.cloudinary.com/image/upload/c_crop,h_528,w_938,x_0,y_0/w_auto:100,w_767,q_auto,f_auto/v1/Tools%20and%20Samples/HubPages_16x9_OpenEnrollment_gjy4c2"
                }
                className="card-img-top"
                alt="Performance"
              />
              <div className="card-body">
                <h5 className="card-title">Performance</h5>
                <p className="card-text">View your performance metrics.</p>
                <a href="#" className="btn custom-btn">
                  Go to Performance
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 py-5 d-flex align-items-center justify-content-center">
            <div
              className="card h-100 card-with-shadow"
              style={{ width: "20rem" }}
            >
              <img
                src={
                  "https://www.techsmashable.com/wp-content/uploads/2021/07/helpdesk-automation.jpg"
                }
                className="card-img-top"
                alt="Help Desk"
              />
              <div className="card-body">
                <h5 className="card-title">Help Desk</h5>
                <p className="card-text">Get assistance from the help desk.</p>
                <a href="#" className="btn custom-btn">
                  Go to Help Desk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

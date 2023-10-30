import React, { useState, useEffect } from "react";
import download1 from "../images/download1.jpeg";
import download4 from "../images/download4.png";
import DashboardHead from "./DashboardHead";
import Footer from "./Footer";

function Resign() {
  const [showResignationModal, setShowResignationModal] = useState(false);
  const [employeeId, setEmployeeId] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [department, setdepartment] = useState("");
  const [reason, setreason] = useState("");
  const [comments, setcomments] = useState("");
  const [lastWorkingDay, setlastWorkingDay] = useState("");
  const [userData, setUserData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  useEffect(() => {
    const currentDate = new Date();
    const submissionDate = new Date(
      currentDate.getTime() + 30 * 24 * 60 * 60 * 1000
    );

    setlastWorkingDay(submissionDate.toISOString().slice(0, 10));
    const storedUserData = sessionStorage.getItem("empobj");

    if (storedUserData) {
      const user = JSON.parse(storedUserData);
      setUserData(user);
      setEmployeeId(user.employeeId);
      setfirstName(user.firstName);
      setlastName(user.lastName);
      setdepartment(user.department);
    }
  }, []);

  const openResignationModal = () => {
    setShowResignationModal(true);
  };
  const closeResignationModal = () => {
    setShowResignationModal(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      employeeId: userData.employeeId,
      firstName: userData.firstName,
      lastName: userData.lastName,
      department: userData.department,
      lastWorkingDay,
      reason,
      comments,
    };

    fetch("http://localhost:8089/rapi/v1/saveresign", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setIsSubmitted(true);
          clearFormFields();
          setShowSuccessAlert(true);
        } else {
          console.error("Error while saving resignation details.");
        }
      })
      .catch((error) => {
        console.error("Error while saving resignation details:", error);
      });
  };

  const clearFormFields = () => {
    setreason("");
    setcomments("");
    setShowResignationModal(false);
  };

  return (
    <div>
      <DashboardHead />
      {showSuccessAlert && (
        <div className="alert alert-success alert-fixed">
          Your resignation has been submitted successfully.
        </div>
      )}
      <div className="blog-container-blog">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12 py-5 d-flex align-items-center justify-content-center">
              <div
                className="card h-100 card-with-shadow"
                style={{ width: "20rem" }}
              >
                <img
                  src={
                    "https://www.thebalancemoney.com/thmb/2s0QUvFL2WdFlUZFmkY8ANp1fzs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/flat-color-icon---money-envelope-911011286-5173260f215e4615b3dafc1667e81d6a.jpg"
                  }
                  className="card-img-top"
                  alt="download"
                />
                <div className="card-body">
                  <h5 className="card-title">Your Pay</h5>
                  <p className="card-text">
                    Information about your CTC and Bonus
                  </p>
                  <a href="#" className="btn custom-btn">
                    Click Here
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
                    "https://cloudfoundation.com/blog/wp-content/uploads/2022/01/workday-leave-and-absence-management-tutorial-akhi.png"
                  }
                  className="card-img-top"
                  alt="download1"
                />
                <div className="card-body">
                  <h5 className="card-title">Leave and Absence</h5>
                  <p className="card-text">
                    Check your Leave Balance and apply for Leave
                  </p>
                  <a href="#" className="btn custom-btn">
                    Click Here
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 py-5 d-flex align-items-center justify-content-center">
              <div
                className="card h-100 card-with-shadow"
                style={{ width: "20rem" }}
              >
                <img src={download1} className="card-img-top" alt="download2" />
                <div className="card-body">
                  <h5 className="card-title">Exit Organisation</h5>
                  <p className="card-text">Steps for leaving the company</p>
                  <button
                    onClick={openResignationModal}
                    className="btn custom-btn"
                  >
                    Click Here
                  </button>
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
                    "https://www.datocms-assets.com/40521/1666009459-hr-tasks.png?auto=format&w=1417"
                  }
                  className="card-img-top"
                  alt="download3"
                />
                <div className="card-body">
                  <h5 className="card-title">Raise Query With HR</h5>
                  <p className="card-text">Ask questions and seek assistance</p>
                  <a href="#" className="btn custom-btn">
                    Click Here
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 py-5 d-flex align-items-center justify-content-center">
              <div
                className="card h-100 card-with-shadow"
                style={{ width: "20rem" }}
              >
                <img src={download4} className="card-img-top" alt="download4" />
                <div className="card-body">
                  <h5 className="card-title">Have a Question</h5>
                  <p className="card-text">General inquiries and support</p>
                  <a href="#" className="btn custom-btn">
                    Click Here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`modal fade ${showResignationModal ? "show" : ""}`}
        tabIndex="-1"
        role="dialog"
        style={{ display: showResignationModal ? "block" : "none" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Resignation Form</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={closeResignationModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {isSubmitted ? (
                <div className="alert alert-success">
                  Your resignation has already been submitted.
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} autoComplete="off">
                  <div className="form-group">
                    <label htmlFor="employeeId">Employee ID</label>
                    <input
                      type="text"
                      className="form-control"
                      id="employeeId"
                      placeholder="Enter Employee ID"
                      value={employeeId}
                      readOnly
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="Enter First Name"
                      value={firstName}
                      readOnly
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Enter Last Name"
                      value={lastName}
                      readOnly
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="department">Department</label>
                    <input
                      className="form-control"
                      id="department"
                      value={department}
                      readOnly
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastworkingday">Last Working Day</label>
                    <input
                      className="form-control"
                      id="lastworkingday"
                      value={lastWorkingDay}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Reason">Reason for Resignation</label>
                    <select
                      className="form-control"
                      id="Reason"
                      value={reason}
                      onChange={(e) => setreason(e.target.value)}
                    >
                      <option value="">Select Reason for Resignation</option>
                      <option value="Personal Reasons">Personal Reasons</option>
                      <option value="Better Opportunity">
                        Better Opportunity
                      </option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="Comments">Other Reason</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Comments"
                      placeholder="Enter Other comments"
                      value={comments}
                      onChange={(e) => setcomments(e.target.value)}
                    />
                  </div>
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={closeResignationModal}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Resign;

import React, { useState, useEffect } from "react";
import axios from "axios";
import DashboardHead from "./DashboardHead";
import HRcard from "./HRCard";
import Footer from "./Footer";

const HrDash = () => {
  const [hrData, setHrData] = useState({
    employeeId: "",
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    jobTitle: "",
    dateOfBirth: "",
    dateOfJoining: "",
  });

  const [userList, setUserList] = useState([]);
  const [resignRequests, setResignRequests] = useState([]);
  const [exemployees, setexemployees] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [lastLoginTime, setLastLoginTime] = useState("");
  const [showUserList, setShowUserList] = useState(false);
  const [showResignRequests, setShowResignRequests] = useState(false);
  const [showexemployees, setshowexemployees] = useState(false);

  useEffect(() => {
    const storedUserData = sessionStorage.getItem("hrobj");
    const storedLastLoginTime = localStorage.getItem("lastLoginTime");

    if (storedUserData) {
      const user = JSON.parse(storedUserData);
      setHrData(user);
      if (storedLastLoginTime) {
        setLastLoginTime(storedLastLoginTime);
      } else {
        const currentTime = new Date().toLocaleString();
        setLastLoginTime(currentTime);
        localStorage.setItem("lastLoginTime", currentTime);
      }
    }
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8089/auth/v1/getemployees")
      .then((response) => {
        const users = response.data;
        setUserList(users);
        console.log(users);
      })
      .catch((error) => {
        console.error("Error fetching user list: ", error);
      });

    axios
      .get("http://localhost:8089/rapi/v1/getresignedusers")
      .then((response) => {
        const requests = response.data;
        setResignRequests(requests);
      })
      .catch((error) => {
        console.error("Error fetching resign requests: ", error);
      });

    axios
      .get("http://localhost:8089/eauth/v1/getexemployees")
      .then((response) => {
        const res = response.data;
        setexemployees(res);
        console.log(res);
      })
      .catch((error) => {
        console.error("Error fetching exemployees list: ", error);
      });
  }, []);

  const openUserDetails = (userId) => {
    console.log("Open user details function called with user ID:", userId);
    setSelectedUserId(userId);
  };

  const closeUserDetails = () => {
    setSelectedUserId(null);
    setSuccessMessage("");
  };

  return (
    <div>
      <DashboardHead />

      <div className="hrdashboard-page">
        <div className="container main-content">
          {/* <h4>HR Dashboard</h4> */}
          <div className="row">
            <div className="col-12">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">
                    Welcome, {hrData.firstName} {hrData.lastName}
                  </h5>
                  <p className="card-text">Email : {hrData.email}</p>
                  <p className="card-text">Phone : {hrData.phoneNo}</p>
                  <p className="card-text">Address : {hrData.address}</p>
                  {lastLoginTime && <p>Logged In Time : {lastLoginTime}</p>}
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <button
                    className="btn btn-primary mb-2"
                    onClick={() => setShowUserList(!showUserList)}
                  >
                    Employees Details
                  </button>
                  {showUserList && (
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Employee ID</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Department</th>
                          <th>ADP Portal Access</th>
                          <th>Outlook Access</th>
                          <th>Workday Access</th>
                          <th>Shared Drive Access</th>
                          <th>Live Engage Access</th>
                          <th>On Notice Period</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userList.map((user) => (
                          <tr key={user.id}>
                            <td>{user.employeeId}</td>
                            <td
                              onClick={() => openUserDetails(user.id)}
                              style={{ cursor: "pointer" }}
                            >
                              {" "}
                              {`${user.firstName} ${user.lastName}`}
                            </td>

                            <td>{user.email}</td>
                            <td>{user.department}</td>
                            <td>{user.adpPortalAccess}</td>
                            <td>{user.outlookAccess}</td>
                            <td>{user.workdayAccess}</td>
                            <td>{user.sharedDriveAccess}</td>
                            <td>{user.liveEngageAccess}</td>
                            {user.onNotice ? <td>Yes</td> : <td>No</td>}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-body">
                  <button
                    className="btn btn-secondary mb-2"
                    onClick={() => setShowResignRequests(!showResignRequests)}
                  >
                    Employees on Resignation
                  </button>
                  {showResignRequests && (
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Employee ID</th>
                          <th>Name</th>
                          <th>Department</th>
                          <th>Last Working Day</th>
                        </tr>
                      </thead>
                      <tbody>
                        {resignRequests.map((request) => (
                          <tr key={request.id}>
                            <td>{request.employeeId}</td>
                            <td>
                              {request.firstName} {request.lastName}
                            </td>
                            <td>{request.department}</td>
                            <td>{request.lastWorkingDay.slice(0, 10)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-body">
                  <button
                    className="btn btn-secondary mb-2"
                    onClick={() => setshowexemployees(!showexemployees)}
                  >
                    Ex-Employees
                  </button>
                  {showexemployees && (
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Employee ID</th>
                          <th>Name</th>
                          <th>ADP Portal Access</th>
                          <th>Outlook Access</th>
                          <th>Workday Access</th>
                          <th>Shared Drive Access</th>
                          <th>Live Engage Access</th>
                        </tr>
                      </thead>
                      <tbody>
                        {exemployees.map((res) => (
                          <tr key={res.id}>
                            <td>{res.employeeId}</td>
                            <td>
                              {res.firstName} {res.lastName}
                            </td>
                            <td>Disabled</td>
                            <td>Disabled</td>
                            <td>Disabled</td>
                            <td>Disabled</td>
                            <td>Disabled</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>

          <HRcard />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HrDash;

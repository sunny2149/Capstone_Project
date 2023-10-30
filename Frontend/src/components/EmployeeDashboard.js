import React, { useState, useEffect } from "react";
import "./style.css";
import DashboardHead from "./DashboardHead";
import EmpCard from "./EmpCard";
import Footer from "./Footer";

export default function EmployeeDashboard({ userEmail }) {
  const [userData, setUserData] = useState({});
  const [lastLoggedInTime, setLastLoggedInTime] = useState("");
  const [onNotice, setOnNotice] = useState(false);

  useEffect(() => {
    const storedUserData = sessionStorage.getItem("empobj");
    const storedLoggedInTime = sessionStorage.getItem("lastLoggedInTime");
    // console.log(storedUserData);

    if (storedUserData) {
      const user = JSON.parse(storedUserData);
      setUserData(user);
    }
    if (storedLoggedInTime) {
      setLastLoggedInTime(storedLoggedInTime);
    }
    const isOnNotice = checkIfOnNotice();
    setOnNotice(isOnNotice);
  }, []);

  const checkIfOnNotice = () => {
    const storedUserData = sessionStorage.getItem("empobj");
    if (storedUserData) {
      const user = JSON.parse(storedUserData);
      if (user.onNotice) {
        return true;
      }
    }
    return false;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <DashboardHead />
      {onNotice && (
        <div style={{ backgroundColor: "yellow", padding: "1px" }}>
          <h3 style={{ textAlign: "center" }}>
            You are serving the notice period.
          </h3>
        </div>
      )}

      <div className="empdashboard-page">
        <div className="container">
          <div className="empdash-card">
            <div className="card-body">
              {userData.firstName && userData.lastName && (
                <div>
                  <h5 className="card-title mx-2">
                    Welcome to your account, {userData.firstName}{" "}
                    {userData.lastName}!
                  </h5>
                  <br></br>
                </div>
              )}
              <h6 className="card-title mx-2">{userData.jobTitle}</h6>
              <p className="card-text2 mx-2">Email: {userData.email}</p>
              <p className="card-text2 mx-2">
                Phone number: {userData.phoneNo}
              </p>
              {lastLoggedInTime && (
                <p className="card-text2 mx-2">
                  Logged-in Time: {lastLoggedInTime}
                </p>
              )}
            </div>
          </div>
          <EmpCard />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

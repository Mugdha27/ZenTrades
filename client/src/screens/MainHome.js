import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SalesPersonScreen from "../components/SalesPersonScreen";
import DashboardScreen from "./DashboardScreen";

const MainHome = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    // if(userInfo) {
    //     history.push("/")
    // }
  }, []);
  console.log(userInfo);
  return (
    <div>
      {userInfo && userInfo.isAdmin && <DashboardScreen />}
      {userInfo && !userInfo.isAdmin && <SalesPersonScreen />}
      {!userInfo && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "320px",
          }}
        >
          <Link to="/login">
            <button className="slogin">Login as a salesperson</button>
          </Link>
          <Link to="/login">
            <button className="alogin">Login as an admin</button>
          </Link>
        </div>
      )}

      {/* )} */}
    </div>
  );
};

export default MainHome;

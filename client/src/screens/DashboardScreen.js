import React from "react";
import "./Screen.css";
import { Link } from "react-router-dom";
import dashArrow from "../assets/dashArrow.svg";
import { useSelector } from "react-redux";

const DashboardScreen = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <>
      {userInfo && userInfo.isAdmin && (
        <div className="mt-5 pt-5">
          <div className="background">
          </div>
          <div className="dashboard">
            <div className="amount-dashboard">
              <div className="amount-rect">
                <div className="rect-details">
                  <div className="gap"></div>
                  <div className="heading">
                    <p className="amt-title">Dashboard</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row2">
              <div className="products-dashboard">
                <div className="products-rect">
                  <div className="rect-details">
                    <div className="gap"></div>
                    <div className="heading">
                      <Link to="/admin/tasks">
                      <p>Tasks</p>
                      </Link>
                    </div>
                    {/* <div className="amount">9</div> */}
                    <div className="dashArrow">
                      <Link to={"/admin/tasks"}>
                        <button className="dashBtn">
                          <img src={dashArrow} alt="" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="orders-dashboard">
                <div className="orders-rect">
                  <div className="gap"></div>
                  <div className="rect-details">
                    <div className="heading">
                      <p>Salesperson Tracker</p>
                    </div>
                    <div className="dashArrow">
                      <Link to={"/admin/userinfo"}>
                        <button className="dashBtn">
                          <img src={dashArrow} alt="" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default DashboardScreen;

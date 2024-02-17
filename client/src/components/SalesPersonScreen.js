import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SalesPersonScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const getTasks = async () => {
    try {
      const config = {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(`/api/`, config, { eid: userInfo._id });
      return data;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  async function getData() {
    setLoading(true);
    const res = await getTasks();
    setTasks(res);
    setLoading(false);
  }
  console.log(tasks);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h2
        style={{
          backgroundColor: "#ffa39d",
          padding: "15px 20px",
          borderRadius: "16px",
        }}
      >
        All the tasks details
      </h2>
      <div className="row">
        <div className="carddr m-3">
          <h2
            className="text-center mb-4 pt-4"
            style={{ fontSize: "40px", fontWeight: "bolder" }}
          >
            Office
          </h2>
          <div className="task-c pb-4">
            <span style={{ fontSize: "24px" }}>Not Completed</span>
            <span style={{ fontSize: "24px" }}>24th December</span>
          </div>
        </div>

        <div className="carddr m-3">
          <h2
            className="text-center mb-4 pt-4"
            style={{ fontSize: "40px", fontWeight: "bolder" }}
          >
            Shop
          </h2>
          <div className="task-c pb-4">
            <span style={{ fontSize: "24px" }}>Not Completed</span>
            <span style={{ fontSize: "24px" }}>24th December</span>
          </div>
        </div>
        <div className="carddr m-3">
          <h2
            className="text-center mb-4 pt-4"
            style={{ fontSize: "40px", fontWeight: "bolder" }}
          >
            Home
          </h2>
          <div className="task-c pb-4">
            <span style={{ fontSize: "24px" }}>Not Completed</span>
            <span style={{ fontSize: "24px" }}>24th December</span>
          </div>
        </div>

        <a href="/">
          <button className="schedule-button">Show schedule </button>
        </a>
      </div>
    </div>
  );
};

export default SalesPersonScreen;

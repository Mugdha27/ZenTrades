import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TasksList = () => {
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
      const { data } = await axios.get(`/api/task`, config);
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
    <div
      className="m-4 pl-5"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className="row">
        <div className="carddr m-3">
          <h2
            className="text-center mb-4 pt-4"
            style={{ fontSize: "40px", fontWeight: "bolder" }}
          >
            Harinagar, New Delhi
          </h2>
          <h3 className="text-center mb-4 " style={{ fontSize: "32px" }}>
            MR. Helly
          </h3>
          <div className="task-c pb-4">
            <span style={{ fontSize: "24px" }}>Completed</span>
            <span style={{ fontSize: "24px" }}>24th December</span>
          </div>
        </div>

        <div className="carddg m-3">
          <h2
            className="text-center mb-4 pt-4"
            style={{ fontSize: "40px", fontWeight: "bolder" }}
          >
            Noida, UP
          </h2>
          <h3 className="text-center mb-4 " style={{ fontSize: "32px" }}>
            MR. Sriram
          </h3>
          <div className="task-c pb-4">
            <span style={{ fontSize: "24px" }}>Completed</span>
            <span style={{ fontSize: "24px" }}>24th December</span>
          </div>
        </div>

        <div className="carddg m-3">
          <h2
            className="text-center mb-4 pt-4"
            style={{ fontSize: "40px", fontWeight: "bolder" }}
          >
            Tilak nagar
          </h2>
          <h3 className="text-center mb-4 " style={{ fontSize: "32px" }}>
            Miss. Mugdha
          </h3>
          <div className="task-c pb-4">
            <span style={{ fontSize: "24px" }}>Completed</span>
            <span style={{ fontSize: "24px" }}>24th December</span>
          </div>
        </div>


        <div className="carddr m-3">
          <h2
            className="text-center mb-4 pt-4"
            style={{ fontSize: "40px", fontWeight: "bolder" }}
          >
            VK, New Delhi
          </h2>
          <h3 className="text-center mb-4 " style={{ fontSize: "32px" }}>
            MR. Mohit
          </h3>
          <div className="task-c pb-4">
            <span style={{ fontSize: "24px" }}>Completed</span>
            <span style={{ fontSize: "24px" }}>24th December</span>
          </div>
        </div>
      </div>
      {/* <div className="cardd">
        <h2
          className="text-center mb-4 pt-4"
          style={{ fontSize: "40px", fontWeight: "bolder" }}
        >
          New Delhi
        </h2>
        <h3 className="text-center mb-4 " style={{ fontSize: "32px" }}>
          MR. Mukesh
        </h3>
        <div className="task-c pb-4">
          <span style={{ fontSize: "24px" }}>Completed</span>
          <span style={{ fontSize: "24px" }}>24th December</span>
        </div>
      </div> */}
    </div>
  );
};

export default TasksList;

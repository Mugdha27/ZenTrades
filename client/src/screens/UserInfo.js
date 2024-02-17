import React from "react";
import { Table } from "react-bootstrap";

const UserInfo = () => {
  return (
    <div>
      UserInfo
      <div>
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>Email</th>
              <th>Total Users</th>
              <th>Users visited</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr key={1}>
              <td>{32}</td>
              <td>Sunil Kumar</td>
              <td>suniaKumar@gmail.com</td>
              <td>{8}</td>
              <td>{6}</td>
            </tr>

            <tr key={1}>
              <td>{32}</td>
              <td>Muhesh kumar</td>
              <td>muheshKumar@gmail.com</td>
              <td>{8}</td>
              <td>{6}</td>
            </tr>

            <tr key={1}>
              <td>{32}</td>
              <td>Mugdha 1</td>
              <td>kmugdha@gmail.com</td>
              <td>{8}</td>
              <td>{6}</td>
            </tr>

            <tr key={1}>
              <td>{32}</td>
              <td>Helly D</td>
              <td>hellydhamesha@gmail.com</td>
              <td>{8}</td>
              <td>{6}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UserInfo;

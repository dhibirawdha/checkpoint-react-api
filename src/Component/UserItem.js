import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  return (
    <div>
      <div id="gradient"></div>
      <div id="card">
        <Link to={`/info/${user.name}`}>
          <h6>more information</h6>
        </Link>
        <h2>{user.name}</h2>
        <h5>Email: {user.email}</h5>
        <h5>
          Company: {user.company.name} "{user.company.catchPhrase}"
        </h5>
        <h6> bs: {user.company.name} </h6>

        <span className="left bottom">tel: {user.phone} </span>
        <span className="right bottom">adress:{user.address.city}</span>
      </div>
    </div>
  );
};

export default UserItem;

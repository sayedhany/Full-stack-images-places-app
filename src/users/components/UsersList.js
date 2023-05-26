import React from "react";
import "./UsersList.css";
import UserItem from "./UserItem";
const UsersList = ({ items }) => {
  // console.log("items: ", items);
  if (items.length === 0) {
    return (
      <div className="center">
        <h2>There is no users....</h2>
      </div>
    );
  }

  return (
    <ul>
      {items.map((user) => {
        return <UserItem key={user.id} user={user} />;
      })}
    </ul>
  );
};

export default UsersList;

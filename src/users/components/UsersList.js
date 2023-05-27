import React from "react";
import "./UsersList.css";
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElement/Card";
const UsersList = ({ items }) => {
  // console.log("items: ", items);
  if (items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>There is no users....</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="user-list">
      {items.map((user) => {
        return <UserItem key={user.id} user={user} />;
      })}
    </ul>
  );
};

export default UsersList;

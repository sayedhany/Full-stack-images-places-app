import React from "react";
import "./UserItem";
const UserItem = ({ user }) => {
  const { id, name, image, places } = user;
  // console.log({ id, name, image, places });
  return <div>UserItem</div>;
};

export default UserItem;

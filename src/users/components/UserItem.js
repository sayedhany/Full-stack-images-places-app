import React from "react";
import { Link } from "react-router-dom";
import "./UserItem.css";
import Avatar from "../../shared/components/UIElement/Avatar";
import Card from "../../shared/components/UIElement/Card";
const UserItem = ({ user }) => {
  const { id, name, image, placesCount } = user;
  // console.log({ id, name, image, places });
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${id}/places`}>
          <div className="user-item__image">
            <Avatar image={image} alt={name} />
          </div>
          <div className="user-item__info">
            <h2>{name}</h2>
            <h3>
              {placesCount} {placesCount <= 1 ? "place" : "places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;

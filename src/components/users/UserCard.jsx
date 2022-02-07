import { useState } from "react";
import { Tooltip } from "@mui/material";

export const UserCard = ({ user }) => {
  const [imgSrc, setImgSrc] = useState(user.photo);

  const replaceImg = () => {
    setImgSrc("./img/avatar-placeholder.png");
  };

  return (
    <li className="cards__element card-item">
      <img
        src={imgSrc ? imgSrc : user.photo}
        onError={replaceImg}
        alt="user avatar"
        className="card-item__avatar"
      />
      <h4 className="title-m card-item__title">{user.name}</h4>
      <p className="text card-item__text card-item__title">{user.position}</p>
      <Tooltip title={user.email}>
        <p className="text card-item__text card-item__email">{user.email}</p>
      </Tooltip>
      <p className="text card-item__text ">{user.phone}</p>
    </li>
  );
};

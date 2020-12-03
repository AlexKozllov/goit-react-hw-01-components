import React from "react";
import s from "./FriendList.module.css";
import classnames from "classnames";

const FriendList = ({ friends }) => {
  if (friends.length === 0) {
    return null;
  }
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        const statusName = classnames(
          s.status,
          isOnline ? s.online : s.offline
        );
        return (
          <li key={id} className={s.item}>
            <span className={statusName}> </span>
            <img className={s.avatar} src={avatar} alt="" width="48" />
            <p className={s.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;

import React from "react";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map((item) => {
        return (
          <li key={item.id} className={styles.item}>
            {item.isOnline ? (
              <span
                className={`${styles.status}  ${styles.statusIsActiv}`}
              ></span>
            ) : (
              <span className={styles.status}></span>
            )}
            <img
              className={styles.avatar}
              src={item.avatar}
              alt=""
              width="48"
            />
            <p className={styles.name}>{item.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;

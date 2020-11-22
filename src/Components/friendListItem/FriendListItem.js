import React from "react";

const FriendListItem = (friends) => {
  return (
    <>
      {friends.map((item) => {
        return <li>{item.name}</li>;
      })}
    </>
  );
};

export default FriendListItem;

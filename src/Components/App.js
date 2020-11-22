import React from "react";
import user from "../data/user.json";
import statisticalData from "../data/statistical-data.json";
import friends from "../data/friends.json";
import "./App.css";
import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import FriendList from "./friendList/FriendList";

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
    </>
  );
};

export default App;

import React, { use } from "react";
import FriendCard from "../../ui/FriendCard";

const AllFriends = ({ friendsPromise }) => {
  const friends = use(friendsPromise);
  return (
    <div className="max-w-290 mx-auto mt-10">
      <h1 className="text-xl font-semibold">Your Friends</h1>
      <div className=" grid md:grid-cols-2 lg:grid-cols-4 mt-10 gap-4 mb-20">
        {friends.map((friend, index) => {
          return <FriendCard key={index} friend={friend}></FriendCard>;
        })}
      </div>
    </div>
  );
};

export default AllFriends;

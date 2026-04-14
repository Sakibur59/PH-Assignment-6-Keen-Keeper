import React, { Suspense } from "react";
import Hero from "../../Component/HomePage/Hero";
import AllFriends from "../../Component/HomePage/AllFriends";

const friendsPromise = fetch("/friendsData.json").then((res) => res.json());

const HomePage = () => {
  return (
    <div>
      <Hero></Hero>
      <Suspense
        fallback={
          <div className="flex justify-center items-center ">
            <span className="loading loading-spinner loading-lg "></span>
          </div>
        }
      >
        <AllFriends friendsPromise={friendsPromise}></AllFriends>
      </Suspense>
    </div>
  );
};

export default HomePage;

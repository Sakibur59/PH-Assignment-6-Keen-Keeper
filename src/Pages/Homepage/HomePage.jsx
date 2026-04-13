import React, { Suspense } from "react";
import Hero from "../../Component/HomePage/Hero";
import AllFriends from "../../Component/HomePage/AllFriends";


const friendsPromise = fetch("/friendsData.json").then((res) => res.json());

const HomePage = () => {
  return (
    <div>
      <Hero></Hero>
      <Suspense
        fallback={<span className="loading loading-spinner loading-lg"></span>}
      >
        <AllFriends friendsPromise={friendsPromise}></AllFriends>
      </Suspense>
    </div>
  );
};

export default HomePage;

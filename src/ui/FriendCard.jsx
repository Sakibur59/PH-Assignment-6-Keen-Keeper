import React from "react";
import { Link } from "react-router";

const FriendCard = ({friend}) => {
  return (
    <Link
      to={`/friendDetails/${friend.id}`}
      className="card bg-base-100 shadow-sm"
    >
      <figure>
        <img
          src={friend.picture}
          alt={friend.name}
          className="rounded-full h-20 w-20 mt-5"
        />
      </figure>
      <div className="card-body text-center">
        <h1 className="font-semibold text-xl">{friend.name}</h1>
        <p>{friend.days_since_contact}d ago</p>
        <div className="flex justify-center items-center gap-2 ">
          {friend.tags.map((tag, index) => (
            <div
              key={index}
              className="badge text-[#244D3F] bg-[#CBFADB] rounded-full"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">

          <span className={`w-20 rounded-full text-white  ${friend.status==='overdue'? "bg-[#EF4444]": friend.status==='almost due' ?"bg-[#EFAD44]":friend.status==='on-track'?"bg-[#244D3F]":''}`}>
            {friend.status}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;

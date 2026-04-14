import React, { useContext } from "react";
import { friendContext } from "../../../FriendContext/FriendProvide";
import { IoCall } from "react-icons/io5";

const ListedCallList = () => {
  const { callList } = useContext(friendContext);
  const currentDate = new Date();
  const localDate = currentDate.toLocaleDateString()
  return (
    <div>
      {callList.map((friend) => {
        return (
          <div key={friend.id} className="max-w-180 mx-auto min-h-screen">
            <div className="mt-10">
              <h1 className="text-3xl font-semibold ">TimeLine</h1>
            </div>
            <div className="flex gap-1 shadow mt-10 p-4 rounded-md">
              <div className="mr-1 flex justify-center items-center">
                <span className="text-4xl">
                  <IoCall />
                </span>
              </div>
              <div>
                <p>
                  <span className="text-[#244D3F] font-semibold">Call</span>{" "}
                  with {friend.name}
                </p>
                <p>{localDate}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListedCallList;

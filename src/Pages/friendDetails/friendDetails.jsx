import React, { useContext } from "react";
import { FiArchive } from "react-icons/fi";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { IoCall } from "react-icons/io5";
import { LuVideo } from "react-icons/lu";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { useLoaderData, useParams } from "react-router";
import { friendContext } from "../../FriendContext/FriendProvide";

const friendDetails = () => {
  const { friendId } = useParams();
  const friends = useLoaderData();

  const expectedFriend = friends.find((friend) => friend.id == friendId);
const {HandleAllList} = useContext(friendContext);
  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-4xl mx-auto ">
        <div className="grid grid-cols-3 gap-4 bg-[#F8FAFC]">
          <div className="col-span-1 flex flex-col gap-4 ">
            <div className="card bg-base-100  p-5 text-center shadow">
              <div className="flex justify-center mb-3 ">
                <img
                  src={expectedFriend.picture}
                  className="rounded-full w-13"
                />
              </div>
              <h3 className="font-bold text-xl">{expectedFriend.name}</h3>
              <div className="flex justify-center gap-2 my-2 ">
                <span
                  className={`w-23 rounded-full  text-white  ${expectedFriend.status === "overdue" ? "bg-[#EF4444]" : expectedFriend.status === "almost due" ? "bg-[#EFAD44]" : expectedFriend.status === "on-track" ? "bg-[#244D3F]" : ""}`}
                >
                  {expectedFriend.status}
                </span>
              </div>
              <div className="flex justify-center items-center gap-2 mb-2">
                {expectedFriend.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="badge text-[#244D3F] bg-[#CBFADB] rounded-full"
                  >
                    {tag}
                  </div>
                ))}
              </div>

              <p className="text-[#64748B] text-[12px] font-semibold">
                "{expectedFriend.bio}"
              </p>
              <p className="text-[#64748B] text-[12px] mt-1">
                {expectedFriend.email}
              </p>
            </div>

            <div className="card  text-center">
              <button className="btn bg-white mb-2 text-[#1F2937] ">
                <span className="text-xl">
                  <HiOutlineBellSnooze />
                </span>
                Snooze 2 Weeks
              </button>
              <button className="btn  bg-white mb-2 text-[#1F2937] ">
                <span className="text-xl">
                  <FiArchive />
                </span>
                Archive
              </button>
              <button className="btn bg-white text-[#EF4444] ">
                <span className="text-xl">
                  <MdOutlineDeleteOutline />
                </span>
                Delete
              </button>
            </div>
          </div>

          <div className="col-span-2 flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white rounded-xl flex justify-center items-center flex-col p-4 shadow">
                <div className=" text-2xl text-[#244D3F] font-bold">
                  {expectedFriend.days_since_contact}
                </div>
                <div className="text-[#64748B]">Days Since Contact</div>
              </div>
              <div className="bg-white  flex justify-center items-center flex-col rounded-xl p-4 shadow">
                <div className=" text-2xl text-[#244D3F] font-bold">
                  {expectedFriend.goal}
                </div>
                <div className="text-[#64748B]">Goal (Days)</div>
              </div>
              <div className="bg-white  flex justify-center items-center flex-col rounded-xl p-4 shadow">
                <div className=" text-[#244D3F] font-bold">
                  {expectedFriend.next_due_date}
                </div>
                <div className="text-[#64748B]">Next Due</div>
              </div>
            </div>

            <div className="card bg-white  shadow  p-4">
              <div className="flex justify-between items-center mb-2 ">
                <h3 className="font-semibold text-[#244D3F]">
                  Relationship Goal
                </h3>
                <button className="btn ">Edit</button>
              </div>
              <p className="text-[#1F2937]">
                Connect every <strong>{expectedFriend.goal} days</strong>
              </p>
            </div>

            <div className="card bg-white p-4 shadow">
              <h3 className="font-semibold mb-3 text-[#244D3F]">
                Quick Check-In
              </h3>
              <div className="grid grid-cols-3 gap-3">
                <button onClick={()=>HandleAllList("Call", expectedFriend)} className="btn  flex-col h-20 py-4 gap-2">
                  <span className="text-xl">
                    <IoCall />
                  </span>
                  Call
                </button>
                <button onClick={()=>HandleAllList("Text",expectedFriend)} className="btn  flex-col  h-20 py-4 gap-2">
                  <span className="text-xl">
                    <RiMessage2Line />
                  </span>
                  Text
                </button>
                <button onClick={()=>HandleAllList("Video",expectedFriend)}  className="btn  flex-col h-20  py-4 gap-2">
                  <span className="text-xl">
                    <LuVideo />
                  </span>
                  Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default friendDetails;

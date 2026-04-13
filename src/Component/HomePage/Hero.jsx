import React from "react";

const Hero = () => {
  return (
    <div className="max-w-290 mx-auto mt-30">
      <div className="space-y-6 text-center ">
        <h1 className="text-[#1F2937] text-5xl font-bold">
          Friends to keep close in your life
        </h1>
        <p className="text-[#64748B]">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br />
          relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] text-white px-6 py-2 rounded-md ">
          + Add a Friend
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5 text-center mt-5  p-10 border-b border-[#E9E9E9]">
        <div className="card  card-lg shadow-sm bg-white">
          <div className="card-body ">
            <h2 className="text-center text-[#244D3F] font-semibold text-3xl">10</h2>
            <p className="text-[#64748B]">
             Total Friends
            </p>
          </div>
        </div>
        <div className="card  card-lg shadow-sm bg-white">
          <div className="card-body ">
            <h2 className="text-center text-[#244D3F] font-semibold text-3xl">3</h2>
            <p className="text-[#64748B]">
             On Track
            </p>
          </div>
        </div>
        <div className="card  card-lg shadow-sm bg-white">
          <div className="card-body ">
            <h2 className="text-center text-[#244D3F] font-semibold text-3xl">6</h2>
            <p className="text-[#64748B]">
             Need Attention
            </p>
          </div>
        </div>
        <div className="card  card-lg shadow-sm bg-white">
          <div className="card-body ">
            <h2 className="text-center text-[#244D3F] font-semibold text-3xl">12</h2>
            <p className="text-[#64748B]">
             Interactions This Month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

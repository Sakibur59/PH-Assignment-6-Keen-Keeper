import React from "react";

const Hero = () => {
  return (
    <div className="max-w-290 mx-auto text-center mt-30">
      <div className="space-y-6">
        <h1 className="text-[#1F2937] text-5xl font-bold">Friends to keep close in your life</h1>
        <p className="text-[#64748B]">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br />relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] text-white px-6 py-2 rounded-md ">+ Add a Friend</button>
      </div>
    </div>
  );
};

export default Hero;

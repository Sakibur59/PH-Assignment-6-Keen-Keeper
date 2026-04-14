import React, { useContext } from "react";
import { friendContext } from "../../FriendContext/FriendProvide";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const Stats = () => {
  const { AllList } = useContext(friendContext);

  const TotalCall = AllList.filter((item) => item.type === "Call").length;
  const TotalText = AllList.filter((item) => item.type === "Text").length;
  const TotalVideo = AllList.filter((item) => item.type === "Video").length;

  const data = [
    {
      name: "Call",
      value: TotalCall,
      fill:"#244D3F"
    },
    {
      name: "Text",
      value: TotalText,
      fill:"#7E35E1"
    },
    {
      name: "Video",
      value: TotalVideo,
      fill:"#37A163"
    },
  ];
  return (
    <div className="max-w-190 mx-auto min-h-screen">
      <h1 className="font-bold text-[#1F2937] mt-10 text-4xl">Friendship Analytics</h1>
      <div className=" mt-10 max-w-190 mx-auto shadow border border-slate-300 rounded-md">
        <div>
            <h3 className="text-[#244D3F] p-4 font-bold">By Interaction Type</h3>
        </div>
        <div className="flex justify-center items-center">
          <PieChart
            style={{
              width: "40%",
              maxWidth: "300px",
              maxHeight: "60vh",
              aspectRatio: 1,
            }}
            responsive
          >
            <Pie
              data={data}
              innerRadius="80%"
              outerRadius="100%"

              cornerRadius="50%"
              fill="#8884d8"
             
              paddingAngle={5}
              dataKey="value"
            />
            
            <Legend></Legend>
            <Tooltip></Tooltip>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Stats;
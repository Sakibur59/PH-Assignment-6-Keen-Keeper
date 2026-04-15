import React, { useContext, useState } from 'react';
import { friendContext } from '../../FriendContext/FriendProvide';
import { IoCall } from 'react-icons/io5';
import { LuVideo } from 'react-icons/lu';
import { RiMessage2Line } from 'react-icons/ri';

const Timeline = () => {
    const {AllList} = useContext(friendContext)
    const [filterData,setFilterData] = useState('all');

    const handleFilterData = filterData === 'all' ? AllList : AllList.filter((item)=> item.type === filterData)

    return (
  <div className='max-w-190 mx-auto mt-20 min-h-screen'>
    <h1 className='font-bold text-4xl'>Timeline</h1>

    <div className='mb-4 mt-3'>
        <select className='w-full sm:w-36 md:w-48 lg:w-70 py-4 rounded-md shadow border border-[#E9E9E9]' value={filterData} onChange={(e)=> setFilterData(e.target.value)}>
            <option value='all'>Filter Timeline</option>
            <option value='Call'>Call</option>
            <option value='Text'>Text</option>
            <option value='Video'>Video</option>
        </select>
    </div>
    {handleFilterData.map((item,index) => (
      <div key={index} className="flex items-center gap-2 p-3 shadow mb-3">
        
        <div>

        <span className='text-xl'>
          {item.type === "Call" && <IoCall />}
          {item.type === "Text" && <RiMessage2Line />}
          {item.type === "Video" && <LuVideo />}
        </span>
        </div>

        
        <div className=''>
          <h3><span className='text-[#244D3F] font-bold'>{item.type}</span> With {item.name}</h3>
          <p>{new Date(item.time).toLocaleString()}</p>
        </div>

      </div>
    ))}
  </div>
);
};

export default Timeline;
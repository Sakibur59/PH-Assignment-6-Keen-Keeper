import React, { useContext } from 'react';
import { friendContext } from '../../FriendContext/FriendProvide';
import { IoCall } from 'react-icons/io5';
import { LuVideo } from 'react-icons/lu';
import { RiMessage2Line } from 'react-icons/ri';

const Timeline = () => {
    const {AllList} = useContext(friendContext)
    
    return (
  <div className='max-w-190 mx-auto mt-20 min-h-screen'>
    <h1 className='font-bold text-4xl'>Timeline</h1>
    {AllList.map((item,index) => (
      <div key={index} className="flex items-center gap-2 p-3 shadow mb-3">
        
        <div>

        <span className='text-xl'>
          {item.type === "Call" && <IoCall />}
          {item.type === "Text" && <RiMessage2Line />}
          {item.type === "Video" && <LuVideo />}
        </span>
        </div>

        
        <div className=''>
          <h3>{item.name}</h3>
          <p>{new Date(item.time).toLocaleString()}</p>
        </div>

      </div>
    ))}
  </div>
);
};

export default Timeline;
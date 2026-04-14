import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const friendContext = createContext();

const FriendProvider = ({ children }) => {
  const [AllList, setAllList] = useState([]);


 const HandleAllList = (type, currentFriend) => {
    const newItem = {
      friendId: currentFriend.id,
      name: currentFriend.name,
      type: type,
      time: new Date(),
    };

    setAllList([newItem, ...AllList]);

    toast.success(`${type} with ${currentFriend.name}`);
  };
 

  const data = {
    AllList,
    HandleAllList
    
  };
  return <friendContext.Provider value={data}>{children}</friendContext.Provider>;
};

export default FriendProvider;

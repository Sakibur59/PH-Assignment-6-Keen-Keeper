import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const friendContext = createContext();

const FriendProvider = ({ children }) => {
  const [callList, setCallList] = useState([]);

  const [textList ,setTextList] = useState([])

  const handleCallList = (currentFriend) => {
    const isExistFriend = callList.find(
      (friend) => friend.id === currentFriend.id,
    );

    if (isExistFriend) {
      toast.error("The book is already Mark as read");
    } else {
      setCallList([...callList,currentFriend]);
      toast.success(`${currentFriend.name} is added to Make as read`);
    }
  };
  const handleTextList = (currentFriend) => {
    const isExistInCallList = callList.find(
      (friend) => friend.id === currentFriend.id,
    );

    if (isExistInCallList) {
      toast.error("The book is already in read list");
      return;
    }

    const isExistInTextList = textList.find(
      (friend) => friend.id === currentFriend.id,
    );

    if (isExistInTextList) {
      toast.error("The book is already in Wishlist");
    } else {
      setTextList([...textList, currentFriend]);
     toast.success(`${currentFriend.name} is added to Text`);
    }
  };

  const data = {
    setCallList,
    callList,
    handleCallList,
    textList,
    setTextList,
    handleTextList
  };
  return <friendContext.Provider value={data}>{children}</friendContext.Provider>;
};

export default FriendProvider;

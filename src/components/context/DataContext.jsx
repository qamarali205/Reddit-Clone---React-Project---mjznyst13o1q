import { useContext,createContext, useState} from "react";
import React from 'react';

const DataContext=createContext();

export const DataContextProvider = ({children}) => {
     const [posts,setPosts] =useState([
        {
            postedBy: "Kunal",
            postText:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            upVotes:3,
            downVotes:1
        },
        {
            postedBy: "XYZ",
            postText:
                "The quick brown fox jumps right over the lazy dog",
            upVotes:0,
            downVotes:1
        },
        {
            postedBy: "QAMAR Ali",
            postText:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            upVotes:3,
            downVotes:0
        },
    ]);
    const setNewPosts=(post)=>{
        setPosts([...posts,post])
    }
  return (
    <DataContext.Provider value={{posts,setNewPosts}}>
        {children}
    </DataContext.Provider>

  )
}

export const DataPostContext=()=>{
    return useContext(DataContext);
};

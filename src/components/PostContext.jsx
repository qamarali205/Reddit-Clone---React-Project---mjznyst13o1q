import React, { createContext, useState } from "react";

export const PostContext = createContext();

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    {
      postedBy: "Kunal",
      postText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      upVotes: 3,
      downVotes: 1,
    },
    {
      postedBy: "XYZ",
      postText: "The quick brown fox jumps right over the lazy dog",
      upVotes: 0,
      downVotes: 1,
    },
    {
      postedBy: "QAMAR Ali",
      postText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      upVotes: 3,
      downVotes: 0,
    },
  ]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <PostContext.Provider value={{ posts, addPost }}>
      {children}
    </PostContext.Provider>
  );
};

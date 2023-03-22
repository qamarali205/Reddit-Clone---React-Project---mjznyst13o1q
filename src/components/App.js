import React, { useState } from "react";
import "../styles/App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./header/Header";
import Post from "./post/Post";

// import { Routes, Route,Link } from "react-router-dom";
import Login from "./login/Login";
import SignUp from "./signup/SignUp";

const postData = [
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
];

const App = () => {
  const [posts, setPosts] = useState(postData);
  const setPostsHandler = (data) => {
    setPosts([...posts, data]);
    console.log(posts);
  };
  console.log(posts);
  return (
    <div id="main">
      {/* <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link> */}
     
        {/* <Routes>
          <Route path='/' element={<Header setPosts={setPostsHandler} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes> */}
        
      
       <Header setPosts={setPostsHandler} />
      {posts.map((post, index) => (
        <Post key={Math.random()} post={post} index={index} />
       ))}

      {/* <LoginForm />
      <Footer /> */}
      {/* <Landing /> */}
    </div>
  );
};

export default App;
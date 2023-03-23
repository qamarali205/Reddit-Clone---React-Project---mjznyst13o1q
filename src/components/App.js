import React, { useState } from "react";
import "../styles/App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./header/Header";
import Post from "./post/Post";
import { AuthContextProvider } from "./context/AuthContext";
import Welcome from "./welcome/Welcome";

// import { Routes, Route,Link } from "react-router-dom";
import Login from "./login/Login";
import SignUp from "./signup/SignUp";

const postData = [
  {
    postedBy: "Kunal",
    postText:
      "First Post.",
    upVotes: 3,
    downVotes: 1,
  },
  {
    postedBy: "XYZ",
    postText: "Second Post",
    upVotes: 0,
    downVotes: 1,
  },
  {
    postedBy: "QAMAR Ali",
    postText:
      "Third Post.",
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
      <AuthContextProvider>
      {/* <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link> */}
     
        {/* <Routes>
          <Route path='/' element={<Header setPosts={setPostsHandler} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes> */}
        
      
       <Header setPosts={setPostsHandler} />
      <Welcome />
      {posts.map((post, index) => (
        <Post key={Math.random()} post={post} index={index} />
       ))}

      {/* <LoginForm />
      <Footer /> */}
      {/* <Landing /> */}
      </AuthContextProvider>
    </div>
  );
};

export default App;
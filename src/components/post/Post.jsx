import React, { useState } from "react";
import "./post.css";
import ArrowUp from "@material-ui/icons/ArrowUpward";
import ArrowDown from "@material-ui/icons/ArrowDownward";
import { UserAuth } from "../context/AuthContext";

const Post = (props) => {
  // const addNewPost = (newPost) => {
  //     setPosts([...posts, newPost]);
  const [upFlag, setUpFlag]=useState(true)
  const [downFlag, setDownFlag]=useState(true)
  // let upFlag=true;
  // let downFlag=true;
  const {user}=UserAuth();

  const post = props.post;
  const index = props.index;

  const [upVote, setUpVote] = useState(post.upVotes);
  const [downVote, setDownVote] = useState(post.downVotes);

  
  const upvoteCounter=()=>{
    if(user && upFlag){
      setUpVote(upVote + 1);
      // upFlag=false;
      setUpFlag(false);
    }
    
  }
  const downvoteCounter=()=>{
    if(user && downFlag){
      setDownVote(downVote + 1);
      // downFlag=false;
      setDownFlag(false);
    }
  }
  //   }
  console.log(props);

  return (
    <>
      <div className="card1" key={index}>
        <div className="post">
          <div className="arrow">
            <span
              className="arrowup hoverable"
              onClick={upvoteCounter}
            >
              <ArrowUp />
            </span>
            <span
              className="arrowdown hoverable"
              onClick={downvoteCounter}
            >
              <ArrowDown />
            </span>
          </div>
          <div className="post-text">{post.postText}</div>
        </div>
        <div className="vote">
          <span className="voteup">{upVote}</span>
          <span className="votedown">{downVote}</span>
        </div>
      </div>
    </>
  );
};

export default Post;
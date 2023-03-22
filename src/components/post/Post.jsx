import React, { useState } from "react";
import "./post.css";
import ArrowUp from "@material-ui/icons/ArrowUpward";
import ArrowDown from "@material-ui/icons/ArrowDownward";

const Post = (props) => {
  // const addNewPost = (newPost) => {
  //     setPosts([...posts, newPost]);
  const post = props.post;
  const index = props.index;

  const [upVote, setUpVote] = useState(post.upVotes);
  const [downVote, setDownVote] = useState(post.downVotes);
  //   }
  console.log(props);

  return (
    <>
      <div className="card1" key={index}>
        <div className="post">
          <div className="arrow">
            <span
              className="arrowup hoverable"
              onClick={() => setUpVote(upVote + 1)}
            >
              <ArrowUp />
            </span>
            <span
              className="arrowdown hoverable"
              onClick={() => setDownVote(downVote + 1)}
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
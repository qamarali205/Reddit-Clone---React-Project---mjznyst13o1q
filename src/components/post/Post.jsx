import React, { useState } from 'react';
import './post.css';
import ArrowUp from '@material-ui/icons/ArrowUpward';
import ArrowDown from '@material-ui/icons/ArrowDownward';

const posts = [
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
];



const Post = () => {
    // const addNewPost = (newPost) => {
    //     setPosts([...posts, newPost]);
    //   }
   
    
  return (
    <>
    {console.log(posts)}
     {posts.map((post,index)=>{
        const [upVote, setUpVote]=useState(post.upVotes);
        const [downVote, setDownVote]=useState(post.downVotes);
        return (
            
                <div className='card1' key={index}>
                    <div className='post'>
                        <div className='arrow'>
                            <span className='arrowup hoverable' onClick={()=>setUpVote(upVote+1)}><ArrowUp /></span>
                            <span className='arrowdown hoverable' onClick={()=>setDownVote(downVote+1)}><ArrowDown /></span>
                        </div>
                        <div className='post-text'>{post.postText}</div> 
                    </div>
                    <div className='vote'>
                        <span className='voteup'>{upVote}</span>           
                        <span className='votedown'>{downVote}</span>                        
                    </div>
                </div>
            
        )
       
     })}
      
    </>
  )
}

export default Post;

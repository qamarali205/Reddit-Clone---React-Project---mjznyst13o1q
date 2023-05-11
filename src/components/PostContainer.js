import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FaRegThumbsUp, FaRegThumbsDown, FaTruckLoading } from "react-icons/fa";

import { db } from "../firebase/firebase-config";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { Stack } from "@mui/system";
// import { TramRounded } from "@mui/icons-material";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

export default function PostContainer() {
  const forReRedering = useSelector((state) => state.auth.forReRender);

  const [posts, setPosts] = useState([]);
  const [rerender, setRerender] = useState(false);
  // const [loading, setLoading] = useState(false);

  const postsCollectionRef = collection(db, "Posts");

  useEffect(() => {
    const getPosts = async () => {
      //  Implement it later
      // setLoading(true);
      const data = await getDocs(postsCollectionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      // Implement it later
      // setLoading(false);
    };

    getPosts();
  }, [rerender, forReRedering]);

  const isUserVotedAlready = (votedId) => {
    let arr = localStorage.getItem("votedArr");

    if (arr === null) return false;

    if (arr.includes(votedId)) {
      return true;
    }
    return false;
  };

  const handleUpVote = async (id, upvotes) => {
    if (!isUserVotedAlready(id)) {
      const postDoc = doc(db, "Posts", id);
      const updatedVote = { upvotes: Number(upvotes) + 1 };
      await updateDoc(postDoc, updatedVote);
      setRerender(!rerender);
      localStorage.setItem("votedArr", [localStorage.getItem("votedArr"), id]);
    } else {
      toast.error("You already have voted!");
    }
  };

  const handleDownVote = async (id, downvotes) => {
    if (!isUserVotedAlready(id)) {
      const postDoc = doc(db, "Posts", id);
      const updatedVote = { downvotes: Number(downvotes) - 1 };
      await updateDoc(postDoc, updatedVote);
      setRerender(!rerender);
      localStorage.setItem("voted", true);
    } else {
      toast.error("You already have voted!");
    }
  };

  return (
    <>
      <ToastContainer />

      <div id="postContainer">
        {posts.map((post) => {
          return (
            <Card sx={{ maxWidth: 345 }} id="containerPostItems" key={post.id}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {post.postedBy[0]}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={post.postedBy}
                subheader={post.date}
              />
              <CardMedia
                component="img"
                height="194"
                image={post.image}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="h6">{post.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.postText}
                </Typography>
              </CardContent>
              <CardActions
                style={{
                  width: 100,
                  justifyContent: "space-between",
                  height: "40px",
                  alignItems: "center",
                }}
              >
                <Stack
                  width={40}
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  height={"40px"}
                  alignItems={"center"}
                  columnGap=".2rem"
                >
                  <IconButton
                    onClick={() => handleUpVote(post.id, post.upvotes)}
                  >
                    <FaRegThumbsUp />
                  </IconButton>
                  <Typography>{post.upvotes}</Typography>
                </Stack>

                <Stack
                  width={40}
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  height={"40px"}
                  alignItems={"center"}
                  columnGap=".2rem"
                >
                  <IconButton
                    onClick={() => handleDownVote(post.id, post.downvotes)}
                  >
                    <FaRegThumbsDown />
                  </IconButton>
                  <Typography>{post.downvotes}</Typography>
                </Stack>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </>
  );
}

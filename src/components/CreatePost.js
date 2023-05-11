import React, { useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";

import { storage } from "../firebase/firebase-config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { pageReRender } from "../redux/authSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CreatePost() {
  const navigate = useNavigate();

  // const userStatus = useSelector((state) => state.auth.userAuthStatus);
  const pageReload = useSelector((state) => state.auth.forReRender);

  const dispatch = useDispatch();

  // const [checkUserAuth, setCheckUserAuth] = useState(userStatus);

  // useEffect(() =>{
  //   setCheckUserAuth(userStatus);
  // }, [userStatus])

  const [open, setOpen] = React.useState(false);
  // const [close, setClose] = React.useState(true);
  const handleClose = () => setOpen(false);

  const [titleText, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // const [rerender, setRerender] = useState(false);

  const [progress, setProgress] = useState(0);

  const postsCollectionRef = collection(db, "Posts");

  let date = new Date().toLocaleDateString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  let downvotes = 0;
  let image = imageUrl;
  let postText = message;
  let postedBy = localStorage.getItem("name") || "Unknown";
  let title = titleText;
  let upvotes = 0;

  const handleOpen = () => {
    if (localStorage.getItem("isUserLoggedIn") !== "true") {
      handleClose();
      navigate("/signin");
      // setClose();
    } else {
      setOpen(true);
    }
  };

  const handleNavigate = () => {
    handleClose();
    navigate("/");
  };

  const handleCancel = () => {
    handleClose();
    navigate("/");
  };

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
     console.log(file);
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_change",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          //  console.log(url);
          setImageUrl(url);
        });
      }
    );
  };

  const handleSave = async () => {
    if (titleText && message && imageUrl) {
      setTitle("");
      setMessage("");
      setImageUrl("");

      await addDoc(postsCollectionRef, {
        date,
        downvotes,
        image,
        postText,
        postedBy,
        title,
        upvotes,
      });
      setTimeout(() => {
        toast.success("Post has created successfully");
      }, 500);
      dispatch(pageReRender(!pageReload));
      handleClose();
      // setRerender(!rerender);
    } else {
      toast.error("Please fill all fields");
    }
  };

  return (
    <div>
      <ToastContainer />
      <Button onClick={handleOpen} variant="contained">
        Create Post
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id="create-post">
          <GrClose id="close-icon" onClick={handleNavigate} />
          <Typography variant="h5">Add new post</Typography>
          <TextField
            width="100%"
            id="outlined-basic"
            label="Post Title"
            variant="outlined"
            value={titleText}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            style={{ width: "100%" }}
            id="filled-multiline-static"
            label="Enter Your Message..."
            multiline
            rows={4}
            // defaultValue="Default Value"
            variant="filled"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <Box>
            {/* <Box> */}
            <form onSubmit={formHandler}>
              <input accept="image/*" type="file" />
              <button type="submit">Upload</button>
            </form>
            {/* </Box> */}
            <hr />
            <h3 onClick={uploadFiles}>Uploaded {progress} %</h3>
          </Box>

          <Box id="create-btns">
            <Button variant="outlined" id="" onClick={handleCancel}>
              Close
            </Button>
            <Button variant="contained" id="" onClick={() => handleSave()}>
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

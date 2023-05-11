import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { GrClose } from "react-icons/gr";
import { IoMdLock } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { auth } from "../firebase/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

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

export default function SignUpModal() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [err, setErr] = useState("");

  const [open, setOpen] = React.useState(true);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleNavigate = () => {
    handleClose();
    navigate("/");
  };

  const handleSubmit = (e) => {
    //TODO : handle submit
    if (name && email && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setName("");
          setEmail("");
          setPassword("");
          setErr("");
          handleClose();
          // Signed in
          // const user = userCredential.user;
          // console.log(user);
          setTimeout(()=>{
          toast.success(`Signed Up successfully`);
          }, 500)
          navigate("/signin");
         localStorage.setItem("name", name);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.message;
          setErr(errorCode);
        });
    } else {
      toast.error("Please fill input fields!");
    }
  };

  return (
    <div>
      <ToastContainer />
      {/* <Button onClick={handleOpen} variant="contained">
        SignUp
      </Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box id="form-style" sx={style}>
          {err && <em id="err-style">{err}</em>}
          <GrClose id="close-icon" onClick={handleNavigate} />
          <IoMdLock id="lock" />
          <Typography variant="h5" style={{ textAlign: "center" }}>
            Sign Up
          </Typography>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            type={"text"}
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            type={"email"}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={password}
            type={"password"}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" id="btnSignIn" onClick={handleSubmit}>
            SignIn
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

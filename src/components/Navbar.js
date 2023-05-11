import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/system";
import { blueGrey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";
import CreatePost from "./CreatePost";
import { auth } from "../firebase/firebase-config";
import { signOut } from "firebase/auth";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { authStatus } from "../redux/authSlice";
import logo from '../assets/logo-trans.png';

export default function Navbar() {
  
  const getUserAuthUpdate = useSelector(state => state.auth.userAuthStatus);
  const dispatch = useDispatch();
  
  // alert("user"+" "+getUserAuthUpdate);
  // const [mess, setMess] = useState(getUserAuthUpdate);
  const [showLogin, setshowLogin] = useState(getUserAuthUpdate);

  useEffect(() =>{
    //  alert("rerender=======>")
  }, [showLogin])

  const navigate = useNavigate();


  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.setItem("isUserLoggedIn", false);
        dispatch(authStatus(false));
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleLogin = () => {
    navigate("/signin");
  };

 

  return (
    
    <Box sx={{ flexGrow: 1 }}>
      
        
      <AppBar
        position="fixed"
        sx={{ bgcolor: blueGrey[100], columnGap: "2rem" }}
      >
        
        
        
        <ToastContainer />
        <Toolbar>
        <img className="header_img" src={logo} alt="logo" />
          <CreatePost />
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            columnGap="2rem"
          >
            {localStorage.getItem("isUserLoggedIn") === "true" ? (
              <Button onClick={handleLogout} variant="outlined">
                Logout
              </Button>
            ) : (
              <>
                <Button onClick={handleLogin} variant="outlined">
                  Login
                </Button>
              </>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
      

      <Routes>
        <Route path="/signin" element={<SignInModal />} />
        <Route path="/signup" element={<SignUpModal />} />
      </Routes>
    </Box>
  );
}

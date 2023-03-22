import React, { useState, useContext,useEffect } from "react";
import "./Header.css";
import logo from "../../Images/logo-removebg-preview.png";
// import Modal from 'react-modal';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { UserAuth } from "../context/AuthContext";

//  import { posts } from '../post/Post';
// import { DataPostContext } from '../context/DataContext';
const Header = (props) => {
  const {googleSignIn, logOut, user}=UserAuth();
  // const {posts,setNewPosts}=DataPostContext();

  const [modalOpen, setModalOpen] = useState(false);
  const [postTitle, setPostTitle] = useState("");

  const modalhanelOpen = () => {
    if(user){
    setModalOpen(true);
    }
  };
  const modalhanelClose = () => {
    setModalOpen(false);
  };
  const savePostHandel = (e) => {
    setPostTitle("");
    setModalOpen(false);
    const newData = {
      postedBy: "Kunal",
      postText:postTitle,
      upVotes: 0,
      downVotes: 0,
    };

    props.setPosts(newData);
    console.log(props);
  };
  const isSaveButtonDisabled = postTitle.trim().length === 0;

  


  const [isSignIn, setSignIn] = useState(true);
  const [title, setTitle] = useState("Login");

  const handleLogin = async () => {
    try {
      let signIn = !isSignIn;
      setSignIn(signIn);
      if (isSignIn) {
        await googleSignIn();
      } else {
        await logOut();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      setTitle("Log Out");
    } else {
      setTitle("Log In");
    }
  }, [user]);

  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" />

        <button className="btn btn-primary" onClick={modalhanelOpen}>
          Add new post
        </button>
        <button className="btn btn-primary" onClick={handleLogin}>
          {title}
        </button>
        {/* <Modal isOpen={modalOpen} onRequestClose={modalhanelClose} className='modal'> */}
        {/* Modal Content Goes Here */}
        {/* <div className='postmain'>
            <div className='modal-header'><div>Add new post</div><div onClick={modalhanelClose}>X</div></div>
            <p>Post title</p>
            <textarea name="titledata" id="" cols="20" rows="10"></textarea>
            <div>
            <button onClick={modalhanelClose}>Close</button>
            <button onClick={savePostHandel} disabled>save</button>
            </div>
        </div> */}

        {/* </Modal> */}
      </div>

      <Modal
        show={modalOpen}
        onHide={modalhanelClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Post title</p>
          {/* <textarea name="" id="" cols="60" rows="5"></textarea> */}
          <Form.Control
            as="textarea"
            placeholder="Add Own new post here"
            style={{ height: "100px" }}
            value={postTitle}
            onChange={(event) => setPostTitle(event.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modalhanelClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={savePostHandel}
            disabled={isSaveButtonDisabled}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Header;
import React from "react";
import "./PostMobile.css";
import { Avatar } from "@material-ui/core";
import ThumbsUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined } from "@material-ui/icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useStateValue } from "../../assets/stateProvider";

function Post({ key, profilePic, message, timestamp, username, image }) {
  const [{ userData }, dispatch] = useStateValue();

  let userProfilePic;
  let userEmail;
  let userUID;
  let userDisplayName;

  if (userData) {
    userData.map((user) => {
      userProfilePic = user.photoURL;
      userEmail = user.email;
      userUID = user.uid;
      userDisplayName = user.displayName;
    });
  }
  return (
    <div className="post" key={key}>
      <div className="post__header">
        <Avatar src={userProfilePic} />
        <div className="post__headerInfo">
          <h3>{userDisplayName}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      

      <div className="post__image">
        <img src={image} alt="user posted image" />
      </div>
      <div className="post__headerBottom">
        <p>{message}</p>
      </div>

      {/* <div className="post__bottomOptions">
        <div className="post__bottomOption">
          <ThumbsUpIcon />
          <p>Like</p>
        </div>

        <div className="post__bottomOption">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>

        <div className="post__bottomOption">
          <NearMeIcon />
          <p>Share</p>
        </div>

        <div className="post__bottomOption">
          <AccountCircleIcon />
          <ExpandMoreOutlined />
        </div>
      </div> */}
    </div>
  );
}

export default Post;

import React from "react";
import "./PostMobile.css";
import { Avatar } from "@material-ui/core";

function Post({ key, photoURL, message, timestamp, displayName, image }) {
  return (
    <div className="post" key={key}>
      <div className="post__header">
        <Avatar src={photoURL} />
        <div className="post__headerInfo">
          <h5>{displayName ? displayName : "Player Post"}</h5>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className="post__image">
        <img src={image} alt="user posted image" />
      </div>
      <div className="post__headerBottom">
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Post;

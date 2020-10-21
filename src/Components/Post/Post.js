import React from "react";

import "./Post.css";

import { useStateValue } from "../../assets/stateProvider";

import { Avatar } from "@material-ui/core";
import ThumbsUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined } from "@material-ui/icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";


function Post() {
  const [{ user, posts }, dispatch] = useStateValue();

  let sortedPosts = posts.sort(function (a, b) {
    const aTimestamp = a.postData.timestamp;
    const bTimestamp = b.postData.timestamp;

    let postComparison = 0;

    if (aTimestamp > bTimestamp) {
      postComparison = 1;
    } else if (aTimestamp < bTimestamp) {
      postComparison = -1;
    }
    ;
    return postComparison;
    
  });

  let postList = sortedPosts.map((post) => {
    return (
      <div className="post" key={post.postId}>
        <div className="post__top">
          <Avatar src="" className="post__avatar" />
          <div className="post__topInfo">
            <h3>{user}</h3>
            {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
          </div>
        </div>
        <div className="post__bottom">
          <p>{post.postData.message}</p>
        </div>

        <div className="post__image">
          <img src={post.postData.image} alt="user posted image" />
        </div>

        <div className="post__options">
          <div className="post__option">
            <ThumbsUpIcon />
            <p>Like</p>
          </div>

          <div className="post__option">
            <ChatBubbleOutlineIcon />
            <p>Comment</p>
          </div>

          <div className="post__option">
            <NearMeIcon />
            <p>Share</p>
          </div>

          <div className="post__option">
            <AccountCircleIcon />
            <ExpandMoreOutlined />
          </div>
        </div>
      </div>
    );
  });

  return <>{postList}</>;
}

export default Post;
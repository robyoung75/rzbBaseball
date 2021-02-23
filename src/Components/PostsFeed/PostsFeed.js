import React, { useEffect } from "react";
import PostInput from "../PostInput/PostInput";
import Post from "../Post/Post";
import { db } from "../../assets/firebase";
import { useStateValue } from "../../assets/stateProvider";
import "./PostsFeedMobile.css";

function PostsFeed() {
  const [{ posts, userData }, dispatch] = useStateValue();

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        dispatch({
          type: "POST_DATA",
          post: snapshot.docs.map((doc) => ({
            postId: doc.id,
            postData: doc.data(),
          })),
        });
      });
  }, []);

  return (
    <div className="postsFeed">
     
        {posts.map((post) => (
          <div key={post.postId}>
            <Post
              message={post.postData.message}
              timestamp={post.postData.timestamp}
              image={post.postData.image}
            />
          </div>
        ))}
  
    </div>
  );
}

export default PostsFeed;

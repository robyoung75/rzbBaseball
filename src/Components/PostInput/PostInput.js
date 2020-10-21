import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import "./PostInput.css";
import React, { useState } from "react";
import { useStateValue } from "../../assets/stateProvider";
import { db, storage } from "../../assets/firebase";
import firebase from 'firebase';

function PostInput() {
  const [{ playerData, user }, dispatch] = useStateValue();
  const [input, setInput] = useState("")
  const [imageURL, setImageURL] = useState("")

  let playersImage = playerData.map((player) => player.image);
  let playersName = playerData.map((player) => player.name);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   db.collection('posts').add({
  //     message: input,
  //     image: imageURL,
  //     timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
  //   })

  //   setInput("");
  //   setImageURL("");
  // }

  const onFileChange = (e) => {
    
    const file = e.target.files[0];
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      console.log('UPLOADED_FILE >>> ', file.name)
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="postInput">
      <div className="postInput__top">
        <Avatar src={playersImage[0]} />
        <form onSubmit={onSubmit}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            className="postInput__input"
            placeholder={`What's on your mind ${user}?`}
          />

          <input
            value={imageURL}
            onChange={onFileChange}
            placeholder="image URL (optional)"
            type="file"
          />

          <button
            onClick={onSubmit}
            type="submit"
          >
            {/* submit */}
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="postInput__bottom">
        <div className="postInput__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="postInput__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="postInput__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default PostInput;

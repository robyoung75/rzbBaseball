import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import "./PostInput.css";
import React, { useState } from "react";
import { useStateValue } from "../../assets/stateProvider";
import { db, storage } from "../../assets/firebase";
import firebase from "firebase";

function PostInput() {
  const [{ playerData, user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [fileSize, setFileSize] = useState(null);
  const [fileName, setFileName] = useState("");
  const [fileType, setFileType] = useState("");

  let playersImage = playerData.map((player) => player.image);
  let playersName = playerData.map((player) => player.name);

  const returnFileSize = (number) => {
    if (number < 1024) {
      return number + "bytes";
    } else if (number >= 1024 && number < 1048576) {
      return (number / 1024).toFixed(1) + "KB";
    } else if (number >= 1048576) {
      return (number / 1048576).toFixed(1) + "MB";
    }
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setFileSize(e.target.files[0].size);
    setFileName(e.target.files[0].name);
    setFileType(e.target.files[0].type);
    setInput(e.target.value);

    const file = e.target.files[0];
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);

    fileRef.put(file).then(() => {
      console.log("UPLOADED_FILE >>> ", file.name);
    });
  };
  const handlePostSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      image: imageURL,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  // const onFileChange = (e) => {
  //   const file = e.target.files[0];
  //   const storageRef = storage.ref();
  //   const fileRef = storageRef.child(file.name);
  //   fileRef.put(file).then(() => {
  //     console.log("UPLOADED_FILE >>> ", file.name);
  //   });
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    setInput("");
    setImageURL("");
  };

  return (
    <div className="postInput">
      <div className="postInput__top">
        <form onSubmit={onSubmit}>
          <Avatar src={playersImage[0]} style={{position: "absolute"}} />
          <input
            // value={input}
            onChange={(e) => setInput(e.target.value)}
            className="postInput__messageInput"
            placeholder={`What's on your mind?`}
          />
          <label htmlFor="image_uploads" className="postInput__topLabel">
            <p>Upload Image</p>
          </label>
          <input
            className="postInput__imageInput"
            type="file"
            id="image_uploads"
            name="image_uploads"
            accept=".jpg, .jpeg, .png"
            multiple
            value={imageURL}
            onChange={handleInputChange}
          />
          <div className="postInput__btn">
            <button onClick={handlePostSubmit} type="submit">
              Submit
            </button>
          </div>
        </form>
        <div className="postInput__preview">
          <p>
            {!input
              ? "No files currently selected for upload"
              : `upload file NAME: ${fileName}__TYPE${fileType}__SIZE${returnFileSize(
                  fileSize
                )}`}
          </p>
        </div>
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

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
  const [{ playerData, user, userData }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState(null);
  const [fileSize, setFileSize] = useState(null);
  const [fileName, setFileName] = useState("");
  const [fileType, setFileType] = useState("");
  const [fileURL, setFileURL] = useState([]);

  let playersImage = playerData.map((player) => player.image);
  let playersName = playerData.map((player) => player.name);
  
  let userProfilePic;

  if(userData) {
    userData.map(user => {
       userProfilePic = user.photoURL;
    })
  }



  let userEmail;
  let userUID;
  let userDisplayName;
  
  // if(userData){userData.map(obj => {
  //   userEmail = obj.email;
  //   userUID = obj.uid;
  //   userDisplayName = obj.displayName;

  // })}

  const returnFileSize = (number) => {
    if (number < 1024) {
      return number + "bytes";
    } else if (number >= 1024 && number < 1048576) {
      return (number / 1024).toFixed(1) + "KB";
    } else if (number >= 1048576) {
      return (number / 1048576).toFixed(1) + "MB";
    }
  };

  const handleInputChange =  async (e) => {
    e.preventDefault();
    setFileSize(e.target.files[0].size);
    setFileName(e.target.files[0].name);
    setFileType(e.target.files[0].type);
    // setImageURL(e.target.value);

    const file = e.target.files[0];
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);

    await fileRef.put(file);
    setImageURL(await fileRef.getDownloadURL());
  };


  const handlePostSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      image: imageURL,
      email: userEmail,
      uid: userUID,
      displayName: userDisplayName,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setImageURL("");
    setInput("");
  };



  return (
    <div className="postInput">
      <div className="postInput__top">
        <form >
          <Avatar src={userProfilePic ? userProfilePic : ""} style={{ position: "absolute" }} />
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="postInput__messageInput"
            placeholder={user ? 'Whats on you mind?' : 'LOGIN REQUIRED'}
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
            // value={imageURL}
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
            {!imageURL
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

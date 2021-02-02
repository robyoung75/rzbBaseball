import { Avatar } from "@material-ui/core";

import "./PostInputMobile.css";
import React, { useState } from "react";
import { useStateValue } from "../../assets/stateProvider";
import { db, storage, updateProfilePic, auth } from "../../assets/firebase";
import firebase from "firebase";

import imageCompression from "browser-image-compression";

function PostInput() {
  const [{ userData }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState(null);
  const [newImage, setNewImage] = useState(null);
  const [profilePic, setProfilePic] = useState({});

  // let test = auth.currentUser;
  // if (test !== null) {
  //   console.log(test.displayName, test.photoURL);
  // }

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

  const handleInputChange = async (e) => {
    e.preventDefault();
    const imageFile = e.target.files[0];
    const options = {
      maxSizeMB: 6,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      initialQuality: 0.5,
    };
    await imageCompression(imageFile, options)
      .then(async function (compressedFile) {
        // firebase storage bucket setup
        const storageRef = storage.ref();
        const fileRef = storageRef.child(compressedFile.name);

        setNewImage(compressedFile);
        // firebase put for the compressed file
        await fileRef.put(compressedFile);
        setImageURL(await fileRef.getDownloadURL());
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newImage) {
      db.collection("posts")
        .add({
          message: input,
          image: imageURL,
          email: userEmail,
          uid: userUID,
          displayName: userDisplayName,
          photoURL: userProfilePic,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .catch((error) => console.log(error));
      setNewImage(null);
      setImageURL(null);
      setInput("");

      console.log("POST_UPLOAD SUCCESSFUL");
    } else {
      alert("no image selected");
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setInput("");
    setImageURL(null);
    setNewImage(null);
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    if (!userData) {
      alert("You must be signed in to change profile image");
    } else if (e.target.value.length && userData) {
      const imageFile = e.target.files[0];
      updateProfilePic(imageFile);
    }
  };

  return (
    <div className="postInput">
      <div className="postInput__left">
        <label htmlFor="profilePic_update">
          <Avatar src={userProfilePic ? userProfilePic : ""} />
        </label>
        <input
          type="file"
          id="profilePic_update"
          onChange={handleProfileUpdate}
          style={{ display: "none" }}
        />
      </div>

      <form id="postInput">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="postInput__centerMessageInput"
          placeholder={
            userData ? `What's up ${userDisplayName}?` : "LOGIN REQUIRED"
          }
          type="text"
          id="postInput"
        />
        <label htmlFor="image_uploads" className="postInput__centerTopLabel">
          {!newImage ? (
            <p>Upload Image</p>
          ) : (
            <p onClick={handleCancel}>Cancel Upload</p>
          )}
        </label>
        <input
          // className="postInput__centerImageInput"
          type="file"
          id="image_uploads"
          name="image_uploads"
          accept=".jpg, .jpeg, .png"
          multiple
          // value={imageURL}
          onChange={handleInputChange}
        />

        <p className="postInput__centerPreview">
          {!newImage
            ? null
            : `upload file NAME: ${newImage.name}__TYPE${newImage.type}__SIZE${(
                newImage.size / 1024
              ).toFixed()} kb`}
        </p>
        {newImage ? (
          <img src={imageURL} className="postInput__imagePreview"></img>
        ) : null}
        <p onClick={handlePostSubmit} className="postInput__submit">
          Submit
        </p>
      </form>
    </div>
  );
}

export default PostInput;

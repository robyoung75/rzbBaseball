// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
import "firebase/storage";
import firebaseConfig from "../API/api";
import imageCompression from "browser-image-compression";
// initialize the firebase database
const firebaseApp = firebase.initializeApp(firebaseConfig);

// realtime data base in firestore
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebaseApp.storage();

const updateDisplayName = (newDisplayName) => {
  let user = auth.currentUser;

  user
    .updateProfile({
      displayName: newDisplayName,
    })
    .then(function () {
      console.log("DISPLAY_NAME UPDATED");
    })
    .catch((error) => {
      console.log(error);
    });
};

const firebaseStorageDelete = async (url) => {
  try {
    const deleteRef = storage.refFromURL(url);
    await deleteRef.delete();
    console.log("File Deleted");
  } catch (error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log("ERROR_CODE/MESSAGE >>>", errorCode, errorMessage);
  }
};

// delete current profile picture
// update with a new picture
const firebaseUserPicUpdate = async (imageFile, imgUrl, userName) => {
  try {
    const storageRefProfilePic = storage.ref(
      `profilePics/${userName}/${imageFile.name}`
    );
    const options = {
      maxSizeMB: 6,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      initialQuality: 0.5,
    };
    const compressedFile = await imageCompression(imageFile, options);

    await storageRefProfilePic.put(compressedFile);

    const URL = await storageRefProfilePic.getDownloadURL();

    await auth.currentUser.updateProfile({
      photoURL: URL,
    });

    if (imgUrl === null) {
      console.log("No file to delete");
    } else {
      let deleteRef = await firebaseStorageDelete(imgUrl);
      if (deleteRef) {
        console.log("Previous Profile Image Deleted");
      }
    }
    return URL;
  } catch (error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log("ERROR_CODE/MESSAGE >>>", errorCode, errorMessage);
  }
};

export { updateDisplayName, db, auth, storage, firebaseUserPicUpdate };

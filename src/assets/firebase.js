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

// let bYoungProfilePic = "https://firebasestorage.googleapis.com/v0/b/rzbbaseball-ddb27.appspot.com/o/players%2FbrightonWhite.jpg?alt=media"

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

// delete current profile picture
// update with a new picture
const updateProfilePic = async (imageFile) => {
  const user = auth.currentUser;

  let userName;
  let email;
  let photoUrl;
  let emailVerified;
  let uid;

  if (user !== null) {
    userName = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;
  }

  const options = {
    maxSizeMB: 6,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
    initialQuality: 0.5,
  };

  const storageRefUser = storage.ref(
    `/profilePics/${user ? user.displayName : null}/`
  );
  const storageRef = storage.ref(`profilePics/${userName}/${imageFile.name}`);
  if (storageRefUser) {
    await storageRefUser
      .listAll()
      .then((dir) => {
        dir.items.forEach((fileRef) => {
          let dirRef = storage.ref(fileRef.fullPath);
          console.log("dirRef", dirRef);
          dirRef.getDownloadURL().then(function (url) {
            let imgRef = storage.refFromURL(url);
            console.log("imageRef", imgRef);
            imgRef
              .delete()
              .then(function () {
                alert("file deleted");
              })
              .catch(function (error) {
                alert(error);
              });
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  

  await storageRef.put(imageFile);
  let url = await storageRef.getDownloadURL();

  await user
    .updateProfile({
      photoURL: url,
    })
    .then(function () {
      console.log("upload successful");
    })
    .catch(function (error) {
      console.log(error);
    });

  console.log(user);
};

//updateProfilePic(bYoungProfilePic);

export { updateProfilePic, updateDisplayName, db, auth, storage };

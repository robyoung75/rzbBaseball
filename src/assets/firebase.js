// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';
import 'firebase/storage';

import firebaseConfig from '../API/api';

// initialize the firebase database
const firebaseApp = firebase.initializeApp(firebaseConfig);

// realtime data base in firestore
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };



// let bYoungProfilePic = "https://firebasestorage.googleapis.com/v0/b/rzbbaseball-ddb27.appspot.com/o/players%2FbrightonWhite.jpg?alt=media"

const updateDisplayName = (newDisplayName) => {
  let user = auth.currentUser;

  user
    .updateProfile({
      displayName: newDisplayName
    })
    .then(function() {
      console.log('DISPLAY_NAME UPDATED')
    })
    .catch((error) => {
      console.log(error)
    })
}


const updateProfilePic = (imageURL) => {
    let user = auth.currentUser;

    user
      .updateProfile({
        photoURL:
          imageURL,
      })
      .then(function () {
        console.log('upload successful')
      })
      .catch(function (error) {
        console.log(error);
      });

      console.log(user);

}

//updateProfilePic(bYoungProfilePic);

export { updateProfilePic, updateDisplayName }





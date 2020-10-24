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








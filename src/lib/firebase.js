import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1QPrvV6SzylNd-K-jglzG_GUIm6c4QkY",
  authDomain: "flipr-hack-cb44e.firebaseapp.com",
  projectId: "flipr-hack-cb44e",
  storageBucket: "flipr-hack-cb44e.appspot.com",
  messagingSenderId: "917822422182",
  appId: "1:917822422182:web:e9b434e861bb99d94d8867",
  measurementId: "G-61WFPRZ12Y"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

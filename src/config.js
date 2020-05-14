import * as firebase from "firebase";

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id"
};

const app = firebase.initializeApp(firebaseConfig);
const dbh = firebase.firestore();
dbh
  .collection("characters")
  .doc("mario")
  .set({
    employment: "plumber",
    outfitColor: "red",
    specialAttack: "fireball"
  });
export default dbh;

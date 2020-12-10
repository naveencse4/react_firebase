import firebase from "firebase/app";
import "firebase/firestore"; // database
import "firebase/auth"; // authentication

var firebaseConfig = {
  apiKey: "AIzaSyBZa-rGOVRK-WfpWD2H6l0D7sZ_VF_aIi4",
  authDomain: "new-vague.firebaseapp.com",
  projectId: "new-vague",
  storageBucket: "new-vague.appspot.com",
  messagingSenderId: "832923747834",
  appId: "1:832923747834:web:7c950712df2c8c32fb5043",
  measurementId: "G-CH7FHSY3SN",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampInSnapshots: true });

export default firebase;

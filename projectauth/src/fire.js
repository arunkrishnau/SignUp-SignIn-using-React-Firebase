import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBHxnsygIsK2jF0XPBgexG1j2MovD-bUPc",
  authDomain: "login-767df.firebaseapp.com",
  projectId: "login-767df",
  storageBucket: "login-767df.appspot.com",
  messagingSenderId: "884494688864",
  appId: "1:884494688864:web:597c8ef4c1308abd16d905",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;

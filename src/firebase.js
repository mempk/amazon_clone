import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCNS17RAjcxh8689SXakSYgodPQWRBiG_M",
    authDomain: "clone-c9f51.firebaseapp.com",
    projectId: "clone-c9f51",
    storageBucket: "clone-c9f51.appspot.com",
    messagingSenderId: "603938625974",
    appId: "1:603938625974:web:a5dc873e265fd0e317c917",
    measurementId: "G-PN6JV5V1Q9"
  });

  const auth = firebase.auth();

  export {auth}
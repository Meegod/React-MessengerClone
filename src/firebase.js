// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseApp =firebase.initializeApp(
{
  apiKey: "AIzaSyAmDfZEFjFS8GLGjOp8lUFQiKfV6vTTdEo",
  authDomain: "messenger-clone-ec216.firebaseapp.com",
  projectId: "messenger-clone-ec216",
  storageBucket: "messenger-clone-ec216.appspot.com",
  messagingSenderId: "1001193490793",
  appId: "1:1001193490793:web:1ba3797336aef5aae295f8",
  measurementId: "G-RMHYK70PDJ"
})




const db=firebaseApp.firestore();

export {db};

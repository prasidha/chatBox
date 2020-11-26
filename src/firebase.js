import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfJtXi_aIe1c6KIseGesZL0dcPvQ3xabk",
  authDomain: "chat-box-db3f5.firebaseapp.com",
  databaseURL: "https://chat-box-db3f5.firebaseio.com",
  projectId: "chat-box-db3f5",
  storageBucket: "chat-box-db3f5.appspot.com",
  messagingSenderId: "753427728627",
  appId: "1:753427728627:web:4abdca8263e859e0f10f86",
  measurementId: "G-584NHZNJBP"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db =firebaseApp.firestore()

  export default db;
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBsLETBATMJX40yHWaPIiXesW8WQBcxmvE",
    authDomain: "clone-a08d0.firebaseapp.com",
    projectId: "clone-a08d0",
    storageBucket: "clone-a08d0.appspot.com",
    messagingSenderId: "498482119720",
    appId: "1:498482119720:web:5cf42599bcbe9638aa611d",
    measurementId: "G-P6Z0DETEPN"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);   
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
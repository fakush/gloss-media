import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCAj6PZcDInwUhsAD0qZAyn4az-FOpVkzI",
    authDomain: "cotizadorvp.firebaseapp.com",
    databaseURL: "https://cotizadorvp-default-rtdb.firebaseio.com",
    projectId: "cotizadorvp",
    storageBucket: "cotizadorvp.appspot.com",
    messagingSenderId: "383862033938",
    appId: "1:383862033938:web:caa2aad0229cd9d2f5d2cb",
    measurementId: "G-YPVW5DLT1T"
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTHDOMAIN,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID,
    // measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };
  
  firebase.initializeApp(firebaseConfig);
  
  export const db = firebase.firestore();
  export const auth = firebase.auth();
  
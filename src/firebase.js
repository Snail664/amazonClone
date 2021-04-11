import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // Your web app's Firebase configuration
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: "clone-bb5a6.appspot.com",
  messagingSenderId: "1093992108601",
  appId: "1:1093992108601:web:a160d087c9a298c38eb3e8",
  measurementId: "G-LQVN70LDNJ",
});

const auth = firebase.auth();

export { auth };

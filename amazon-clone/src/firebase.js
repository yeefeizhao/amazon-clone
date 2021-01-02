import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDrzcUoExQKsSJdXpzD7EML1Yj2ThcP9rQ",
  authDomain: "clone-9abf3.firebaseapp.com",
  projectId: "clone-9abf3",
  storageBucket: "clone-9abf3.appspot.com",
  messagingSenderId: "883689644241",
  appId: "1:883689644241:web:e3449b524a72b6309a65f0",
  measurementId: "G-QR733SL6W4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
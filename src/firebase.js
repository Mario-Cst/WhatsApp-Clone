import firesbase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAT2ChGHWATfIZZ0yAevNWXcl78h2hd0YY",
  authDomain: "whatsapp-clone-217b8.firebaseapp.com",
  projectId: "whatsapp-clone-217b8",
  storageBucket: "whatsapp-clone-217b8.appspot.com",
  messagingSenderId: "225380484032",
  appId: "1:225380484032:web:f3902d0cc221688edfbe25",
};
const firebaseApp = firesbase.inializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
GoogleAuthProvider();

export { auth, provider };

export default db;

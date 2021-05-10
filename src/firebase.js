import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBFrZjdinyT8hFOly8NND4qOYH77bKqTRU",
  authDomain: "disneyplus-clone-d8e3f.firebaseapp.com",
  projectId: "disneyplus-clone-d8e3f",
  storageBucket: "disneyplus-clone-d8e3f.appspot.com",
  messagingSenderId: "1093681663267",
  appId: "1:1093681663267:web:391d209e863d364739d096",
  measurementId: "G-9Y4PEJ5SNZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig); // to initialise the firebase app
const db = firebaseApp.firestore(); // for connecting the database to our app
const auth = firebase.auth(); // authentication for our app
const provider = new firebase.auth.GoogleAuthProvider(); // provider is for google social login
const storage = firebase.storage(); // storage is for storing images,videos etc in the firebase storage

export { auth, provider, storage };
export default db;

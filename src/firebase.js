

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
import 'firebase/database'; 
import 'firebase/storage';  
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC8qeKsncwpI37mEFmBEz-Cw99YYolNPw",
  authDomain: "linkedin-clone-96fca.firebaseapp.com",
  projectId: "linkedin-clone-96fca",
  storageBucket: "linkedin-clone-96fca.appspot.com",
  messagingSenderId: "606077758885",
  appId: "1:606077758885:web:858e470f944329f38c4c4c"
};


const app = firebase.initializeApp(firebaseConfig);
const db=firebase.firestore(app);
const auth = firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
const storage= firebase.storage();
export {auth,provider,storage};
export default db;
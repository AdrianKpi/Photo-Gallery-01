import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  // Your web app's Firebase configuration

apiKey: "AIzaSyDyS5nrUJaphOxMTwB24TL9_J1Wrt4lOOA",
authDomain: "photo-gallery-6508a.firebaseapp.com",
projectId: "photo-gallery-6508a",
storageBucket: "photo-gallery-6508a.appspot.com",
messagingSenderId: "809432295929",
appId: "1:809432295929:web:958fc9f476dd962b76b528"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
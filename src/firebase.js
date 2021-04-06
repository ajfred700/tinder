//import firebase from 'firebase/app'
import 'firebase/storage'
import firebase from 'firebase'

import "firebase/firestore";
 // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBrwXbkf9YLSwOTPcKbbOt4QipSUvrKYh4",
    authDomain: "tin1-a8799.firebaseapp.com",
    databaseURL: "https://tin1-a8799-default-rtdb.firebaseio.com",
    projectId: "tin1-a8799",
    storageBucket: "tin1-a8799.appspot.com",
    messagingSenderId: "119629352260",
    appId: "1:119629352260:web:49bd6e49fbaa5891491b11",
    measurementId: "G-P59BZ119T3"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

const storage = firebase.storage()

//export default firebase.firestore();
var firebase1 = firebase.firestore();

export  {db,
    storage, firebase1 as default
}


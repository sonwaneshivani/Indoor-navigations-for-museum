// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
// import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvZu6k_rDU2tv99Z907a4fZZ_OOg9bt8k",
  authDomain: "fir-auth-a1d5a.firebaseapp.com",
  projectId: "fir-auth-a1d5a",
  storageBucket: "fir-auth-a1d5a.appspot.com",
  messagingSenderId: "310866667830",
  appId: "1:310866667830:web:5c7699d75d4fdbdbce2b97"
};

// Initialize Firebase
let app;
if(firebase.apps.length ==0){
    app=firebase.initializeApp(firebaseConfig);
}
else{
    app=firebase.app();
}
const auth=firebase.auth()
export {auth};
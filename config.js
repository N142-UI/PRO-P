import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    
};
// Initialize Firebase

const firebaseConfig = {
    apiKey: "AIzaSyC2x0NwuVLIYU6GUxvQyUS80CvZEy_pJR4",
    authDomain: "pro-p-e665e.firebaseapp.com",
    projectId: "pro-p-e665e",
    storageBucket: "pro-p-e665e.appspot.com",
    messagingSenderId: "488470351035",
    appId: "1:488470351035:web:82e882d24ef930b2e4ad9e"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.database();
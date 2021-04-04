import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyC5hlmIHmC8n5a17ZS35bNo3lpKxpxOePo",
    authDomain: "project-planner-df0aa.firebaseapp.com",
    projectId: "project-planner-df0aa",
    storageBucket: "project-planner-df0aa.appspot.com",
    messagingSenderId: "186435192463",
    appId: "1:186435192463:web:5e6292ff629ac88ef312fa",
    measurementId: "G-2TK09RJQL8"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  // firebase.analytics();
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;

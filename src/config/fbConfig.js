import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Initialize Firebase
var config = {
    apiKey: "AIzaSyCKpwcemKM2bclRkXB0SNkH8DSdJXW4bpY",
    authDomain: "netninja-marioplan-857a1.firebaseapp.com",
    databaseURL: "https://netninja-marioplan-857a1.firebaseio.com",
    projectId: "netninja-marioplan-857a1",
    storageBucket: "netninja-marioplan-857a1.appspot.com",
    messagingSenderId: "341943447274"
  };

  
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true})

  export default firebase;
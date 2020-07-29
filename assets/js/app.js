(function (){
   
  // App's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCC1yuua04Yrasxxla_Mh6b-dQzXVnJ8Sk",
    authDomain: "ecole-241.firebaseapp.com",
    databaseURL: "https://ecole-241.firebaseio.com",
    projectId: "ecole-241",
    storageBucket: "ecole-241.appspot.com",
    messagingSenderId: "331753580319",
    appId: "1:331753580319:web:1b5964282a7ae10b03f22a",
    measurementId: "G-K6DRC2L5SH"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  let db = firebase.firestore();


  console.log(db);
})();

//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDWcCRYsmvmRf2B5CEeuQSb1UJit4qhVkc",
      authDomain: "kwitter-1dfe1.firebaseapp.com",
      projectId: "kwitter-1dfe1",
      storageBucket: "kwitter-1dfe1.appspot.com",
      messagingSenderId: "388720997574",
      appId: "1:388720997574:web:50028c107dbf7513cc93c7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

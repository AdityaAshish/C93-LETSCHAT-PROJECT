
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD9mQnBm4O40C_CIXF89rBXVFceFRFi7Lw",
      authDomain: "kwitter-bc148.firebaseapp.com",
      databaseURL: "https://kwitter-bc148-default-rtdb.firebaseio.com",
      projectId: "kwitter-bc148",
      storageBucket: "kwitter-bc148.appspot.com",
      messagingSenderId: "200000766482",
      appId: "1:200000766482:web:5f43d11ae57771eec5cecb"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

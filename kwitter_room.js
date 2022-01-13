
const firebaseConfig = {
      apiKey: "AIzaSyDkpX3qeqUI5DEr0DLt8k_9yR81MDe7WsM",
      authDomain: "kwitter-better-than-twit-eee46.firebaseapp.com",
      databaseURL: "https://kwitter-better-than-twit-eee46-default-rtdb.firebaseio.com",
      projectId: "kwitter-better-than-twit-eee46",
      storageBucket: "kwitter-better-than-twit-eee46.appspot.com",
      messagingSenderId: "1032772084964",
      appId: "1:1032772084964:web:5632d7448001053cbfb8f1"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

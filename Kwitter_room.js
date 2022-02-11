const firebaseConfig = {
    apiKey: "AIzaSyC2KocQYc3y7Ep407oc4NqNTUd4bLU2P78",
    authDomain: "medi-chat-5f1af.firebaseapp.com",
    databaseURL: "https://medi-chat-5f1af-default-rtdb.firebaseio.com",
    projectId: "medi-chat-5f1af",
    storageBucket: "medi-chat-5f1af.appspot.com",
    messagingSenderId: "75057474647",
    appId: "1:75057474647:web:db6363454ff801993ac712"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;

     console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    
    });});}
getData();

function addroom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
}

function getData()
 {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";

//End code
});});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("Room_name" , name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "index.html";
}
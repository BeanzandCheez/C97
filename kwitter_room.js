var firebaseConfig = {
      apiKey: "AIzaSyDLy2r3x2RcKsX9GvmUkuiJLWch8pMU4p4",
      authDomain: "kwitter-a73d3.firebaseapp.com",
      databaseURL: "https://kwitter-a73d3-default-rtdb.firebaseio.com",
      projectId: "kwitter-a73d3",
      storageBucket: "kwitter-a73d3.appspot.com",
      messagingSenderId: "223128827800",
      appId: "1:223128827800:web:3d6626ad82b596946bdded",
      measurementId: "G-4876CGHHZZ"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   user_name = localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
   function addRoom()
   {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +" </div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "kwitter.html";
}
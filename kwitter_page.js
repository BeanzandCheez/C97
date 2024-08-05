//YOUR FIREBASE LINKS
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
   room_name = localStorage.getItem("room_name");
   function send() 
   {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like = message_data['like'];
name_with_tag="<h4>"+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+ firebase_message_id+"value="+like+" onclick='updateLike(this.id)'>";
span_with_tag ="<span class='glyphion glyphicon-thumbs-up'>Like: "+ like +" </span></button<hr>";

row=name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End Code
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("clicked on like button -"+message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}

function logout() {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location.replace("index.html");
}
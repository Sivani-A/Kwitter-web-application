
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyBSNcPgQGccVfakt2TK_CBvlnZhmis4Qg8",
  authDomain: "social-website-d3154.firebaseapp.com",
  databaseURL: "https://social-website-d3154-default-rtdb.firebaseio.com",
  projectId: "social-website-d3154",
  storageBucket: "social-website-d3154.appspot.com",
  messagingSenderId: "49990380882",
  appId: "1:49990380882:web:0cb39cf2ac7d6be1761e8b",
  measurementId: "G-V7JE4PKT23"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
status1= localStorage.getItem("status");
if(status1==-1){
  window.location="kwitter.html";
}
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({//firebase.database().ref("/").
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}





function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
  console.log(snapshot);
   document.getElementById("output").innerHTML = ""; 
   snapshot.forEach(function(childSnapshot)  
 { 
  console.log(childSnapshot);
   childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML +=  row;
    });
  });

}

getData();

function redirectToRoomName(rname)
{
  console.log(rname);
  localStorage.setItem("room_name", rname);
    window.location = "kwitter_page.html";
}

function logout() {
  localStorage.setItem("status",-1);
localStorage.removeItem("user_name");// it is used to delete the variable created by you
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}

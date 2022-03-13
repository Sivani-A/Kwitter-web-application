
function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  localStorage.setItem("status", 0);
    window.location = "kwitter_room.html";//navigate to the kitter_room.html
}


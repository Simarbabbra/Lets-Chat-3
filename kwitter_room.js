var firebaseConfig = {
      apiKey: "AIzaSyC1olMdFy20kiRf1Z657Y2TAOjwN3Fa5sE",
      authDomain: "social-media-69b27.firebaseapp.com",
      databaseURL: "https://social-media-69b27-default-rtdb.firebaseio.com",
      projectId: "social-media-69b27",
      storageBucket: "social-media-69b27.appspot.com",
      messagingSenderId: "703092193592",
      appId: "1:703092193592:web:099a75ce63bb377b78a9cd",
      measurementId: "G-177NPFLWWE"
    };
    
    // Initialize Firebase
 //ADD YOUR FIREBASE LINKS HERE
      firebase.initializeApp(firebaseConfig);
    
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + user_name

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<iv class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

  
  function addRoom()
  {
      user_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(user_name).update({
      purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
  }


  function redirectToRoomName(name)
  {
      console.log(name);
      localStorage.setItem("room_name", name)
      window.location = "kwitter_page.html";
  }
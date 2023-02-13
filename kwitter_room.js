var firebaseConfig = {
    apiKey: "AIzaSyDLAlQzOqvcfsbt_lmpgFBDxtktA57li6s",
    authDomain: "kwitter-45cd9.firebaseapp.com",
    databaseURL: "https://kwitter-45cd9-default-rtdb.firebaseio.com",
    projectId: "kwitter-45cd9",
    storageBucket: "kwitter-45cd9.appspot.com",
    messagingSenderId: "270692238423",
    appId: "1:270692238423:web:35ababb4a0f0a4e561cf12"
  };
  
  
    firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

}
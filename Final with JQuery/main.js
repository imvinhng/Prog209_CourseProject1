

// Now comes the code that must wait to run until the document is fully loaded
document.addEventListener("DOMContentLoaded", function (event) {
    
    document.getElementById("button1").addEventListener("click", login);
    
  
});  


let login = function(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if ((username =="username") && (password == "password")){
     document.getElementById("result").innerHTML = "Successfully logged in!";
     document.getElementById("username").value = "";
     document.getElementById("password").value="";
    

    }
    else {
     document.getElementById("result").innerHTML = "Username and Password pair did not match! Try again!";
     document.getElementById("username").value = "";
     document.getElementById("password").value="";
    
    }
};

let login_reject = function(){
    alert("You have to log in first");
}

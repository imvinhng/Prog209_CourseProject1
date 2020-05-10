document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("button1").addEventListener("click", login);

    document.getElementById("buttonhome0").addEventListener("click", login_reject);
    document.getElementById("buttonworld0").addEventListener("click", login_reject);
    document.getElementById("buttonus0").addEventListener("click", login_reject);
    document.getElementById("buttongame0").addEventListener("click", login_reject);
    
    document.getElementById("buttonhome1").addEventListener("click", showHome);
    document.getElementById("buttonus1").addEventListener("click", showUsMap);
    document.getElementById("buttonworld1").addEventListener("click", showWorldMap);
    document.getElementById("buttongame1").addEventListener("click", showMapGame);

    document.getElementById("buttonhome2").addEventListener("click", showHome);
    document.getElementById("buttonus2").addEventListener("click", showUsMap);
    document.getElementById("buttonworld2").addEventListener("click", showWorldMap);
    document.getElementById("buttongame2").addEventListener("click", showMapGame);

    document.getElementById("buttonhome3").addEventListener("click", showHome);
    document.getElementById("buttonus3").addEventListener("click", showUsMap);
    document.getElementById("buttonworld3").addEventListener("click", showWorldMap);
    document.getElementById("buttongame3").addEventListener("click", showMapGame);

    document.getElementById("buttonhome4").addEventListener("click", showHome);
    document.getElementById("buttonus4").addEventListener("click", showUsMap);
    document.getElementById("buttonworld4").addEventListener("click", showWorldMap);
    document.getElementById("buttongame4").addEventListener("click", showMapGame);


});

let login = function(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if ((username =="username") && (password == "password")){
     document.getElementById("result").innerHTML = "Successfully logged in!";
     document.getElementById("username").value = "";
     document.getElementById("password").value="";
    //  showWorldMap;
        
    document.getElementById("home").style.display = "block";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("worldmap").style.display = "none";
    document.getElementById("usmap").style.display = "none";
    document.getElementById("mapgame").style.display = "none";
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

let showHome = function(){
    document.getElementById("home").style.display = "block";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("worldmap").style.display = "none";
    document.getElementById("usmap").style.display = "none";
    document.getElementById("mapgame").style.display = "none";
}

let showWorldMap = function(){
    document.getElementById("home").style.display = "none";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("worldmap").style.display = "block";
    document.getElementById("usmap").style.display = "none";
    document.getElementById("mapgame").style.display = "none";
}

let showUsMap = function(){
    document.getElementById("home").style.display = "none";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("worldmap").style.display = "none";
    document.getElementById("usmap").style.display = "block";
    document.getElementById("mapgame").style.display = "none";
}

let showMapGame = function(){
    document.getElementById("home").style.display = "none";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("worldmap").style.display = "none";
    document.getElementById("usmap").style.display = "none";
    document.getElementById("mapgame").style.display = "block";
}
export function logIn_1(guest) { 


    function authenticationAlgorithym(id) {
        var matches = document.getElementById(id).querySelectorAll("a");

        var href = [];
        
        matches.forEach(function(content) {  //Links are all loaded in href
            href.push(content.href);
        })

        document.getElementById(id).addEventListener('click',function(e) {
            if (!guest.loggedIn) {
                matches.forEach(function(content) {
                    content.href = "";
                }) 
                // Don't remove this alert
                alert("Please log in or sign in! The content is for exclusive Club Member only!");
            } else {
                var i = 0;
                matches.forEach(function(content) {
                    content.href = href[i];
                    i++;
                })
            }

        }, false)
    }

    // Control navbar access
    authenticationAlgorithym("Signin_navbar");
    authenticationAlgorithym("Signout_navbar");
    authenticationAlgorithym("register_navbar");
    authenticationAlgorithym("forgotPassword_navbar");

  //login authentication
  $( "#submit1" ).click( function(){
    
    //alert($("#fullname").val()+", you failed again"); 
    if ($("#username").val() === "admin" && $("#password").val() === "admin" ) {
      // let fullname = $("#fullname").val();
      // if (fullname === "")
      // {
      //   $(".name_taskbar").html("My International Map Application");
      // } else {
      //   $(".name_taskbar").html(fullname + "'s Map Application");
      // }

    //   Easier if I watch a tutorial (Node JS Password Authentication)
    //  Since it'd be on the cloud and I won't have to deal w it again
      guest.loggedInOK();
      guest.username = $("#username").val();
      guest.password = $("#password").val();

      alert("Welcome to the Club!"); 
      $("#username").val("");
      $("#password").val("");
      
      //hide sign-in button once user is logged in
      $(".signin_btn").hide();
      $(".signout_btn").show();

      
      
    } else {
      $("#result").html("Unsuccessful Log-in. Try again!");
      $("#username").val("");
      $("#password").val("");
      
    }

  })

  //Show Hide password
  $('#toggle').click(function(){
    if ($(this).is(':checked')){
      $("#password").prop("type","text");
      $('#toggleText').html("Hide Password");

    } else {
      $("#password").prop("type","password");
      $('#toggleText').html("Show Password");

    }
  })


  //logout authentication
    $( ".signout_btn" ).click( function(){
        $(".signin_btn").css("visibility","visible");
        $(".signout_btn").css("visibility","hidden");
        $(".name_taskbar").html("My International Map Application");
        guest.loggedInNotOK();
        console.log("User logIn status: "+guest.loggedIn);
  })
}





// Now comes the code that must wait to run until the document is fully loaded
document.addEventListener("DOMContentLoaded", function (event) {

    //login authentication
    $( "#submit1" ).click( function(){
      
      //alert($("#fullname").val()+", you failed again"); 
      if ($("#username").val() === "username" && $("#password").val() === "password" ) {
        let fullname = $("#fullname").val();
        $("#result").html( "Welcome to the Club!"); 
        $("#fullname").val("");
        $("#username").val("");
        $("#password").val("");
        $(".name_taskbar").html(fullname + "'s Map Application");
        $('.signin_btn').hide();
        
      } else {
        $("#result").html("Unsuccessful Log-in. Try again!");
        $("#fullname").val("");
        $("#username").val("");
        $("#password").val("");
        
      }

    })

    //Show Hide password
    $("#toggle").click(function(){
      // Check the checkbox state
      if($(this).is(':checked')){
        console.log($("#password").prop("type"));
        $("#password").prop("type","text");
        
      }else{
        console.log($("#password").prop("type"));
        $("#password").prop("type","password");
      }
     
     });
    
});



function myFunction() {

    // Declare variables
    let input, filter, ul, li, a, i, txtValue, countries, states;
    input = document.getElementById('searchbar');
    filter = input.value.toLowerCase();

    countries = ["America","Turkey","Russia"];
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
    //inputting the elements from list to ul to li
  


    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toLowerCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
}

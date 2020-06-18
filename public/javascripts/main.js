import {inputCountriesNames, countriesSearch} from "./countries.js";
import {colorPickerCreator} from "./colorpicker.js";
import {logIn_1} from "./authentication.js";

// Now comes the code that must wait to run until the document is fully loaded
document.addEventListener("DOMContentLoaded", function (event) {
    let guest = new User();

    logIn_1(guest);
   

    $("#toggg").click(function() {
        $("#warning").hide();
        $('#countriesDOC').css('background-color','red');
    })

  inputCountriesNames();

   $('#HomeWrapper').on("keyup", '#searchbar', function() {
    countriesSearch();
   });
     
   colorPickerCreator('#picker','.mapdiv','background');
   colorPickerCreator('#picker2','.divmap','background');

  // alert("I love America");

  $('#forgotPassword_btn').click(function() {
    $('#forgotPassword_input').val("");
    alert("Password reset has been initiated!");
  })

  $('#sortability').sortable();
  $('#sortability').disableSelection();

  $("#bucketListBtn").click(function(){
    let content = $('#bucketListItem').val();
  //  alert("I was clicked!");
    console.log(content);
     
   var ul = document.getElementById("sortability");
   var li = document.createElement('li');

   li.textContent = content;

   ul.appendChild(li);
 });

});
// End DOM onload

(function($) {
  $.fn.invisible = function() {
      return this.each(function() {
          $(this).css("visibility", "hidden");
      });
  };
  $.fn.visible = function() {
      return this.each(function() {
          $(this).css("visibility", "visible");
      });
  };
}(jQuery));

class User {
  constructor() {
    this.username = "";
    this.password = "";
    this.email = "";
    this.fullname = "";
    this.loggedIn = false;
  }

  loggedInOK() {
    this.loggedIn = true;
  }

  loggedInNotOK() {
    this.loggedIn = false;
  }
}


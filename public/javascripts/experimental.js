$(function () {
    $(".draggable").draggable();
    $("#draggable2").draggable({ revert: "valid" });

    $("#droppable").droppable({
      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
      drop: function (event, ui) {
        $(this)
          .addClass("ui-state-highlight")
          .find("p")
          .html("Dropped!");
      }
    });

    $("#sortable").sortable();
    $("#sortable").disableSelection();

    
 $("#addingBucketListItem_btn").click(function(){
     let content = $('#addingBucketListItem').val();
    alert("I was clicked!");
     console.log(content);
      
    var ul = document.getElementById("sortable");
    var li = document.createElement('li');

    li.textContent = content;
    var str1 = "ui-state-default";
    var str2 = "ui-icon-arrowthick-2-n-s";
    li.classList.add(str1, str2);

    ul.appendChild(li);


  });

   
});


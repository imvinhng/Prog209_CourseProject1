
export function inputCountriesNames() {
    //inputting the elements from list to ul to li
    // input data from countries.txt to countries array
    $.get('text/countries.txt',{},function(content){
      if (content == null) {
        alert('file directory is probably broken');
      } else {
          var lines=content.split('\n');
        
        var ul = document.getElementById("myUL");
        lines.forEach(function (content) {
          var a = document.createElement('a');
          var li = document.createElement('li');
          a.textContent = content;
          a.href= "https://www.google.com/search?q="+content;
          a.target = "_blank";

          li.appendChild(a);
          ul.appendChild(li);
        });

      }
    });
}

export function countriesSearch() {
  // Declare variables
  var input = document.getElementById('searchbar');
  var filter = input.value.toLowerCase();

  var li = document.getElementById('myUL').getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
    for (var i = 0; i < li.length; i++) {
      var txtValue = li[i].textContent || li[i].innerText;
      if (txtValue.toLowerCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }

}


export function inputCountriesNames() {
    //inputting the elements from list to ul to li
    // input data from countries.txt to countries array
        

    var myUl = document.querySelector('#myUL')

    // appendToMyUL("Tokyo")
    // appendToMyUL('Alabama')
    // appendToMyUL('Paris')
    // appendToMyUL('Andorra')

    var start = new Date().getTime();
    console.log(start)
    // inputting countries name
    world_cities.forEach(object => {

      var myLi = document.querySelector('#myUL').querySelectorAll('li')
        // if (!contains(myLi, object.name)) {
        //   appendToMyUL(object.name, object.geonameid)
        // }
        if (!contains(myLi, object.country)) {
          appendToMyUL(object.country, object.geonameid)
        }
        // if (!contains(myLi, object.subcountry)) {
        //   appendToMyUL(object.subcountry, object.geonameid)
        // }
        console.log(myLi.length)
    })

    var end = new Date().getTime()
    console.log(end)
    console.log("Total processing time "+ (end-start)/1000.0 +"sec")

    var myLi = document.querySelector('#myUL').querySelectorAll('li')
    console.log("Final length "+myLi.length)

    // inputting cities names
    function appendToMyUL(content, geonameid) {
      var a = document.createElement('a');
      var li = document.createElement('li');
      a.textContent = content; 
      a.href= "#Details";

      // a.target = "_blank";
      li.appendChild(a);

      li.id = geonameid;

      myUl.appendChild(li);
    }

    // check for duplicates
    function contains(group, content) {
      let contains = false;
      for (var i = 0; i< group.length; i++) {
        if (group[i].textContent == content) {
          contains = true;
          console.log("Duplicate found! "+ content)
          return contains;
        } 
      }
      return contains;
    }

    details();



    function details() {
      var myLi = document.querySelector('#myUL').querySelectorAll('li')
      myLi.forEach(li => {
        li.addEventListener('click', () => {

          var el = idForObjectLookUp(li.id)
          console.log(li)
          $('#oneCountry').html(el.country)
          $('#oneSubCountry').html(el.subcountry)
          $('#oneCity').html(el.name)
          $('#oneDetail').html(el.geonameid)
        })
      })

    }

    function idForObjectLookUp(id) {
      for (let i = 0; i < world_cities.length; i++) {
        if (world_cities[i].geonameid == id) {
          return world_cities[i];
        }
      }
    }

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


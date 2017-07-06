// The Input Element
var searchInput = document.getElementById('searchInput');
// The Event on the input
searchInput.addEventListener('keyup', filterArtists);

function filterArtists(){
  // Get Search Input Value
  var searchInputValue = searchInput.value.toUpperCase();

  // Get Artists List
  var artists = document.getElementById('artists');
  // Get Name from Artists
  var name = artists.querySelectorAll('li.name');

  // Loop through all names
  for(var i = 0; i < name.length; i++) {
    var a = name[i].getElementsByTagName('a')[0];
    // If true
    if(a.innerHTML.toUpperCase().indexOf(searchInputValue) > -1) {
      name[i].style.display = '';
    } else {
      // If it's not true
      name[i].style.display = 'none';
    }
  }
}

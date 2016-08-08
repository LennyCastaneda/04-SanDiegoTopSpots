//Created mapScript.js to separate from index.js to make it more readable...since there is separate JavaScript I can implement this code for other projects.
//This code can be recycled for other similar uses.
//Create an initialize Map function using the Google APi example from its website.
function initMap() {
  //Setting the center location of the map and assigning it to myLatLng
  var myLatLng = {lat: 33.09745, lng: -116.99572}; 

  //Creating a new Google map from id='map' and assigning it to variable map adjsuting zoom and center of the map position.
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: myLatLng
  });

  //Accessing the topspot.json file and creating a function.
  $.getJSON("topspots.json",function(tableList) {
  //Get JSON array list and assigning it to objectList variable.
  var objectList = tableList; // assign tableList to objectList

  //Iterate across each JSON object
  $.each(objectList, function(i){
    //Creates new marker for each JSON location data.
    var object = objectList[i];
    myLatLng = {lat: object.location[0], lng: object.location[1]};

    //Create a new market in Google maps then assigns to marker variable.
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      });
    });
  });
} 
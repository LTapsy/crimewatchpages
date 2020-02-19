
var longtitude = 51.083118;
var latitude = -114.274178;

    //setting the position of where to focus on the map
    var mymap = L.map('mapid').setView([longtitude, latitude], 13);
    

    //calling the map from mapbox, needs accesstoken
    //pk.eyJ1IjoibHRhcHN5IiwiYSI6ImNrNmpqdmN1MzBjaTEzbm51eHl5eDY0OXQifQ.73Nn_FvmKwm2Q-fLF2nLZw
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoibHRhcHN5IiwiYSI6ImNrNmpqdmN1MzBjaTEzbm51eHl5eDY0OXQifQ.73Nn_FvmKwm2Q-fLF2nLZw'
}).addTo(mymap);


//setting where the marker is located
//deans longtitude and latitude
var marker = L.marker([longtitude, latitude]).addTo(mymap);

//markerpopup
marker.bindPopup("<b>You are here!</b><br>Longtitude : "+longtitude+"<br>Latitude : "+latitude).openPopup();


//adding a marker or parameter of 
var circle = L.circle([longtitude, latitude], {
    color: 'red',//color of the stroke for the radius parameter
    fillColor: 'maroon',//color of the fill for the radius parameter
    fillOpacity: 0.5,
    radius: 800//the range of parameter
}).addTo(mymap);


//you can set up a popup by doing this.
var popup = L.popup()
    // .setLatLng([51.1, latitude])
    // .setContent("I am a standalone popup.")
    // .openOn(mymap);

 
//getting the location of where you click
function onMapClick(e) {
    popup = L.popup()
    .setLatLng(e.latlng)
    .setContent("Do you wanna set this as a new location? "+ e.latlng+"<button class='yesbtn'>Yes</button>")
    .openOn(mymap);
    const newLocation =   document.querySelector(".yesbtn");
    newLocation.addEventListener("click",function(){
        marker = L.marker(e.latlng).addTo(mymap);
    });
}

mymap.on('click', onMapClick);



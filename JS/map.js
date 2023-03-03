// map initialization
var map = L.map('map').setView([38.6270, -90.1994], 10);
// google 
googleStreets = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
googleStreets.addTo(map);

//Icons
var firstMarker = L.marker([38.6270, -90.1994]).addTo(map);
var popup = firstMarker.bindPopup('This is STL!').openPopUp();
popup.addTo(map);
//MAP

mapboxgl.accessToken = 'pk.eyJ1IjoicGV0cnljYSIsImEiOiJjazd6eGFxajEwOW5rM2RydW5rb3pzcmtiIn0.eFkGZsTPafVGw_E9bXI8aA';
 
let gps = [14.49439349995465,50.037719247005576];
 
let map = new mapboxgl.Map({
    container: 'mymap',
    center: gps,
    zoom: 13,
    style: 'mapbox://style/mapbox/dark-v10'
});
 
map.scrollZoom.disable();
map.addControl(new mapboxgl.NavigationControl());
 
let pin = document.createElement('div');
pin.className = 'pin';
 
new mapboxgl.Marker({
    element: pin,
    anchor:'bottom'
}).setLngLat(gps).addTo(map).setPopup(popup);







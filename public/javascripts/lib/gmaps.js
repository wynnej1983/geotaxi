// convert Google Maps into an AMD module
define(['async!https://maps.googleapis.com/maps/api/js?key=AIzaSyBrzYP0wz6BSyPsV17tkjqq3vskPKmGMtk&sensor=true'],
function(){
    // return the gmaps namespace for brevity
    return window.google.maps;
});


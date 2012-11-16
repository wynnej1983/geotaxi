define(["gmaps"], function (gmaps){
  return function TaxiSearchViewModel() {
    navigator.geolocation.getCurrentPosition(function(position) {
      var map_el = document.getElementById("map");
      var map = new gmaps.Map(map_el, {
        center: new gmaps.LatLng(position.coords.latitude, position.coords.longitude),
        zoom: 20,
        mapTypeId: gmaps.MapTypeId.ROADMAP
      });
    }, function(error) {
      alert("error loading current position");
    });
  }
});

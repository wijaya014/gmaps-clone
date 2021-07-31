mapboxgl.accessToken =
  "pk.eyJ1IjoiYWd1czAwNzkxIiwiYSI6ImNrcnIyeGR0ODAzdHQyd213Mm1vOXpxMHkifQ.y_uB64NGg2BOlbJnJ6puZw";
navigator.geolocation.getCurrentPosition(succesLocation, errorLocation, {
  enableHighAccuracy: true,
});

function succesLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}
function errorLocation() {}

const setupMap = (center) => {
  var map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v11", // style URL
    center: center,
    zoom: 15, // starting zoom
  });
  map.addControl(new mapboxgl.NavigationControl());
  map.addControl(
    new MapboxDirections({
      accessToken: mapboxgl.accessToken,
    }),
    "top-left"
  );
};

function loadMap() {
  showLocation();
}

function showLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPosition);
  } else {
    alert("Não foi possível obter sua localização.");
  }
}

function getPosition(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;

  callMapQuest(latitude, longitude);
}

function callMapQuest(latitude, longitude) {
  let url = `
  https://www.mapquestapi.com/staticmap/v5/map?key=vi2WwHkamj9rmOLanpnm04GZt5Xs4Bfg&center=${latitude},${longitude}&size=600,200@2x`;

  let image = document.createElement("img");
  image.src = url;

  document.getElementById("map").appendChild(image);
  image.style.height = "auto";
  image.style.width = "100%";
}

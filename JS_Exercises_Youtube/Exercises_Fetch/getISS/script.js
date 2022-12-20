(function () {
  "use strict";

  // making map and tiles
  const myMap = L.map("issMap").setView([51.505, -0.09], 1);

  const attribution =
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
  const tileUrl = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
  const tiles = L.tileLayer(tileUrl, { attribution });
  tiles.addTo(myMap);

  //making custom icon

  const myIcon = L.icon({
    iconUrl: "iss200.png",
    iconSize: [50, 32],
    iconAnchor: [25, 16],
  });
  const marker = L.marker([0, 0], { icon: myIcon }).addTo(myMap);

  const api_url = "https://api.wheretheiss.at/v1/satellites/25544";

  const getISS = async () => {
    const response = await fetch(api_url);
    const data = await response.json();
    const { latitude, longitude } = data;
    marker.setLatLng([latitude, longitude]);

    document.querySelector("#lat").textContent = latitude;
    document.querySelector("#lon").textContent = longitude;
  };

  setInterval(getISS, 2000);
})();

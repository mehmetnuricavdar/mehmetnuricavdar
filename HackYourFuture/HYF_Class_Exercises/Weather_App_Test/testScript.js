(function () {
  "use strict";
  const myMap = L.map("myMap");
  let didSearch = false;

  const fetchWeather = async (city) => {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=03ae8b17b6c4b51c61fc70d6434a0fa0"
    );
    let data = await response.json();
    displayWeather(data);
  };
  const displayWeather = (data) => {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const { lat, lon } = data.coord;

    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = Math.floor(temp) + " °C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + Math.floor(speed) + "km/h";
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";

    // creating map
    const attribution =
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
    const tileUrl = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";

    if (!didSearch) {
      const tiles = L.tileLayer(tileUrl, { attribution });
      tiles.addTo(myMap);
      didSearch = true;
    }
    myMap.setView([lat, lon], 10);
  };

  const search = () => {
    const searchValue = document.querySelector(".search-bar").value;
    fetchWeather(searchValue);
    document.querySelector("#myMap").style.display = "block";
  };

  document.querySelector(".search button").addEventListener("click", search);
  document.querySelector(".search-bar").addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      search();
    }
  });
})();

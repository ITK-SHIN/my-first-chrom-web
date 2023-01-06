const API_LEY = "27d6b6284b695a3de08aa1d266b9ec16";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.6540774&lon=126.6849253&appid=27d6b6284b695a3de08aa1d266b9ec16&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      weather.innerText = data.weather[0].main;
      city.innerText = data.name;
    });
}
function onGeoError() {
  alert("can't find you. No wearher for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

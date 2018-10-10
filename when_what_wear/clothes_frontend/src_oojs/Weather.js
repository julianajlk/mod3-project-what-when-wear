class Weather {
  constructor(id, temperature_avg, precipitation) {
    this.id = id;
    this.temperature_avg = temperature_avg;
    this.precipitation = precipitation;
  }

  renderWeather(weather) {
    console.log("renderWeather", weather);
    let mainContainerWeather = document.querySelector("#weather-container");
    let weatherContainer = document.createElement("div");
    mainContainerWeather.appendChild(weatherContainer);
  }
}

async function displayWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      try {
        // Fetch the API key with cache busting
        const apiKeyResponse = await fetch(`https://link.shew.cc/func/proxy.php?action=weatherapi_api_key&cacheBust=${new Date().getTime()}`, {
          cache: 'no-cache'
        });
        const apiKeyData = await apiKeyResponse.json();
        const apiKey = apiKeyData.api_key;

        // Fetch the weather data
        const weatherResponse = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}`);
        const weatherData = await weatherResponse.json();

        // Display the weather data
        const weatherDiv = document.getElementById('basicWeather');
        const temperature_c = weatherData.current.temp_c;
        const temperature_f = weatherData.current.temp_f;
        const feelslike_c = weatherData.current.feelslike_c;
        const feelslike_f = weatherData.current.feelslike_f;
        const condition = weatherData.current.condition.text;
        const condition_icon = weatherData.current.condition.icon;
        const location = weatherData.location.name;

        weatherDiv.innerHTML = `<img class="weathericon" src="${condition_icon}"> ${location} feels like ${feelslike_c}&deg;C (${feelslike_f}&deg;F) now.`;

      } catch (error) {
      console.error('Error fetching weather data:', error);
      weatherDiv.innerHTML = "You're supposed to see your current weather here, but somehow it's unavailable...";
    }
  }, error => {
    console.error('Error getting location:', error);
    weatherDiv.innerHTML = "You would see your current weather here if your location were provided...";
  });
} else {
  weatherDiv.innerHTML = "Geolocation is not supported by your browser, hence no weather data provided here...";
}
}
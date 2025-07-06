const locationDiv = document.getElementById('mylocation');
locationDiv.innerHTML = `Nowheresville`;
const timeDiv = document.getElementById('mylocaltime');
timeDiv.innerHTML = `another beautiful day`;
const weatherDiv = document.getElementById('mylocalweather');
weatherDiv.innerHTML = `Our weatherman seems to be scrambling for his cue cards...`;

document.addEventListener("DOMContentLoaded", function() {

    // Fetch the latest location from your server
    fetch('/data/homepage_location.json')
        .then(response => response.json())
        .then(location => {
            const lat = location.lat;
            const lon = location.lon;
            const city = location.city;
            const state = location.state;
            const country = location.country;
            
            // Fetch and display the weather for the updated location
            fetchWeather(lat, lon);
            
            // Display the local time
            displayLocalTime(lat, lon);
            
            // Display server's location
            displayLocation(city, state, country);
            
        })
        .catch(error => {
            console.error('Error fetching location data:', error);
            const weatherDiv = document.getElementById('mylocalweather');
            const timeDiv = document.getElementById('mylocaltime');

            if (weatherDiv) {
                weatherDiv.innerHTML = '';
            }

            if (timeDiv) {
                timeDiv.innerHTML = '';
            }

            const locationDiv = document.getElementById('mylocation');
            if (locationDiv) {
                locationDiv.innerHTML = '';
            }
        });
});

async function fetchWeather(lat, lon) {
    const weatherDiv = document.getElementById('mylocalweather');

    if (!weatherDiv) {
        console.error('Error: Weather div not found');
        return; // Exit the function if the element doesn't exist
    }

    try {
        // Fetch the API key with cache busting
        const apiKeyResponse = await fetch(`https://www.jasonshew.com/func/proxy.php?action=weatherapi_api_key&cacheBust=${new Date().getTime()}`, {
            cache: 'no-cache'
        });
        const apiKeyData = await apiKeyResponse.json();
        const apiKey = apiKeyData.api_key;

        // Fetch the weather data
        const weatherResponse = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}`);
        const weatherData = await weatherResponse.json();

        // Display the weather data
        const temperature_c = weatherData.current.temp_c;
        const temperature_f = weatherData.current.temp_f;
        const feelslike_c = weatherData.current.feelslike_c;
        const feelslike_f = weatherData.current.feelslike_f;
        const condition = weatherData.current.condition.text;
//      const condition_icon = weatherData.current.condition.icon;
//      const location = weatherData.location.name;

//         weatherDiv.innerHTML = `
//     <img class="weather-icon" src="${condition_icon}" alt="Weather Icon"> 
//     <span>feels like ${feelslike_c}&deg;C (${feelslike_f}&deg;F)</span> 
// `;

        weatherDiv.innerHTML = `
    <span>It feels like ${feelslike_c}&deg;C (${feelslike_f}&deg;F) outside; the actual temperature is ${temperature_c}&deg;C (${temperature_f}&deg;F). "${condition} for the next little while," said our local weatherman.</span> 
`;

    } catch (error) {
        console.error('Error fetching weather data:', error);
        console.log(apiKeyResponse);
        weatherDiv.innerHTML = 'Unable to retrieve weather data.';
    }
}

async function displayLocalTime(lat, lon) {
    const timeDiv = document.getElementById('mylocaltime');

    if (!timeDiv) {
        console.error('Error: Time div not found');
        return;
    }

    try {
        
        // Fetch the API key with cache busting
        const apiKeyResponse = await fetch(`https://www.jasonshew.com/func/proxy.php?action=timezonedb_api_key&cacheBust=${new Date().getTime()}`, {
          cache: 'no-cache'
        });
        const apiKeyData = await apiKeyResponse.json();
        const apiKey = apiKeyData.api_key;

        // Fetch the timezone data based on lat and lon
        const timezoneResponse = await fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${lat}&lng=${lon}`);
        const timezoneData = await timezoneResponse.json();

        if (timezoneData.status === 'FAILED') {
            throw new Error(timezoneData.message);
        }

        // Get the current time in the local timezone
        const localTime = new Date(timezoneData.formatted);

        // Format the time to 24-hour clock or 12-hour AM/PM
        const options = {
                year: 'numeric',    // Adds the year (e.g., 2025)
                month: 'long',      // Adds the full month name (e.g., February)
                day: 'numeric',     // Adds the day of the month (e.g., 14)
                hour: 'numeric',    // Adds the hour (e.g., 3 PM)
                minute: '2-digit',  // Adds the minute (e.g., 30)
                timeZoneName: 'short', // Includes the timezone (e.g., EST)
                hour12: true        // Formats time in 12-hour format (AM/PM)
        };

        let formattedTime = localTime.toLocaleTimeString('en-CA', options);
        formattedTime = formattedTime.replace(/a\.m\./gi, "AM").replace(/p\.m\./gi, "PM");

        // Display the formatted time
        timeDiv.innerText = `${formattedTime}`;
    } catch (error) {
        console.error('Error fetching local time:', error);
        timeDiv.innerText = 'Unable to retrieve local time.';
    }
}

function displayLocation(city, state, country) {
    const locationDiv = document.getElementById('mylocation');

    switch (country) {
    case 'Canada':
        country = 'Canada 🇨🇦';
        break;
    case 'United States':
    case 'USA':
    case 'US':
        country = 'United States 🇺🇸';
        break;
    case 'United Kingdom':
    case 'UK':
        country = 'United Kingdom 🇬🇧';
        break;
    case 'Australia':
        country = 'Australia 🇦🇺';
        break;
    case 'France':
        country = 'France 🇫🇷';
        break;
    case 'Germany':
        country = 'Germany 🇩🇪';
        break;
    case 'Japan':
        country = 'Japan 🇯🇵';
        break;
    case 'China':
        country = 'China 🇨🇳';
        break;
    case 'Mexico':
        country = 'Mexico 🇲🇽';
        break;
    case 'Japan':
        country = 'Japan 🇯🇵';
        break;
    case 'South Korea':
        country = 'South Korea 🇰🇷';
        break;
    case 'Taiwan':
        country = 'Taiwan 🇹🇼';
        break;
    case 'Hong Kong':
        country = 'Hong Kong 🇭🇰';
        break;
    case 'Indonesia':
        country = 'Indonesia 🇮🇩';
        break;
    // Add more countries as needed
    
    default:
        // Optionally handle cases where the country is not listed
        break;
    }
    
    if (city === '') {
        city = 'Nowheresville'
    }
    
    if (state !== '') {
        state = ', ' + state;
    }
    
    if (country !== '') {
        country = ', ' + country;
    }
    if (locationDiv) {
        locationDiv.innerText = `${city}${state}${country}`;
    } else {
        console.error('Error: Location div not found');
    }
}

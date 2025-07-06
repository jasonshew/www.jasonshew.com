// Function to fetch and display checkins
async function fetchAndDisplayCheckins() {
    const loadingIndicator = document.getElementById('loading');
    const checkinsList = document.getElementById('checkins-list');
    
    try {
        loadingIndicator.style.display = 'block';
        // Fetching the data through the proxy
        const response = await fetch(`/data/recent_checkins.json`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const checkins = await response.json();
        
        // Displaying each checkin
        checkins.forEach(checkin => {
            const checkinEntry = document.createElement('div');
            checkinEntry.classList.add('checkin-entry');

            // Parsing the timestamp and creating a Date object
            const date = new Date(checkin.checked_in_at_utc + 'Z');

            // Check if the date is valid
            if (isNaN(date)) {
                console.warn('Invalid date:', checkin.checked_in_at_utc);
                return;
            }

            // Formatting the date and time with the time zone
            const formattedDate = date.toLocaleDateString('en-CA', { weekday: 'short', year: 'numeric', month: '2-digit', day: '2-digit' });
            let formattedTime = date.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit', hour12: true, timeZoneName: 'short' });
            let formattedDatetime = `Checked in on ${formattedDate} @ ${formattedTime}`;            
            formattedDatetime = formattedDatetime.replace(/a\.m\./gi, "AM").replace(/p\.m\./gi, "PM");

            // Creating the name element as a link
            const name = document.createElement('div');
            name.classList.add('checkin-placename');
            name.textContent = '📍 ';
            const nameLink = document.createElement('a');
            nameLink.textContent = checkin.place_name ? checkin.place_name : 'Private Premises';
            nameLink.href = checkin.url ? checkin.url : '#';
            nameLink.target = '_blank';
            nameLink.rel = 'noreferrer noopener nofollow';
            name.appendChild(nameLink);

            // Creating the address element
            const address = document.createElement('div');
            address.classList.add('checkin-address');
            address.textContent = checkin.address.replace(/\r\n/g, ', ');

            // Creating the timestamp element
            const timestamp = document.createElement('div');
            timestamp.classList.add('checkin-timestamp');
            timestamp.textContent = formattedDatetime;

            // Appending elements to the checkin div
            checkinEntry.appendChild(name);
            checkinEntry.appendChild(address);
            checkinEntry.appendChild(timestamp);

            // Appending the checkin div to the container
            checkinsList.appendChild(checkinEntry);
            loadingIndicator.style.display = 'none';
            checkinsList.classList.add('loaded');
        });
    } catch (error) {
        console.error('Failed to fetch and display checkins: ', error);
    }
}

// Call the function when the page loads
// window.onload = fetchAndDisplayCheckins;
// Call the function immediately
fetchAndDisplayCheckins();
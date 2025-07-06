// Function to fetch and display links from linkbook
async function fetchAndDisplayLinks() {
    const loadingIndicator = document.getElementById('loading');
    const linksList = document.getElementById('links-list');

    try {
        loadingIndicator.style.display = 'block';

        const response = await fetch(`/data/linkbook.json`);        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const links = await response.json();

        // Select container
        
        linksList.innerHTML = ''; // Clear previous content

        // Render links
        links.forEach(link => {
            const linkEntry = document.createElement('div');
            linkEntry.classList.add('link-entry');

            // Format timestamp
            const date = new Date(link.valid_as_of_utc + 'Z');
            const formattedDate = date.toLocaleDateString('en-CA', { weekday: 'short', year: 'numeric', month: '2-digit', day: '2-digit' });
            let formattedTime = date.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit', hour12: true, timeZoneName: 'short' });
            let formattedDatetime = `Valid as of ${formattedDate} @ ${formattedTime}`;            
            formattedDatetime = formattedDatetime.replace(/a\.m\./gi, "AM").replace(/p\.m\./gi, "PM");

            // Create hyperlink
            const hyperlink_container = document.createElement('span');
            hyperlink_container.classList.add('link-hyper_text');
            hyperlink_container.textContent = '🔗 ';

            const hyperlink = document.createElement('a');
            hyperlink.textContent = link.hyper_text || 'Untitled Link';
            hyperlink.href = link.url || '#';
            hyperlink.target = '_blank';
            hyperlink.rel = 'noreferrer noopener nofollow';

            hyperlink_container.appendChild(hyperlink);

            // Sidenote
            if (link.sidenote) {
                const sidenote = document.createElement('div');
                sidenote.classList.add('link-sidenote');
                sidenote.textContent = `${link.sidenote}`;
                linkEntry.appendChild(sidenote);
            }

            // Timestamp
            const timestamp = document.createElement('div');
            timestamp.classList.add('link-timestamp');
            timestamp.textContent = formattedDatetime;

            // Append elements
            linkEntry.appendChild(hyperlink_container);
            linkEntry.appendChild(timestamp);
            linksList.appendChild(linkEntry);
            loadingIndicator.style.display = 'none';
            linksList.classList.add('loaded');
        });
    } catch (error) {
        console.error('❌ Failed to fetch links:', error);
    }
}

// Call the function when the page loads
// window.onload = fetchAndDisplayLinks;
// Call the function immediately
fetchAndDisplayLinks();
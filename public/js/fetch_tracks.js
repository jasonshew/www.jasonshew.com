// Function to fetch and display tracks
async function fetchAndDisplayTracks() {
    const loadingIndicator = document.getElementById('loading');
    const tracksList = document.getElementById('tracks-list');
    
    try {
        loadingIndicator.style.display = 'block';
        
        // Fetch non-sliceable names first
        const nonSliceableNamesResponse = await fetch(`/data/nonsliceable_names.txt`);
        const nonSliceableNames = (await nonSliceableNamesResponse.text())
            .split('\n')
            .map(name => name.trim().toLowerCase())
            .filter(name => name !== '');

        const artworkThumbnailsDirectory = '/images/resized_album_artwork/';
        const tracksResponse = await fetch(`/data/recent_tracks.json`);
        
        if (!tracksResponse.ok) {
            throw new Error('Network response was not ok');
        }

        const tracks = await tracksResponse.json();
        tracksList.innerHTML = ''; // Clear existing content

        tracks.forEach(track => {
            const trackEntry = document.createElement('div');
            trackEntry.className = 'track-entry';

            // Artwork link
            const artworkLink = document.createElement('a');
            artworkLink.href = track.artwork;
            artworkLink.target = '_blank';
            artworkLink.rel = 'noreferrer noopener nofollow';
            
            const artwork = document.createElement('img');
            artwork.src = artworkThumbnailsDirectory + track.artwork
                .replace(/^https?:\/\//, '')     // Remove "http://" or "https://"
                .replace(/\?.*$/, '')             // Remove query string
                .replace(/\//g, '_')              // Replace all slashes with underscores
                .replace(/\.[^.]+$/, '') + '.webp'; // Remove existing extension and add ".webp"
            artwork.alt = `${track.title} (Album Artwork)`;
            artwork.className = 'track-artwork';
            artwork.width = 95;
            artwork.height = 95;
            artwork.loading = 'eager';
            artworkLink.appendChild(artwork);

            // Track info
            const trackInfo = document.createElement('div');
            trackInfo.className = 'track-info';

            const titleGenre = document.createElement('div');
            titleGenre.className = 'track-title-genre';

            const title = document.createElement('a');
            title.href = track.url.replace(/https?:\/\/(www\.)?music/, 'https://embed.music') + '&amp;app=music&amp;itsct=music_box_player&amp;itscg=30200&amp;ls=1&amp;theme=auto';
            title.textContent = track.title;
            title.className = 'track-title';
            title.target = '_blank';
            title.rel = 'noreferrer noopener nofollow';
            titleGenre.appendChild(title);

            if (track.genre) {
                const genre = document.createElement('span');
                genre.className = 'track-genre';
                genre.textContent = `\u00A0${track.genre}\u00A0`;
                titleGenre.appendChild(genre);
            }

            const artist = document.createElement('a');
            let artistNameInURL = track.artist;
            if (!nonSliceableNames.includes(artistNameInURL.toLowerCase())) {
                artistNameInURL = track.artist.split(' & ')[0].split(', ')[0].trim();
            }
            artist.href = `https://en.wikipedia.org/wiki/${encodeURIComponent(artistNameInURL)}`;
            artist.target = '_blank';
            artist.rel = 'noreferrer noopener nofollow';
            artist.textContent = track.artist;
            artist.className = 'track-artist';

            const albumYear = document.createElement('div');
            albumYear.className = 'track-album-year';
            albumYear.textContent = track.album;
            if (track.year && Number(track.year) > 1900) {
                albumYear.textContent += ` ⋆ ${track.year}`;
            } else {
                albumYear.textContent += ` ⋆ ${new Date().getFullYear()}`;
            } 

            trackInfo.appendChild(titleGenre);
            trackInfo.appendChild(artist);
            trackInfo.appendChild(albumYear);
            trackEntry.appendChild(artworkLink);
            trackEntry.appendChild(trackInfo);
            tracksList.appendChild(trackEntry);
        });

        loadingIndicator.style.display = 'none';
        tracksList.classList.add('loaded');

    } catch (error) {
        console.error('Failed to fetch and display tracks: ', error);
        loadingIndicator.style.display = 'none';
        tracksList.innerHTML = '<p>Error loading tracks. Please try again later.</p>';
    }
}

fetchAndDisplayTracks();
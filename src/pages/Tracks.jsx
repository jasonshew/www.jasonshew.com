import { Helmet } from 'react-helmet-async';
import ExternalScript from '../components/ExternalScript.jsx';

export default function Tracks() {
  return (
    <>
      <Helmet><title>Tracks :: Jason Shew</title></Helmet>

      <section id="tracks" className="prose dark:prose-invert max-w-none">
        <h1>Check-ins</h1>
        <p><a href="#100">This playlist</a> displays the most recent 100 tracks I’ve listened to, with updates
                    happening in real
                    time. Some useful tips: </p>
                <ul>
                    <li>Clicking any album artwork thumbnail returns the uncompressed high-res version, thanks to <a
                            href="https://bendodson.com/projects/apple-music-artwork-finder/" target="_blank"
                            rel="noreferrer noopener nofollow">Ben Dodson’s Apple Music Artwork Finder</a>. </li>
                    <li>Clicking a track title lets you preview the song (no subscription required) or listen on Music
                        (subscription
                        required).</li>
                    <li>Clicking an artist's name links to their Wikipedia page (some artists may not have one or may
                        require
                        disambiguation).</li>
                    <li>The <a href="#music-player">Music player</a> at the bottom streams the full playlist for
                        preview
                        (note that it
                        might differ slightly from the list on this page) and lets you add it to your Music Library.
                    </li>
                    <li>For other playlists, please <a href="/applemusic" target="_blank"
                            rel="noreferrer noopener nofollow">follow me on Music</a>. I also have a <a
                            href="https://music.apple.com/ca/playlist/add-music/pl.u-r2yBZMEuP472m0" target="_blank"
                            rel="noreferrer noopener nofollow">collaborative playlist titled <strong>+Add
                                Music</strong></a>
                        where you
                        can share your favourite tracks with me!</li>
                </ul>
                <h1 id="100" style="text-align:center; margin: 3rem auto">100 RECENT TRACKS</h1>
                <div id="loading"><span class="dots">Loading...</span></div>
                <div id="tracks-list"></div>

                <div id="music-player"><iframe id="apple-music-embed"
                        src="https://embed.music.apple.com/ca/playlist/my-recent-tracks/pl.u-06oxMzyCW8Mq05?app=music&itsct=music_box_player&itscg=30200&ls=1&theme=auto"
                        height="450px" frameborder="0"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                        allow="autoplay *; encrypted-media *; clipboard-write"
                        style="width: 100%; max-width: 660px; overflow: hidden; border-radius: 10px; transform: translateZ(0px); animation: 2s ease 0s 6 normal none running loading-indicator; background-color: transparent;"></iframe>
                </div>
                <div id="music-info" style="display: table; text-align: center !important;"><span class="ghostext">🎧
                    </span><span id="amtrack"><a
                            href="https://music.apple.com/ca/playlist/my-recent-tracks/pl.u-06oxMzyCW8Mq05"
                            target="_blank" rel="noopener">This playlist is available on Music.</a></span></div>

      </section>

      {/* Load the old script AFTER the DOM nodes exist */}
      <ExternalScript src="https://api.shewtopia.com/jshewblogapi/fetch/fetch-tracks.js" />
    </>
  );
}
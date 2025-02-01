// Array of songs (replace with actual song paths)
const songs = [
    { title: "Song 1", file: "song1.wav" },
    { title: "Song 2", file: "song2.wav" },
    { title: "Song 3", file: "song3.wav" }
];

// Function to render songs
function displaySongs() {
    const songsListDiv = document.getElementById('songs-list');
    songsListDiv.innerHTML = ''; // Clear any previous content

    songs.forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.classList.add('song-item');
        songDiv.innerHTML = `
            <h3>${song.title}</h3>
            <audio controls>
                <source src="${song.file}" type="audio/wav">
                Your browser does not support the audio element.
            </audio>
        `;
        songsListDiv.appendChild(songDiv);
    });
}

// Display songs when the page loads
window.onload = displaySongs;

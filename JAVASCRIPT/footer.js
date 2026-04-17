// Updated footer.js for Spotify Clone

// Function to format time
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Complete player functionality
const audio = new Audio();
let currentTrackIndex = 0;
const tracks = []; // This will hold track data fetched from the backend

// API request to fetch songs
async function fetchSongs() {
    const response = await fetch('YOUR_API_ENDPOINT'); // Replace with your API endpoint
    const data = await response.json();
    tracks.push(...data);
    loadTrack(currentTrackIndex);
}

function loadTrack(index) {
    audio.src = tracks[index]?.url; // Assuming each track object has a 'url' property
    audio.load();
}

function playTrack() {
    audio.play();
}

function pauseTrack() {
    audio.pause();
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
}

function previousTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
}

function shuffleTracks() {
    tracks.sort(() => Math.random() - 0.5);
}

function repeatTrack() {
    audio.currentTime = 0;
    playTrack();
}

// Event listeners for buttons
document.getElementById('play').addEventListener('click', playTrack);
document.getElementById('pause').addEventListener('click', pauseTrack);
document.getElementById('next').addEventListener('click', nextTrack);
document.getElementById('previous').addEventListener('click', previousTrack);
// Add shuffle and repeat button listeners similarly

// Initial fetch
fetchSongs();
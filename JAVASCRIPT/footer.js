///""""""""""""""""""""""""""""""""
// THE PLAY/PAUSE BUTTON LOGIC and the sng skipping BAR Logic 
//""""""""""""""""""""""""""""""""""


// 1. Setup the Audio and Elements
const audio = new Audio("Utils/Sundari Onnu Parayu x Take My Breath - Noyal Augustine x Jimmy Godrick Mashup.mp3");
const playBtn = document.getElementById('play-main');
const progressFill = document.querySelector('.progress-fill');
const progressRail = document.querySelector('.progress-rail');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('total-duration');

let isPlaying = false;

// 2. Format Time Helper (Converts seconds to 0:00 format)
function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
}

// 3. Play/Pause Toggle
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.classList.replace('fa-circle-play', 'fa-circle-pause');
    } else {
        audio.pause();
        playBtn.classList.replace('fa-circle-pause', 'fa-circle-play');
    }
});

// 4. Update Progress Bar and Time Labels
audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
        // Calculate percentage for the bar
        const percentage = (audio.currentTime / audio.duration) * 100;
        progressFill.style.width = `${percentage}%`;

        // Update the numbers (0:00)
        currentTimeEl.innerText =  formatTime (audio.currentTime);
        durationEl.innerText = formatTime(audio.duration);
    }
});

progressRail.addEventListener('click', (e) => {
// 1. Get the exact position and width of the gray bar on the screen
const rect = progressRail.getBoundingClientRect();

// 2. Calculate the click position relative to the START of the bar
// (Mouse X position - Bar's Left position = Exact point in the bar)
const clickX = e.clientX - rect.left;

// 3. Get the total width of the bar
const width = rect.width;

const duration = audio.uration;

if (duration) {
    // 4. Set the time (Click point / Width * Total Seconds)
    audio.currentTime = (clickX / width) * duration;
}
});

// 6. Handle Song End (Reset button)
audio.addEventListener('ended', () => {
    playBtn.classList.replace('fa-circle-pause', 'fa-circle-play');
    progressFill.style.width = '0%';
});
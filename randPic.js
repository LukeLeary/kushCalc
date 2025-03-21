const pics = [
    'media/crossJ.jpg',
    'media/turkeyJ.png',
    'media/gingerJ.png',
    'media/braidedJ.png',
    'media/tulipJ.png',
    'media/planeJ.png',
    'media/x-wingJ.png',
    'media/cactusJ.png'
];


const names = [
    'Cross Joint',
    'Turkey Joint',
    'Ginger Gas',
    'Braided Bogie',
    'tulip Joint',
    'Plane Joint',
    'X-wing Joint',
    'Cactus Kush'
];

const links = [
    'https://youtu.be/6x1KM579Pbs?feature=shared',
    'https://youtu.be/-jzy_--z-Yo?si=jm1W8_q-sKa9dRMd',
    'https://youtu.be/pYK4txwVgJ0?si=eJ6b4h5x2AkVPJxS',
    'https://youtu.be/LyKswcDG8Qo?feature=shared',
    'https://youtu.be/dht2Lh46HYI?feature=shared',
    'https://youtu.be/Vt6qd6ly8To?feature=shared',
    'https://youtu.be/l6vU1pP1XNA?si=zlclGerUBSduldEc',
    'https://youtu.be/NRcM9uT4lMc?si=-WwIFGmG7a6fZ4YV'
];

const pic = document.getElementById('randomImage');
const link = document.getElementById('tutorialLink');
const nameJ = document.getElementById('jointName');


let shuffledIndices = [];
let currentPosition = 0;

// Initialize with cross J
pic.src = pics[0];
nameJ.innerText = names[0];
link.href = links[0];

// Function to create a new shuffled sequence
function createShuffledSequence() {
    // Create array with all indices
    shuffledIndices = Array.from(Array(pics.length).keys());
    
    // Shuffle the array using Fisher-Yates algorithm
    for (let i = shuffledIndices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]];
    }
    
    // Reset the position
    currentPosition = 0;
}

// Create initial shuffled sequence
createShuffledSequence();

function showImage() {
    // If we've gone through all images, create a new shuffled sequence
    if (currentPosition >= shuffledIndices.length) {
        createShuffledSequence();
    }
    
    // Get the next index from our shuffled sequence
    const index = shuffledIndices[currentPosition];
    currentPosition++;
    
    // Update display
    nameJ.innerText = names[index];
    pic.src = pics[index];
    link.href = links[index];
}

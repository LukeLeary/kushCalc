const pics = [
'media/turkeyJ.png',
'media/gingerJ.png',
'media/braidedJ.png',
'media/crossJ.jpg',
'media/tulipJ.png',
'media/planeJ.png',
];


const names = [
    'Turkey Joint',
    'Ginger Gas',
    'Braided Bogie',
    'Cross Joint',
    'tulip Joint',
    'Plane Joint'
];

const links = [
    'https://youtu.be/-jzy_--z-Yo?si=jm1W8_q-sKa9dRMd',
    'https://youtu.be/pYK4txwVgJ0?si=eJ6b4h5x2AkVPJxS',
    'https://youtu.be/LyKswcDG8Qo?feature=shared',
    'https://youtu.be/6x1KM579Pbs?feature=shared',
    'https://youtu.be/dht2Lh46HYI?feature=shared',
    'https://youtu.be/Vt6qd6ly8To?feature=shared'
];

const pic = document.getElementById('randomImage');
const link = document.getElementById('tutorialLink');
const name = document.getElementById('jointName');

let lastIndex = -1;

function showImage() {
    var a;


    do {
        a = Math.floor(Math.random() * pics.length);
    } while (a === lastIndex && pics.length > 1);

    lastIndex = a;

    name.innerText = names[a];
    pic.src = pics[a];
    link.href = links[a];
}

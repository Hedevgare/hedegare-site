const BASE_TEXT = "Edgar";
const NICK_TEXT = "\"Hedegare\"";

var nicknameElement = document.getElementById("nickname");

document.getElementById("title").addEventListener("mouseover", (event) => {
    nicknameElement.innerText = NICK_TEXT;
});

document.getElementById("title").addEventListener("mouseleave", (e) => {
    nicknameElement.innerText = BASE_TEXT;
});

var images = [
    'bg-1.svg',
    'bg-2.svg',
    'bg-3.svg',
    'bg-4.svg',
    'bg-5.svg',
];

function getRandomBackgroundImage() {
    var randomNumber = Math.floor(Math.random() * 5);

    document.getElementById("bg-image").setAttribute("src", "images/" + images[randomNumber]);
}

getRandomBackgroundImage();
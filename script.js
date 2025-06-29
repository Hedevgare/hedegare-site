// const BASE_TEXT = "Edgar";
// const NICK_TEXT = "\"Hedegare\"";

// var nicknameElement = document.getElementById("nickname");

// document.getElementById("title").addEventListener("mouseover", (event) => {
//     nicknameElement.innerText = NICK_TEXT;
// });

// document.getElementById("title").addEventListener("mouseleave", (e) => {
//     nicknameElement.innerText = BASE_TEXT;
// });

var images = [
    // 'bg-1.svg',
    'bg-6.svg',
    // 'bg-3.svg',
    // 'bg-4.svg',
    // 'bg-5.svg',
];

var filters = [];

function getRandomBackgroundImage() {
    var randomNumber = Math.floor(Math.random() * 1);

    document.getElementById("bg-image").setAttribute("src", "images/" + images[randomNumber]);
}

getRandomBackgroundImage();

function filterProject(event, type) {
    // Toggle the active class on the clicked filter button
    event.currentTarget.classList.toggle('active');
    // Toggle the filter type
    var filterIndex = filters.findIndex((filter) => filter === type);
    filterIndex === -1 ? filters.push(type) : filters.splice(filterIndex, 1);

    if (filters.length === 0) {
        // Show all projects
        document.querySelectorAll('.project').forEach((project) => {
            project.classList.remove('hidden');
        });
    } else {
        // Hide all projects first
        document.querySelectorAll('.project').forEach((project) => {
            project.classList.add('hidden');
        });

        // Show only the projects that match the filters
        filters.forEach((filter) => {
            document.querySelectorAll(`.project-type__${filter}`).forEach((project) => {
                project.classList.remove('hidden');
            });
        });
    }

    // var projects = document.querySelectorAll(`.project-type__${type}`);
    // console.log(projects);
}
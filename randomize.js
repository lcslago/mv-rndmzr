import { filmList } from "./film-list.js";

const movieChosen = document.querySelector('[data-movie]');

window.addEventListener('pageshow', () => {
    movieChosen.innerHTML = randomize(filmList);
})

function randomize(data) {
    let movie;
    for (let i = data.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [data[i], data[j]] = [data[j], data[i]];

        movie = data[i];
    }

    return movie.trim();
}
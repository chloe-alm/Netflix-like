export default function searchRender(infosProgram, i) {
    console.log('searchRender')
    if (infosProgram[i].poster_path == null){
        return `<img class="movies__container--movie-image" src='https://media.netflix.com/dist/img/meta-image-netflix-symbol-black.png'/>`
    }
    return `<img class="movies__container--movie-image" src='https://image.tmdb.org/t/p/original/${infosProgram[i].poster_path}'/>`
}


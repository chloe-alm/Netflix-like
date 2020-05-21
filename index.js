import Header from "./components/Header.mjs";
import {fetchMovie, fetchTvShowsNetflix, fetchTrending, fetchTopRated, fetchByGenreMovies, fetchModal,fetchSearching}  from "./apiService.js";
import Modal from "./components/Modal.mjs";
import searchRender from "./components/rechercheBarre.mjs";


//afficher les images ds chaque sections
(async () => {
    let movie = await fetchMovie(157336);
    //console.log(movie)
    document.getElementById("header").innerHTML = Header(movie);
    document.getElementById("header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
})();

(async () => {
  let series = await fetchTvShowsNetflix();
  // console.log(series[0].poster_path)
  //console.log(series.length)
  for (let i = 0; i < series.length; i++){
    //console.log(series.results[i].poster_path)
    document.getElementById('tvShowNetflix').innerHTML += `
         <img  src="https://image.tmdb.org/t/p/original/${series[i].poster_path}" class=" movies__container--movie-image" id="${series[i].id}"/>`;
  }
  
})();

(async () => {
  let moviesTrending = await fetchTrending();
  console.log(moviesTrending)
  for (let i = 0; i < moviesTrending.length; i++){
    //console.log(moviesTrending.results)
    document.querySelector('#trendingMovies ').innerHTML += `
         <img src="https://image.tmdb.org/t/p/original/${moviesTrending[i].backdrop_path}" class=" movies__container--movie-image" id='${moviesTrending[i].id}'/>`;
  }
  
})();

(async () => {
  let topRated = await fetchTopRated();
  //console.log(topRated.results)
  for (let i = 0; i < topRated.length; i++){
    //console.log(topRated.results)
    document.querySelector('#topRated ').innerHTML += `
         <img src="https://image.tmdb.org/t/p/original/${topRated[i].backdrop_path}"class=" movies__container--movie-image" id='${topRated[i].id}' alt = 'Images de la série '/>`;
  }
  
})();

(async () => {
  let genreMovies= await fetchByGenreMovies(28);
  console.log(genreMovies)
  for (let i = 0; i < genreMovies.length; i++){
    console.log(genreMovies[i])
    document.querySelector('#actionsMovies ').innerHTML += `
         <img src="https://image.tmdb.org/t/p/original/${genreMovies[i].backdrop_path}"class=" movies__container--movie-image" id='${genreMovies[i].id}alt = 'Images de la série '/>`;
  }
  
})();

(async () => {
  let genreMoviesComedie= await fetchByGenreMovies(35);
  //console.log(genreMoviesComedie)
  for (let i = 0; i < genreMoviesComedie.length; i++){
    //console.log(genreMovies.results)
    document.querySelector('#moviesComedie ').innerHTML += `
         <img src="https://image.tmdb.org/t/p/original/${genreMoviesComedie[i].backdrop_path}"class=" movies__container--movie-image" id='${genreMoviesComedie[i].id}' alt = 'Images de la série '/>`;
  }
  
})();

(async () => {
  let genreMoviesDoc= await fetchByGenreMovies(99);
  //console.log(genreMoviesDoc)
  for (let i = 0; i < genreMoviesDoc.length; i++){
    //console.log(genreMovies.results)
    document.querySelector('#moviesDoc ').innerHTML += `
         <img src="https://image.tmdb.org/t/p/original/${genreMoviesDoc[i].backdrop_path}"class=" movies__container--movie-image" id='${genreMoviesDoc[i].id}'alt = 'Images de la série '/>`;
  }
  
})();

//affichage modal au click
(async() => {
  let active = true;
  document.querySelectorAll('#tvShowNetflix').forEach((serie) => serie.addEventListener('click', async (e) =>{
    let serieId = parseInt(e.target.attributes[2].value)
    console.log(e.target.attributes)
    console.log(serieId)
    let filmsModal = await fetchModal('https://api.themoviedb.org/3/tv/', serieId)
    console.log(filmsModal)
    let containerNetflix = document.querySelector('.modal_netflix')
    if (serieId === filmsModal.id){
      containerNetflix.innerHTML = Modal(filmsModal);
      containerNetflix.style.display = 'block'
      //affichage du background image
      containerNetflix.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${filmsModal.backdrop_path})`;
      containerNetflix.style.backgroundSize='cover';
      containerNetflix.style.backgroundPosition='center';
      //ferme la modal
      active = false;
      if(active == false){
        let cross = containerNetflix.getElementsByClassName('cross')
        if(cross && cross[0]){
          cross[0].addEventListener('click',(e) =>{
            containerNetflix.style.display = 'none'
            acitve = true
          })
        }
      }
    
    }else{
      console.error()
    }

   }))
})();


(async() => {
  let active = true;
  document.querySelectorAll('#trendingMovies').forEach((film) => film.addEventListener('click', async (e) =>{
    let filmId = parseInt(e.target.attributes[2].value)
    console.log(e.target.attributes)
    //console.log(filmId)
    let filmsModal = await fetchModal('https://api.themoviedb.org/3/movie/', filmId)
    console.log(filmsModal)
    let containerTrending = document.querySelector('.modal_trending')
    if (filmId === filmsModal.id){
      containerTrending.innerHTML = Modal(filmsModal);
      containerTrending.style.display = 'block'
      containerTrending.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${filmsModal.backdrop_path})`;
      containerTrending.style.backgroundSize='cover';
      containerTrending.style.backgroundPosition='center';
      active = false;
      if(active == false){
        let cross = containerTrending.getElementsByClassName('cross')
        if(cross && cross[0]){
          cross[0].addEventListener('click',(e) =>{
            containerTrending.style.display = 'none'
            acitve = true
          })
        }
      }
    
    }else{
      console.error()
    
    }

   }))
})();

(async() => {
  let active = true;
  document.querySelectorAll('#topRated ').forEach((film) => film.addEventListener('click', async (e) =>{
    let filmId = parseInt(e.target.attributes[2].value)
    console.log(e.target.attributes)
    //console.log(filmId)
    let filmsModal = await fetchModal('https://api.themoviedb.org/3/movie/', filmId)
    console.log(filmsModal)
    let containerTopRated = document.querySelector('.modal_toprated')
    if (filmId === filmsModal.id){
      containerTopRated.innerHTML = Modal(filmsModal);
      containerTopRated.style.display = 'block'
      containerTopRated.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${filmsModal.backdrop_path})`;
      containerTopRated.style.backgroundSize='cover';
      containerTopRated.style.backgroundPosition='center';
      active = false;
      if(active == false){
        let cross = containerTopRated.getElementsByClassName('cross')
        if(cross && cross[0]){
          cross[0].addEventListener('click',(e) =>{
            containerTopRated.style.display = 'none'
            acitve = true
          })
        }
      }
    
    }else{
      console.error()
    
    }

   }))
})();

(async() => {
  let active = true;
  document.querySelectorAll('#actionsMovies ').forEach((film) => film.addEventListener('click', async (e) =>{
    let filmId = parseInt(e.target.attributes[2].value)
    console.log(e.target.attributes)
    //console.log(filmId)
    let filmsModal = await fetchModal('https://api.themoviedb.org/3/movie/', filmId)
    console.log(filmsModal)
    let containerAction = document.querySelector('.modal_action')
    if (filmId === filmsModal.id){
      containerAction.innerHTML = Modal(filmsModal);
      containerAction.style.display = 'block'
      containerAction.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${filmsModal.backdrop_path})`;
      containerAction.style.backgroundSize='cover';
      containerAction.style.backgroundPosition='center';
      active = false;
      if(active == false){
        let cross = containerAction.getElementsByClassName('cross')
        if(cross && cross[0]){
          cross[0].addEventListener('click',(e) =>{
            containerAction.style.display = 'none'
            acitve = true
          })
        }
      }
    
    }else{
      console.error()
    
    }

   }))
})();

(async() => {
  let active = true;
  document.querySelectorAll('#moviesComedie').forEach((film) => film.addEventListener('click', async (e) =>{
    let filmId = parseInt(e.target.attributes[2].value)
    console.log(e.target.attributes)
    //console.log(filmId)
    let filmsModal = await fetchModal('https://api.themoviedb.org/3/movie/', filmId)
    console.log(filmsModal)
    let containerComedie = document.querySelector('.modal_comedie')
    if (filmId === filmsModal.id){
      containerComedie.innerHTML = Modal(filmsModal);
      containerComedie.style.display = 'block'
      containerComedie.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${filmsModal.backdrop_path})`;
      containerComedie.style.backgroundSize='cover';
      containerComedie.style.backgroundPosition='center';
      active = false;
      if(active == false){
        let cross = containerComedie.getElementsByClassName('cross')
        if(cross && cross[0]){
          cross[0].addEventListener('click',(e) =>{
            containerComedie.style.display = 'none'
            acitve = true
          })
        }
      }
    
    }else{
      console.error()
    
      
    }

   }))
})();

(async() => {
  let active = true;
  document.querySelectorAll('#moviesDoc').forEach((film) => film.addEventListener('click', async (e) =>{
    let filmId = parseInt(e.target.attributes[2].value)
    console.log(e.target.attributes)
    //console.log(filmId)
    let filmsModal = await fetchModal('https://api.themoviedb.org/3/movie/', filmId)
    console.log(filmsModal)
    let containerDoc = document.querySelector('.modal_doc')
    if (filmId === filmsModal.id){
      containerDoc.innerHTML = Modal(filmsModal);
      containerDoc.style.display = 'block'
      containerDoc.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${filmsModal.backdrop_path})`;
      containerDoc.style.backgroundSize='cover';
      containerDoc.style.backgroundPosition='center';
      active = false;
      if(active == false){
        let cross = containerDoc.getElementsByClassName('cross')
        if(cross && cross[0]){
          cross[0].addEventListener('click',(e) =>{
            containerDoc.style.display = 'none'
            acitve = true
          })
        }
      }
    
    }else{
      console.error()
    
    }

   }))
})();

//barre recherche
const debounce = (func, delay) => {
  let inDebounce
  return function() {
      const context = this
      const args = arguments
      clearTimeout(inDebounce)
      inDebounce = setTimeout(() => func.apply(context, args), delay)
  }
}
(async () => {
  document.getElementById('inputSearch').addEventListener('input', debounce( async(e) => {
      if(e.target.value){
          //console.log(e.target.value)
          let infosProgram = await fetchSearching('https://api.themoviedb.org/3/search/movie', e.target.value);
          //console.log(infosProgram)
          //diparition du header et section films et series au moment de la recherche
          let containerMovies = document.getElementsByClassName('movies')
          //console.log(containerMovies[0])
          containerMovies[0].style.display = 'none'
          document.getElementById('header').style.display = 'none'
          //affichage et remplissage du container avec les images de la recherche
          let containerSearch = document.getElementsByClassName('search-container')
          for(let i = 0; i < infosProgram.length; i++){
              containerSearch[0].innerHTML += searchRender(infosProgram, i)
          }
      } else if(e.target.value == false){
          console.log('vide')
      }
      window.document.addEventListener('click', (e) =>{
          let containerMovies = document.getElementsByClassName('movies')
          containerMovies[0].style.display = 'block'
          document.getElementById('header').style.display = 'block'
          let containerSearch = document.getElementsByClassName('search-container')
          containerSearch[0].innerHTML = ''
          // console.log(containerSearch[0].childNodes)
      })
  }, 500))
})();




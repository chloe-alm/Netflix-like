const API_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "0e6da20db3f45dc3923b4a769f8905da";

//tous les fetch pour recuperer les donnees de l api
export async function fetchMovie(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
  let res = await fetch(url);
  let movie = await res.json();
  //console.log(movie);
  return movie;
}

export async function fetchTvShowsNetflix(){
  const url = `https://api.themoviedb.org/3/tv/popular?with_networks=213&api_key=${API_KEY}&language=fr-FR`;
  let res = await fetch(url);
  let series = await res.json();
  // console.log(series.results);
  return series.results;
}


 export async function fetchTrending() {
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=fr-FR`;
  let res = await fetch(url);
  let moviesTrending = await res.json();
  //console.log(moviesTrending.results);
  return moviesTrending.results;

 }

 export async function fetchTopRated() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr-FR`;
  let res = await fetch(url);
  let TopRated = await res.json();
  //console.log(series);
  return TopRated.results;
 }

 export async function fetchByGenreMovies(genre) {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=${genre}`;
  let res = await fetch(url);
  let genreMovies = await res.json();
  //console.log(genreMovies)
  return genreMovies.results;
 }
 


export async function fetchModal(urlDefault, id) {
  const url = `${urlDefault}${id}?api_key=${API_KEY}`
  let res = await fetch(url)
  let infosProgram = await res.json()
  console.log(infosProgram)
  return infosProgram;
}

export async function fetchSearching(urlDefault, search) {
  const url = `${urlDefault}?api_key=${API_KEY}&include_adult=false&language=en-US&query=${search}`;
  let res = await fetch(url)
  let infosProgram = await res.json()
  // console.log(infosProgram)
  return infosProgram.results;
}
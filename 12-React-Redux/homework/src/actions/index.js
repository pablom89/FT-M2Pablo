export const acciones = {
  ADD : "ADD_MOVIE_FAVORITE",
  GET:  "GET_MOVIES",
  GETD: "GET_MOVIE_DETAIL",
  REMOVE: "REMOVE_MOVIE_FAVORITE"
}


export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
  }
  
  export function getMovies(titulo) {
    return function(dispatch) {
      return fetch("http://www.omdbapi.com/?apikey=9d00500d&s=" + titulo)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
  }

  export function getMovieDetail(id){
    return function(dispatch) {
        return fetch("http://www.omdbapi.com/?apikey=9d00500d&i=" + id + "&plot=full")
          .then(response => response.json())
          .then(json => {
            dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
          });
      };
  }

  export function removeMovieFavorite(payload){
      return {
          type: "REMOVE_MOVIE_FAVORITE",
          payload
      };
  }

  export function clearMovie(){
    return {
        type: "CLEAR_MOVIE"
    };
}
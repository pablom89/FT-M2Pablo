import {acciones} from '../actions'

const initialState = {
    movies: [],
    moviesLoaded: [],
    movieDetail: {}
}

export default function(state = initialState, action) {
    switch(action.type){
        case acciones.ADD:
            return {
                ...state,
                movies:[...state.movies, action.payload]
            }
        case acciones.GET:
            return {
                ...state,
                moviesLoaded: action.payload.Search
            }
        case acciones.GETD:
            return {
                ...state,
                movieDetail: action.payload
            }
        case acciones.REMOVE:
            return {
                ...state,
                movies: state.movies.filter(el => el.Title !== action.payload)
            }
        case 'CLEAR_MOVIE':
            return {
                ...state,
                movieDetail: {}
            }
        default: return state;
    }
}
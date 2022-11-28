import { ADD_FAVOR, DELETE_ADD, DELETE_FAVOR } from "../actions/types";

const initialState = {
    movie: [],
    localStorage: localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : [],
}

export default function rootReducer(state = initialState, action) {
    const copyMovie = [...state.movie]; 
    let index; 

    switch (action.type) {
        case ADD_FAVOR:
            return {
                ...state,
                movie: [...state.movie, action.payload.movie]
            }

        case DELETE_FAVOR:

            index = copyMovie.findIndex(movie => {
                return movie.id === action.payload;
            });
            copyMovie.splice(index, 1);

            return {
                ...state,
                copyMovie
            }

        default:
            return state;
    }
}
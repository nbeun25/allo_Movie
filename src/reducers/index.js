import React from "react";
import { ADD_FAVOR, DELETE_ADD, DELETE_FAVOR } from "../actions/types";

const initialState = {
    movie: [],
    localStorage: localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : [],
}

export default function rootReducer(state = initialState, action) {
    const copyMovie = [...state.movie]
    let movie
    switch (action.type) {
        case ADD_FAVOR:
            return {
                ...state,
                movie: copyMovie.map(movie => {
                    if (movie.id === action.payload.id) {
                        if (movie.movies.find(item => item.name == action.payload.item.name)) {
                            let index = copyMovie.find(element => element.id == action.payload.id)
                            let movie = index.movies.find(movie => movie.name == action.payload.movie.name)
                            movie.quantity += 1
                        } else {
                            return {
                                ...movie,
                                movies: [...movie.movies, action.payload.movie]
                            }
                        }
                    }
                    return movie
                })
            }

        case DELETE_FAVOR:

            movie = copyMovie.find(item => item.id == action.payload.id);


            movie = movie.movies.find(movie => movie.name == action.payload.movie.name)

            movie.movies = movie.movies.filter(movie => movie.name !== action.payload.movie.name)

            return {
                ...state,
                movie: copyMovie
            }

        default:
            return state;
    }
}
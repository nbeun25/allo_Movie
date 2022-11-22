import { ADD_FAVOR } from "./types";
import { DELETE_FAVOR } from "./types";

export const addFavor = (id, movie) => {
    return {
        type: ADD_FAVOR, 
        payload: {
            id: id, 
            movie: movie
        }
    }
}

export const deleteFavor = (id, movie) => {
    return {
        type: DELETE_FAVOR, 
        payload: {
            id: id, 
            movie: movie
        }
    }
}
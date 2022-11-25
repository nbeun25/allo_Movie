import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

const Favoris = () => {

    let movies = useSelector(state => state.movie)
    const listFavoris = movies.map(movie => {
        return (
            <h3>{movie.title}</h3>
        )
    })
    
    return (
        <div className="App-fav">
            <Navbar />
            <div className="card">
                <div className="favorite">
                    {listFavoris}
                </div>
            </div>
        </div>
    )
}

export default Favoris
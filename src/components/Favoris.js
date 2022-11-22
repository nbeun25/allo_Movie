import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

const Favoris = () => {

    const favors = useSelector(state => state.favor);
    const listFavoris = favors.map(movie => {
        return (
            <h3>{movie.title}</h3>
        )
    })
    
    return (
        <div className="App-fav">
            <Navbar />
            <div className="card">
                <p>All the movies you loved</p>
                <div className="favorite">
                    {listFavoris}
                </div>
            </div>
        </div>
    )
}

export default Favoris
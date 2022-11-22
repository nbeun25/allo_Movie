import { Layout, Rate } from "antd";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const Details = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);

    const getMovie = async () => {
        const json = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0613232d07f331f1e2267033f881fd75&language=fr-FR`)
            .then(res => res.json());

        // const lang = json.translations.find(item => {
        //     return item.iso_3166_1 == "FR";
        // })

        setMovie(json);
    };

    useEffect(() => {
        getMovie();
    }, []);

    const rate = Math.round((movie.vote_average * 5) / 10);

    const convertMovieDuration = ($duration) => {
        const hours = Math.floor($duration / 60); 
        const minutes = $duration % 60; 
        return `${hours}h ${minutes}min`
    }
 
    return (
            <div className="details">
                <Navbar />
                <div className="App-container">
                    <div className="movie-wrapper flex-container">
                        <div className="movie-left-wrapper">
                            <img
                                alt={movie.title}
                                src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                            />
                        </div>
                        <div className="movie-right-wrapper">
                            <div className="note">

                            </div>
                            <div className="movie-title">
                                {/* {Object.keys(movie).length > 0 ? movie.data.title : ""} */}
                                <h2>{movie.title}</h2>
                                <h3>
                                    {
                                        movie.vote_average ?
                                            <Rate
                                                disabled
                                                allowHalf
                                                defaultValue={rate}
                                            />
                                            : ""
                                    }
                                </h3>
                                <h3>{convertMovieDuration(movie.runtime)}</h3>

                            </div>
                            <div className="movie-description">
                                {/* {Object.keys(movie).length > 0 ? movie.data.overview : ""} */}
                                <p>{movie.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Details
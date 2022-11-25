import React from "react";
import { ContainerOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import { Divider, List, Tooltip, Button } from 'antd';
import { Link } from "react-router-dom";

const Favoris = () => {

    let movies = useSelector(state => state.movie)
    const listFavoris = movies.map(movie => {
        return (
            <div className="line">
                <div className="img">
                    <img
                        alt={movie.title}
                        src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                    />
                </div>

                <div className="center">
                    <div className="description">
                        <div className="detail">
                            <h3><b>{movie.title}</b></h3>
                        </div>
                        <div className="detail">
                            <Link to={`/movie/${movie.id}`}>
                                <Tooltip title="details">
                                    <Button
                                        type="primary"
                                        shape="circle"
                                        icon={<ContainerOutlined />}
                                        size="large"
                                    />
                                </Tooltip>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

        )
    })

    return (
        <div className="App-fav">
            <Navbar />
            <div className="card">
                <div className="favorite">
                        <Divider orientation="center">Mes favoris</Divider>
                        <List
                            size="large"
                            bordered
                            dataSource={listFavoris}
                            renderItem={(item) => <List.Item>{item}</List.Item>}
                        />
                </div>
            </div>
        </div>
    )
}

export default Favoris
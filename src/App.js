import { ContainerOutlined, AudioOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Layout, Row, Space, Tooltip, Input, Pagination } from 'antd';
import Navbar from "./components/Navbar";
import Favorbtn from './components/Favorbtn';
import { useDispatch, useSelector } from 'react-redux';
import { addFavor } from './actions';

const App = () => {

  const { Search } = Input; 

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
  const onSearch = (value) => console.log(value);

  const dispatch = useDispatch()
  const favors = useSelector(state => state.movie);
  const [movies, setMovies] = useState([]);
  console.log(favors);
  const fetchMovies = async () => {
    const json = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0613232d07f331f1e2267033f881fd75&language=fr-FR&page=1`).then(res => res.json());

    setMovies(json.results);
  };
  useEffect(() => {
    fetchMovies();
  }, [])

  console.log(movies);

  const discoverItems = movies.map(item => {
    return (
      <div key={item.id} className="discoverItem">
        <Card
          hoverable
          cover={
            <img
              alt={item.title}
              src={`https://image.tmdb.org/t/p/w342/${item.poster_path}`}
            />
          }
          style={{
            width: 300,
          }}
        >
          <div className="title">
            <b>{item.title}</b>
          </div>
          <div className="release_date">
            {item.release_date}
          </div>
          <div className="btns">
            <div className="btn">
              <Link to={`/movie/${item.id}`}>
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
            <div className="btn">
              <Favorbtn
                action={(e) => dispatch(addFavor(item.id, item))}
              />
            </div>
          </div>
        </Card>
      </div>
    )
  })

  return (
    <Layout className="layout">
      <div className="App">
        <Navbar />
        <div className="App-container">
          <div className="search">
            <Space direction="vertical">
              <Search placeholder="Film recherché..." onSearch={onSearch} enterButton />
            </Space>
          </div>
          <Row>
            {discoverItems}
            <Pagination defaultCurrent={1} total={50}/>
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default App;
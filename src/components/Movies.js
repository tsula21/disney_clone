import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import requests from "../Requests";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const fetchURL = requests.requestUpcoming;

  // const { movieId } = useParams();

  useEffect(() => {
    axios.get(fetchURL).then((resp) => {
      setMovies(resp.data.results);
    });
    console.log(movies, "movies");
  }, [fetchURL]);
  return (
    <Container>
      <h4>Recommended For You</h4>
      <Content>
        {movies.slice(0, 4).map((item, index) => (
          <Wrap key={item.id}>
            <Link to={`/detail/${item.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                alt=""
              />
            </Link>
          </Wrap>
        ))}
      </Content>
      <h4>Popular on Disney+</h4>
      <Content>
        {movies.slice(4, 8).map((item, index) => (
          <Wrap key={item.id}>
            <Link to={`/detail/${item.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                alt=""
              />
            </Link>
          </Wrap>
        ))}
      </Content>
    </Container>
  );
};

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-bottom: 50px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    border-color: rgba(249, 249, 249, 0.8);
    transform: scale(1.05);
  }
`;

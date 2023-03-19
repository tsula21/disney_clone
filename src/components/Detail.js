import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import requests from "../Requests";

import styled from "styled-components";

function Detail() {
  const { movieId } = useParams();
  const [allArr, setAllArr] = useState([]);

  const fetchData = () => {
    const requestOne = axios.get(requests.requestUpcoming);

    axios
      .all([requestOne])
      .then(
        axios.spread((...allData) => {
          const respPopular = allData[0];

          // use/access the results
          setAllArr(respPopular.data.results);
          // console
          console.log("data fetch");
        })
      )
      .catch((errors) => {
        // react on errors.
      });
  };

  useEffect(() => {
    //
    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  const film = allArr.find((item) => item.id == movieId);

  console.log(allArr, "allarray");
  console.log(film, "film");

  return (
    <Container>
      <FadeEffect></FadeEffect>
      <Box>
        <Background>
          <img
            src={`https://image.tmdb.org/t/p/original/${film?.backdrop_path}`}
            alt=""
          />
        </Background>
        <ImageTitle>
          {/* <img
          src="https://occ-0-3466-358.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXaJz5OHc6lXXzm5bNlkMCJhSNLD5hKsaEb04EBg2-9uX0uZBPaz9Xu_uEpfbAjnz8Um6t8I5swlugAVUxfEMsFyG44Od2HpRdWUlk_xAT-NUxJIlHZbBvfffotJFfp3eRw-M_Uj5IAQh0CztHLPgDddhrizMMAGgfKkTX_X6QlY-Xw6aK8lqg.png?r=606"
          alt=""
        /> */}
          <h2 className="singlemovietext_h2">{film?.title}</h2>
        </ImageTitle>
        <Controls>
          <PlayButton>
            <img src="/images/play-icon-black.png" alt="" />
            <span>PLAY</span>
          </PlayButton>
          <TrailerButton>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </TrailerButton>
        </Controls>
        <SubTitle>2022 | 13+ | 2h 2m | Romantic Movies</SubTitle>
        <Description>{truncate(`${film?.overview}`, 150)}</Description>
      </Box>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  /* padding: 0 calc(3.5vw + 5px); */
  position: relative;
  overflow-y: hidden;
`;

const FadeEffect = styled.div`
  position: absolute;
  width: 50%;
  height: 100vh;
  background: linear-gradient(
    90deg,
    #181818 10%,
    hsla(0, 0%, 9%, 0.98) 20%,
    hsla(0, 0%, 9%, 0.97) 25%,
    hsla(0, 0%, 9%, 0.95) 35%,
    hsla(0, 0%, 9%, 0.94) 40%,
    hsla(0, 0%, 9%, 0.92) 45%,
    hsla(0, 0%, 9%, 0.9) 50%,
    hsla(0, 0%, 9%, 0.87) 55%,
    hsla(0, 0%, 9%, 0.82) 60%,
    hsla(0, 0%, 9%, 0.75) 65%,
    hsla(0, 0%, 9%, 0.63) 70%,
    hsla(0, 0%, 9%, 0.45) 75%,
    hsla(0, 0%, 9%, 0.27) 80%,
    hsla(0, 0%, 9%, 0.15) 85%,
    hsla(0, 0%, 9%, 0.08) 90%,
    hsla(0, 0%, 9%, 0.03) 95%,
    hsla(0, 0%, 9%, 0)
  );
  opacity: 60%;
`;

const Box = styled.div`
  position: absolute;
  margin-left: 50px;
  @media (max-width: 444px) {
    margin-left: 15px;
  }
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  display: flex;
  align-items: flex-end;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  @media (max-width: 901px) {
    padding: 0px 12px;
    font-size: 13px;
    height: 45px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 760px;
  @media (max-width: 901px) {
    font-size: 16px;
    max-width: 90%;
  }
`;

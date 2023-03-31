import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
      height: "390",
      width: "100%",
      playerVars: {
        // https://www.youtube.com/watch?v=BUjXzrgntcY
        autoplay: 1,
      },
    };

    const handleClick = (movie) => {
      // console.table(movie?.title)
      if (trailerUrl) {
        setTrailerUrl('')
      } else {
        movieTrailer(movie?.title || "")
          .then(url => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'));
          }).catch((error) => console.log(error));
      }
    }

    return (
        <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies?.map((movie) => (
            (isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
          <img
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
         ) )}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
    );
}

export default Row;
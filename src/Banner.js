import React, { useState, useEffect } from 'react'
import './Banner.css'
import axios from './axios';
import requests from './requests';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Banner() {
    const [movie, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request;
        }
        fetchData();
    }, []);

    console.log(movie)

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

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
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
               )`,
                backgroundPosition: "center center",
            }}>
            <div className='banner_contents'>
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button onClick={() => handleClick(movie)} className="banner_button">Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className='banner_description'>
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

            <div className="banner--fadeBottom" />
        </header>
    );
}

export default Banner
import React, { useEffect, useState } from 'react'
import axios from './axios';
import requests from './requests';

function Banner() {
    const [movie, setMovie]=useState([]);

    useEffect(()=>{
        async function fetchData (){
            const request= await axios.get(requests.fetchMovieOriginals);
            setMovie(request.data.results[Math.floor(Math.random()* request.data.results.length)]);
            return request;

        }
        fetchData();
    },[]);


  return (
    <header className="banner"
    style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition:"center center"
    }}
    
    >
        
        <div className='banner_contents'></div>
        <h1>
            {movie?.title || movie?.name||movie?.original_name}
             </h1>
      
    </header>
  )
}

export default Banner;

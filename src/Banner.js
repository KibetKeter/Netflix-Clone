import axios from './axios'
import React,{useState,useEffect }from 'react'
import requests from './requests';

function Banner() {

    // Set up state to save the movies to be selected within the banner
const [movie,setMovie] = useState([]);

useEffect(() => {
                    async function fetchData() 
                        {
                            const request = await axios.get(requests.fetchNetflixOriginals)
                            setMovie (
                                        request.data.results
                                            [
                                                // Picks a random Movie from the Array
                                                Math.floor(Math.random() * request.data.results.length)
                                            ]
                                    );
                                return request
                        }
                    fetchData();
                }, [])
        
                console.log(movie)
    return (
       <header className="banner"
                // {/*Background Image */}
        style={
                {
                    backgroundSize:"cover",
                    backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                    backgroundPosition:"center center"
                }
        }
       >
           {/* Title */}
                  <div className="banner__contents">
                      <h1>
                          {/* Optional Chaining the Question Mark */}
                            {movie?.name || movie?.title || movie?.original_name}
                      </h1>
                  </div>
           <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
           </div>
           {/* Description */}
           <h1 className= "banner__description">
               {movie?.overview}

           </h1>
            {/* {movie.overview} */}
       </header>
    )
}

export default Banner

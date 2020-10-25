import React, {useState,useEffect} from 'react'
import axios from './axios'
import './Row.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const base_url = "https://image.tmdb.org/t/p/original/";


function Row({ title,fetchUrl,isLargeRow }) {

// Temporary storage for movies
const [movies, setMovies] = useState([]);
// State to control the trailer URl
const[trailerUrl,setTrailerUrl] = useState("");

// Snippet of code which runs on a specific condition
// When Row Component loads we need the Requests to run to pull data from the TMdb database
useEffect(() => {
                    // if [] is left blank, we mean that the useEffect should run once and don't run again
                    async function fetchData()
                            {
                                const request = await axios.get(fetchUrl);
                                setMovies(request.data.results)
                                return request;
                            }
                    fetchData();
                }, [fetchUrl]);

// Options for youtube video
        const opts = {
            height:"390",
            width:"100%",
            playerVars:{
            autoplay:1
        }
        };
         
    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl('');
        }
        else {
            movieTrailer(movie?.name || "")
            .then(url => 
                {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                    console.log(setTrailerUrl);
                })
            .catch((error) => console.log(error));
        }

    }
       return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                
                    {movies.map(movie => (
                         console.table(movie),
                        <img 
                            key = {movie.id}
                            onClick = {()=> handleClick(movie)}
                            // onClick = {()=> handleClick(movie)}
                            className= {`row__poster ${isLargeRow && "row__posterLarge"}`}
                            src= {`${base_url}${movie.poster_path}`} alt = {movie.name}/>
                    ))}
                   
            </div>                    
                   {trailerUrl  && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row

import React, {useState,useEffect} from 'react'
import axios from './axios'
import './Row.css'
const base_url = "https://image.tmdb.org/t/p/original/";


function Row({ title,fetchUrl,isLargeRow }) {

// Temporary storage for movies
const [movies, setMovies] = useState([]);

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
                }, [fetchUrl])
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                    {movies.map(movie => (
                        <img 
                            key = {movie.id}
                            className= {`row__poster ${isLargeRow && "row__posterLarge"}`}
                            src= {`${base_url}${movie.poster_path}`} alt = {movie.name}/>
                    ))}
            </div>
        </div>
    )
}

export default Row

// TMDB API Key
const APIKEY = "bdef94b3f37f97bb61ab4b8c5094eb2a";


// Different Genre Movies
const requests =
                {
                    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-us`,
                    fetchNetflixOriginals:`/discover/tv?api_key=${APIKEY}&with_networks=213`,
                    fetchTopRated:`movie/top_rated?api_key=${APIKEY}&language=en-us`,
                    fetchActionMovies:`/discover/movie?api_key=${APIKEY}&with_genres=28`,
                    fetchComedyMovies:`/discover/movie?api_key=${APIKEY}&with_genres=35`,
                    fetchHorrorMovies:`/discover/movie?api_key=${APIKEY}&with_genres=27`,
                    fetchRomanceMovies:`/discover/movie?api_key=${APIKEY}&with_genre=10749`,
                    fetchDocumentaries:`/discover/movie?api_key=${APIKEY}&with_genres=99`,
                }
export default requests;
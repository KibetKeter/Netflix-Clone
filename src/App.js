import React from 'react';
import './App.css';
import Row from './Row.js';
import requests from './requests.js';
import Banner from './Banner.js'
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <Nav/>
      {/* Banner */}
      <Banner/>
      {/* Rows With Movies */}
      <Row title = "Netflix Originals" isLargeRow fetchUrl ={requests.fetchNetflixOriginals}/>
      <Row title = "Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title = "Top Rated Movies" fetchUrl={requests.fetchTopRated}/>
      <Row title = "Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title = "Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title = "Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}
export default App;

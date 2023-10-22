import React,{useState,useEffect} from 'react';
import './App.css';
import Movie from './components/Movie';
import axios from 'axios';

const API_URL="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bdc600e151c101164d46bf0e47eedc21"

// const IMAGE_PATH='https://image.tmdb.org/t/p/w1280'

const SEARCH_API="https://api.themoviedb.org/3/search/movie?api_key=bdc600e151c101164d46bf0e47eedc21&query=''"


function App() {

  const [movies,setMovies] =useState([]);
  const [searchTerm,setsearchTerm]=useState([])


///we are using useeffect to fetch the data
  useEffect(()=>
  {
    getMovies(API_URL)
    },[])


const getMovies=(API)=>
{
  axios.get(API).then((response)=>{
    const data=response.data.results
    setMovies(data)
})
}

  const handleOnSubmit=(e)=>
  {
    e.preventDefault()
    if(searchTerm && searchTerm!=="")
    {
        getMovies(SEARCH_API+searchTerm)
        setsearchTerm(" ")
    }
    
    else
    {
        window.location.reload()
    }
  }

  const handleOnChange=(e)=>
  {
   setsearchTerm(e.target.value)
  }


  return (
    <div>
       <header>
       <h3>Wookie Movies</h3>
        <form onSubmit={handleOnSubmit}>
            <input type="text" id="search" className="search" placeholder="search" value={searchTerm} onChange={handleOnChange}/>
        </form>
    </header>
    <div className="movie-container">

    {movies.length>0 && movies.map((movie)=>
       <Movie key={movie.id} {...movie}/>
        )}
    </div>
    </div>
  );
}

export default App;

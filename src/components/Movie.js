import React from 'react';

let IMAGE_PATH='https://image.tmdb.org/t/p/w1280'



const Movie = ({title,poster_path,vote_average,overview}) => {
    
    return (
        <div className="movie">
            <img src={IMAGE_PATH + poster_path} alt={title}/>
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={setVoteClass(vote_average)}>{vote_average}</span>
            </div>
            <div className="overview">
                <h3>overview</h3>
                {overview}
            </div>
        </div>
        
    );
}


const setVoteClass=((vote)=>
{
    if(vote>=8)
    {
        return "green"
    }
    else if(vote>=5)
    {
        return "orange"
    }
    else{
        return "red"
    }
})
export default Movie;

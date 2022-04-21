import React from "react";
import Rating from "react-rating-stars-component";

import { Link } from 'react-router-dom';
const MovieCard = ({ movie, deleteHAndler, handleDone }) => {
  return (
    <div>
      <p>{movie.name}</p>
      <Rating value={movie.rating} precision={0.5} />
      <img src={movie.image} alt="movie" />
      <p>{movie.date}</p>
      <button onClick={() => deleteHAndler(movie.id)}>remove</button>
      <button onClick={() => handleDone(movie.id)}>
        {" "}
        {movie.isDone ? "Yep you did it " : "Done"}{" "}
      </button>
      <Link to={`/movies/${movie.id}`}>more Details</Link>
      
    </div>
  );
};
export default MovieCard;

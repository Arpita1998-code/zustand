import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UseMoviesStore from '../store';

const MovieDetails = () => {
  const { id } = useParams();
  const { movies } = UseMoviesStore();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const selectedMovie = movies.find((m) => m.id.toString() === id);

    if (selectedMovie) {
      setMovie(selectedMovie);
    } else {
      console.error(`Movie with ID ${id} not found`);
    }
  }, [id, movies]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
          <h2>Movie Details</h2>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="h-50 w-40 object-cover object-center"
            />
            <div className="px-6 py-4 relative">
              <div className="text-sm mb-5 font-bold absolute top-[-240px] left-48">
                {props.match.params.movie.title}</div>
              <div className="text-xs font-bold absolute top-[-130px] left-48">
                {props.match.params.movie.release_date}</div>
              <div className=""><p className="text-xs w-95 flex">
                {props.match.params.movie.overview}</p></div>
            </div>
          </div>
        </div>
  );
};
export default MovieDetails;
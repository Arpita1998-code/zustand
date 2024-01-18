import React from 'react';
const MovieCard = ({ movie }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="h-50 w-40 object-cover object-center"
      />
      <div className="px-6 py-4 relative">
        <div className="text-sm mb-5 font-bold absolute top-[-240px] left-48">{movie.title}</div>
        <div className="text-xs font-bold absolute top-[-130px] left-48">{movie.release_date}</div>
        <div className=''><p className="text-xs w-95 flex">{movie.overview}</p></div>
      </div>
    </div>
  );
};
export default MovieCard;
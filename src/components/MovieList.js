import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UseMoviesStore from '../store';
import MovieCard from '../components/MovieCard';

const MovieList = () => {
  const { movies, status, error, fetchMovies } = UseMoviesStore();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (status === 'idle') {
      fetchMovies();
    }
  }, [status, fetchMovies]);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  if (movies.length === 0) {
    return <div>No movies available</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="mb-10 text-center solid underline font-mono text-3xl font-bold shadow-3xl">Movies</h1>

      <input
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 border border-black solid rounded bold"
      />

      <div className="movieList flex flex-wrap ml-14 overflow-x-auto snap-x 
                    scroll-smooth justify-evenly p-8 gap-5 grow-4">
        {filteredMovies.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <MovieCard movie={movie}
              className="flex-auto relative top-10 left-16 w-60 ml-10 mr-80 p-7 bg-gray-200 rounded-md shadow-2xl transform transition-transform duration-300 snap-start transform hover:scale-105 hover:text-pink"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default MovieList;
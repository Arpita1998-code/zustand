import create from 'zustand';

const BASE_URL = 'https://api.themoviedb.org/3/discover/movie';
const API_KEY = '1a85467aa576e7e8ec1d09bc874e5c20';

const UseMoviesStore = create((set) => ({
  movies: [],
  status: 'idle',
  error: null,
  fetchMovies: async () => {
    set({ status: 'loading' });
    try {
      const response = await fetch(`${BASE_URL}?api_key=${API_KEY}`);
      const data = await response.json();
      set({ status: 'succeeded', movies: data.results });
    } catch (error) {
      console.error('Error fetching movies:', error);
      set({ status: 'failed', error: error.message });
    }
  },
}));

export default UseMoviesStore;
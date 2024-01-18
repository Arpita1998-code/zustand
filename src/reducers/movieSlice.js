import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const API_KEY = '1a85467aa576e7e8ec1d09bc874e5c20';
const BASE_URL = 'https://api.themoviedb.org/3/discover/movie';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  try {
  const response = await fetch(`${BASE_URL}?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
} catch (error) {
  console.error('Error fetching movies:', error);
  throw error;
}
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
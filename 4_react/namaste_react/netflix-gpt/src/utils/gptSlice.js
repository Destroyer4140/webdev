import { createSlice } from "@reduxjs/toolkit";


const getSlice = createSlice({
  name: 'gpt',
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGPTMovieResult: (state, action) => {
      const {movieNames, movieResults} = action.payload;
      state.movieResults = movieResults;
      state.movieNames = movieNames;
    }
  }
});


export const { toggleGptSearchView, addGPTMovieResult } = getSlice.actions;
export default getSlice.reducer;
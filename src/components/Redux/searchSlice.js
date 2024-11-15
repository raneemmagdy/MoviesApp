import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

let initialState = {
  searchResults: [],
  loading: false,
  error: null,
};


export const fetchSearchResults = createAsyncThunk(
  'search/fetchSearchResults',
  async (query, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=3e900c7706fc519f0627de6b8ef6e26f&query=${query}`
      );
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


let searchSlice = createSlice({
  name: 'search',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSearchResults.fulfilled, (state, { payload }) => {
        state.searchResults = payload;
        state.loading = false;
      })
      .addCase(fetchSearchResults.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });
  },
});

export const searchReducer = searchSlice.reducer;
